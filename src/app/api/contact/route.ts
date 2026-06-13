import nodemailer from 'nodemailer';
import { getContactCollection } from '@/lib/mongodb';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type ContactPayload = {
  name: string;
  email: string;
  subject?: string;
  message: string;
  budget?: string;
};

type ContactDocument = ContactPayload & {
  createdAt: Date;
  source: 'portfolio-site';
  status: 'new';
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function formatDateTime() {
  return new Intl.DateTimeFormat('en-IN', {
    dateStyle: 'medium',
    timeStyle: 'short'
  }).format(new Date());
}

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return Response.json({ ok: false, error: 'Invalid JSON' }, { status: 400 });
  }

  const name = (payload.name ?? '').trim();
  const email = (payload.email ?? '').trim();
  const subject = (payload.subject ?? '').trim();
  const message = (payload.message ?? '').trim();
  const budget = (payload.budget ?? '').trim();

  if (!name || !email || !message) {
    return Response.json(
      { ok: false, error: 'Missing required fields' },
      { status: 400 }
    );
  }

  if (!isEmail(email)) {
    return Response.json({ ok: false, error: 'Invalid email' }, { status: 400 });
  }

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    SMTP_SECURE,
    SMTP_FROM,
    CONTACT_TO
  } = process.env;

  if (
    !SMTP_HOST ||
    !SMTP_PORT ||
    !SMTP_USER ||
    !SMTP_PASS ||
    !SMTP_FROM ||
    !CONTACT_TO
  ) {
    return Response.json(
      { ok: false, error: 'Email is not configured on the server' },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: SMTP_SECURE === 'true',
    auth: { user: SMTP_USER, pass: SMTP_PASS }
  });

  const safeSubject = subject || 'New contact form submission';
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    budget ? `Budget: ${budget}` : undefined,
    `Submitted: ${formatDateTime()}`,
    '',
    'Message:',
    message
  ]
    .filter(Boolean)
    .join('\n');

  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>${escapeHtml(safeSubject)}</title>
  </head>
  <body style="margin:0;padding:0;background:#f6f7fb;font-family:Arial,Helvetica,sans-serif;color:#0f172a;">
    <div style="max-width:640px;margin:0 auto;padding:24px;">
      <div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;overflow:hidden;">
        <div style="padding:18px 20px;background:linear-gradient(90deg,#3b82f6,#8b5cf6);color:#ffffff;">
          <div style="font-size:14px;opacity:.95;">Portfolio Contact</div>
          <div style="font-size:18px;font-weight:700;margin-top:2px;">${escapeHtml(safeSubject)}</div>
        </div>
        <div style="padding:20px;">
          <div style="font-size:14px;color:#475569;margin-bottom:14px;">
            New contact form submission received on <strong style="color:#0f172a;">${escapeHtml(formatDateTime())}</strong>.
          </div>

          <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;margin-bottom:16px;">
            <tr>
              <td style="padding:10px 12px;border:1px solid #e2e8f0;border-radius:12px;background:#f8f9fb;">
                <div style="font-size:12px;color:#64748b;">Name</div>
                <div style="font-size:14px;font-weight:600;color:#0f172a;">${escapeHtml(name)}</div>
              </td>
            </tr>
            <tr><td style="height:10px;"></td></tr>
            <tr>
              <td style="padding:10px 12px;border:1px solid #e2e8f0;border-radius:12px;background:#f8f9fb;">
                <div style="font-size:12px;color:#64748b;">Email</div>
                <div style="font-size:14px;font-weight:600;color:#0f172a;">
                  <a href="mailto:${escapeHtml(email)}" style="color:#2563eb;text-decoration:none;">${escapeHtml(email)}</a>
                </div>
              </td>
            </tr>
            ${
              budget
                ? `<tr><td style="height:10px;"></td></tr>
            <tr>
              <td style="padding:10px 12px;border:1px solid #e2e8f0;border-radius:12px;background:#f8f9fb;">
                <div style="font-size:12px;color:#64748b;">Budget</div>
                <div style="font-size:14px;font-weight:600;color:#0f172a;">${escapeHtml(budget)}</div>
              </td>
            </tr>`
                : ''
            }
          </table>

          <div style="border:1px solid #e2e8f0;border-radius:12px;background:#ffffff;">
            <div style="padding:10px 12px;border-bottom:1px solid #e2e8f0;background:#f8f9fb;font-size:12px;color:#64748b;">
              Message
            </div>
            <div style="padding:12px;font-size:14px;line-height:1.5;white-space:pre-wrap;">${escapeHtml(message)}</div>
          </div>

          <div style="margin-top:16px;font-size:12px;color:#94a3b8;">
            You can reply directly to this email to respond to <strong>${escapeHtml(name)}</strong>.
          </div>
        </div>
      </div>
    </div>
  </body>
</html>`;

  try {
    // Helps catch misconfig early (bad host/port/auth). Harmless in prod.
    await transporter.verify();

    const info = await transporter.sendMail({
      from: SMTP_FROM,
      to: CONTACT_TO,
      replyTo: email,
      subject: safeSubject,
      text,
      html,
      headers: {
        'X-Contact-Form': 'portfolio-site',
        'X-Contact-From': email
      }
    });

    try {
      const collection = await getContactCollection();
      const contactDoc: ContactDocument = {
        name,
        email,
        subject: safeSubject,
        message,
        budget,
        createdAt: new Date(),
        source: 'portfolio-site',
        status: 'new'
      };
      await collection.insertOne(contactDoc);
    } catch (mongoError) {
      const isDev = process.env.NODE_ENV !== 'production';
      return Response.json(
        {
          ok: true,
          warning: 'Email sent, but MongoDB save failed',
          ...(isDev && mongoError instanceof Error ? { detail: mongoError.message } : null),
          ...(isDev ? { messageId: info.messageId, accepted: info.accepted, rejected: info.rejected } : null)
        },
        { status: 200 }
      );
    }

    const isDev = process.env.NODE_ENV !== 'production';
    return Response.json({
      ok: true,
      ...(isDev ? { messageId: info.messageId, accepted: info.accepted, rejected: info.rejected } : null)
    });
  } catch (err) {
    const isDev = process.env.NODE_ENV !== 'production';
    return Response.json(
      {
        ok: false,
        error: 'Failed to send email',
        ...(isDev && err instanceof Error ? { detail: err.message } : null)
      },
      { status: 500 }
    );
  }
}
