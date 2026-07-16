import nodemailer from 'nodemailer';
import { contactsCollection } from "@/lib/collections";
import { ObjectId } from "mongodb";

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
type ContactPayload = {
  name: string;
  mobile: string;
  email: string;
  company: string;
  businessType: string;
  budget: string;
  subject?: string;
  message: string;
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
  const mobile = (payload.mobile ?? '').trim();
  const company = (payload.company ?? "").trim();
  const businessType = (payload.businessType ?? "").trim();
  const subject = (payload.subject ?? '').trim();
  const message = (payload.message ?? '').trim();
  const budget = (payload.budget ?? '').trim();

  if (!name || !mobile || !email || !company || !businessType || !budget || !message) {
    return Response.json(
      {
        ok: false,
        error: "Missing required fields",
      },
      {
        status: 400,
      }
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
    `Mobile: ${mobile}`,
    `Email: ${email}`,
    `Company: ${company}`,
    `Business Type: ${businessType}`,
    `Budget: ${budget}`,
    `Submitted: ${formatDateTime()}`,
    "",
    "Message:",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escapeHtml(safeSubject)}</title>
</head>

<body style="margin:0;padding:30px;background:#f3f6fb;font-family:Arial,Helvetica,sans-serif;">

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:700px;margin:auto;background:#ffffff;border-radius:18px;overflow:hidden;border:1px solid #e5e7eb;">

<!-- Header -->
<tr>
<td style="padding:35px;background:linear-gradient(135deg,#2563eb,#7c3aed);color:#ffffff;">

<div style="font-size:14px;opacity:.9;">
Naxora Technology
</div>

<h1 style="margin:10px 0 5px;font-size:28px;font-weight:bold;">
New Contact Form Submission
</h1>

<p style="margin:0;font-size:15px;opacity:.9;">
A new enquiry has been submitted through your website.
</p>

</td>
</tr>

<!-- Body -->
<tr>
<td style="padding:30px;">

<p style="margin-top:0;margin-bottom:25px;color:#475569;font-size:15px;">
A visitor has submitted the contact form. Below are the enquiry details.
</p>

<table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">

<tr>
<td style="padding:14px;border:1px solid #e2e8f0;border-radius:12px;background:#f8fafc;">
<div style="font-size:12px;color:#64748b;">Name</div>
<div style="font-size:15px;font-weight:600;color:#0f172a;margin-top:4px;">
${escapeHtml(name)}
</div>
</td>
</tr>

<tr><td style="height:12px;"></td></tr>

<tr>
<td style="padding:14px;border:1px solid #e2e8f0;border-radius:12px;background:#f8fafc;">
<div style="font-size:12px;color:#64748b;">Mobile Number</div>
<div style="font-size:15px;font-weight:600;color:#0f172a;margin-top:4px;">
${escapeHtml(mobile)}
</div>
</td>
</tr>

<tr><td style="height:12px;"></td></tr>

<tr>
<td style="padding:14px;border:1px solid #e2e8f0;border-radius:12px;background:#f8fafc;">
<div style="font-size:12px;color:#64748b;">Email Address</div>
<div style="font-size:15px;font-weight:600;margin-top:4px;">
<a href="mailto:${escapeHtml(email)}" style="color:#2563eb;text-decoration:none;">
${escapeHtml(email)}
</a>
</div>
</td>
</tr>

<tr><td style="height:12px;"></td></tr>

<tr>
<td style="padding:14px;border:1px solid #e2e8f0;border-radius:12px;background:#f8fafc;">
<div style="font-size:12px;color:#64748b;">Company / Organisation</div>
<div style="font-size:15px;font-weight:600;color:#0f172a;margin-top:4px;">
${escapeHtml(company)}
</div>
</td>
</tr>

<tr><td style="height:12px;"></td></tr>

<tr>
<td style="padding:14px;border:1px solid #e2e8f0;border-radius:12px;background:#f8fafc;">
<div style="font-size:12px;color:#64748b;">Type of Business</div>
<div style="font-size:15px;font-weight:600;color:#0f172a;margin-top:4px;">
${escapeHtml(businessType)}
</div>
</td>
</tr>

<tr><td style="height:12px;"></td></tr>

<tr>
<td style="padding:14px;border:1px solid #e2e8f0;border-radius:12px;background:#f8fafc;">
<div style="font-size:12px;color:#64748b;">Estimated Budget</div>
<div style="font-size:15px;font-weight:600;color:#0f172a;margin-top:4px;">
${escapeHtml(budget)}
</div>
</td>
</tr>

<tr><td style="height:12px;"></td></tr>

<tr>
<td style="padding:14px;border:1px solid #e2e8f0;border-radius:12px;background:#f8fafc;">
<div style="font-size:12px;color:#64748b;">Submitted On</div>
<div style="font-size:15px;font-weight:600;color:#0f172a;margin-top:4px;">
${escapeHtml(formatDateTime())}
</div>
</td>
</tr>

</table>

<!-- Message -->

<div style="margin-top:28px;border:1px solid #e2e8f0;border-radius:14px;overflow:hidden;">

<div style="padding:14px 18px;background:#f8fafc;border-bottom:1px solid #e2e8f0;font-size:13px;font-weight:bold;color:#475569;">
Project Details / Message
</div>

<div style="padding:20px;font-size:15px;line-height:1.8;color:#334155;white-space:pre-wrap;">
${escapeHtml(message)}
</div>

</div>

<!-- CTA -->

<div style="text-align:center;margin-top:35px;">

<a href="mailto:${escapeHtml(email)}"
style="display:inline-block;background:#2563eb;color:#ffffff;text-decoration:none;padding:14px 32px;border-radius:10px;font-size:15px;font-weight:600;">
Reply to ${escapeHtml(name)}
</a>

</div>

<!-- Footer -->

<hr style="margin:35px 0 20px;border:none;border-top:1px solid #e2e8f0;">

<p style="margin:0;font-size:13px;color:#64748b;text-align:center;line-height:1.7;">

This enquiry was submitted from the
<strong>Naxora Technology</strong>
website contact form.

<br><br>

Generated automatically on
<strong>${escapeHtml(formatDateTime())}</strong>

</p>

</td>
</tr>

</table>

</body>
</html>`;

  let mongoSaved = false;
  let mongoErrorMessage: string | undefined;
  let contactDocId: string | undefined;

  try {
    const collection = await contactsCollection();
    const contactDoc: ContactDocument = {
      name,
      mobile,
      email,
      company,
      businessType,
      budget,
      subject: safeSubject,
      message,
      createdAt: new Date(),
      source: "portfolio-site",
      status: "new",
    };
    const result = await collection.insertOne(contactDoc);
    contactDocId = result.insertedId instanceof ObjectId ? result.insertedId.toString() : String(result.insertedId);
    mongoSaved = true;
  } catch (mongoError) {
    mongoErrorMessage = mongoError instanceof Error ? mongoError.message : 'MongoDB save failed';
  }

  let mailInfo: {
    messageId: string;
    accepted: Array<string | { address: string; name?: string }> | undefined;
    rejected: Array<string | { address: string; name?: string }> | undefined;
  } | null = null;
  let mailErrorMessage: string | undefined;

  try {
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
        'X-Contact-From': email,
      },
    });

    mailInfo = {
      messageId: info.messageId,
      accepted: info.accepted,
      rejected: info.rejected,
    };
  } catch (mailError) {
    mailErrorMessage = mailError instanceof Error ? mailError.message : 'Failed to send email';
  }

  const isDev = process.env.NODE_ENV !== 'production';

  if (mongoSaved && !mailErrorMessage) {
    return Response.json({
      ok: true,
      refid: contactDocId,
      ...(isDev && mailInfo ? mailInfo : null),
    });
  }

  if (mongoSaved && mailErrorMessage) {
    return Response.json(
      {
        ok: true,
        warning: 'Data saved, but email failed',
        refid: contactDocId,
        detail: mailErrorMessage,
        mailInfo,
      },
      { status: 200 }
    );
  }

  if (!mongoSaved && mailInfo) {
    return Response.json(
      {
        ok: true,
        warning: 'Email sent, but database save failed',
        ...(isDev
          ? {
              detail: {
                mail: mailErrorMessage,
                mongo: mongoErrorMessage,
              },
              mailInfo,
            }
          : null),
      },
      { status: 200 }
    );
  }

  return Response.json(
    {
      ok: false,
      error: 'Failed to submit contact form',
      ...(isDev
        ? {
          detail: {
            mail: mailErrorMessage,
            mongo: mongoErrorMessage,
          },
        }
        : null),
    },
    { status: 500 }
  );
}


