"use client";

import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { Loader2, Mail, Search, X, Eye } from "lucide-react";

type Enquiry = {
  _id?: string;
  id?: string;
  name?: string;
  email?: string;
  mobile?: string;
  company?: string;
  businessType?: string;
  subject?: string;
  message?: string;
  budget?: string;
  source?: string;
  status?: string;
  createdAt?: string;
  updatedAt?: string;
};

function formatDateTime(value?: string) {
  if (!value) return "--";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "--";
  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

export default function EnquiriesPage() {
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState<Enquiry[]>([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Enquiry | null>(null);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const fetchEnquiries = async (nextPage: number) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/admin/contact?page=${nextPage}&limit=${pageSize}`, {
        cache: "no-store",
      });
      const data = await response.json();
      setRows(Array.isArray(data?.data) ? data.data : []);
      setTotal(typeof data?.total === "number" ? data.total : 0);
      setTotalPages(typeof data?.totalPages === "number" ? Math.max(data.totalPages, 1) : 1);
      setPage(typeof data?.page === "number" ? data.page : nextPage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchEnquiries(page);
  }, [page, pageSize]);

  const normalizedRows = useMemo(
    () =>
      rows.map((row) => ({
        ...row,
        id:
          typeof row._id === "string"
            ? row._id
            : typeof row.id === "string"
              ? row.id
              : "",
      })),
    [rows]
  );

  const filteredRows = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return normalizedRows;

    return normalizedRows.filter((row) => {
      const haystack = [
        row.name,
        row.email,
        row.mobile,
        row.company,
        row.businessType,
        row.subject,
        row.message,
        row.budget,
        row.status,
        row.source,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return haystack.includes(query);
    });
  }, [normalizedRows, search]);

  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-600">
              Admin Inbox
            </p>
            <h1 className="mt-2 text-3xl font-bold text-slate-950">
              Contact Enquiries
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-500">
              Review incoming enquiries from the public contact form. This area is restricted to admins only.
            </p>
          </div>

          <div className="relative w-full lg:w-[360px]">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search this page of enquiries..."
              className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-slate-900 outline-none transition focus:border-blue-300 focus:bg-white"
            />
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        <div className="border-b border-slate-200 bg-slate-50 px-6 py-4 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-slate-950">Enquiry List</h2>
            <p className="text-sm text-slate-500">Latest submissions appear first.</p>
          </div>
          <div className="text-sm text-slate-500">
            {loading ? "Loading..." : `${total} records`}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[1050px]">
            <thead className="bg-white">
              <tr className="border-b border-slate-200 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Mobile</th>
                <th className="px-6 py-4">Subject</th>
                <th className="px-6 py-4">Budget</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-200">
              {loading ? (
                <tr>
                  <td className="px-6 py-12 text-center text-slate-500" colSpan={7}>
                    <span className="inline-flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Loading enquiries...
                    </span>
                  </td>
                </tr>
              ) : filteredRows.length ? (
                filteredRows.map((row) => (
                  <tr key={row.id} className="transition-colors hover:bg-slate-50/80">
                    <td className="px-6 py-5 align-top">
                      <div className="font-semibold text-slate-950">{row.name || "--"}</div>
                      <div className="mt-1 text-sm text-slate-500">{row.status || "new"}</div>
                    </td>
                    <td className="px-6 py-5 align-top text-sm text-slate-600">
                      {row.email || "--"}
                    </td>
                    <td className="px-6 py-5 align-top text-sm text-slate-600">
                      {row.mobile || "--"}
                    </td>
                    <td className="px-6 py-5 align-top text-sm text-slate-600">
                      {row.subject || "--"}
                    </td>
                    <td className="px-6 py-5 align-top text-sm text-slate-600">
                      {row.budget || "--"}
                    </td>
                    <td className="px-6 py-5 align-top text-sm text-slate-600">
                      {formatDateTime(row.updatedAt || row.createdAt)}
                    </td>
                    <td className="px-6 py-5 align-top">
                      <button
                        type="button"
                        onClick={() => setSelected(row)}
                        className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                      >
                        <Eye size={16} />
                        View
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="px-6 py-12 text-center text-slate-500" colSpan={7}>
                    No enquiries found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      <section className="flex flex-col gap-3 rounded-3xl border border-slate-200 bg-white px-6 py-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-slate-500">
          Page {page} of {totalPages}
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setPage((current) => Math.max(current - 1, 1))}
            disabled={loading || page <= 1}
            className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={() => setPage((current) => Math.min(current + 1, totalPages))}
            disabled={loading || page >= totalPages}
            className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </section>

      {selected ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4 sm:p-6">
          <div className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl">
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 px-6 py-4">
              <div className="min-w-0">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-600">
                  Enquiry Details
                </p>
                <h3 className="mt-1 truncate text-xl font-semibold text-slate-950">
                  {selected.name || "Contact submission"}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelected(null)}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200"
                aria-label="Close enquiry details"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6">
              <div className="space-y-5">
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  <InfoCard label="Name" value={selected.name} />
                  <InfoCard label="Email" value={selected.email} icon={<Mail size={16} />} />
                  <InfoCard label="Mobile" value={selected.mobile} />
                  <InfoCard label="Company" value={selected.company} />
                  <InfoCard label="Business Type" value={selected.businessType} />
                  <InfoCard label="Subject" value={selected.subject} />
                  <InfoCard label="Budget" value={selected.budget} />
                  <InfoCard label="Status" value={selected.status} />
                  <InfoCard label="Source" value={selected.source} />
                  <InfoCard label="Created" value={formatDateTime(selected.createdAt)} />
                  <InfoCard label="Updated" value={formatDateTime(selected.updatedAt)} />
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Message
                  </div>
                  <div className="max-h-[38vh] overflow-y-auto rounded-xl bg-white/70 p-4 text-sm leading-7 text-slate-700 shadow-inner">
                    <p className="whitespace-pre-wrap break-words">
                      {selected.message || "--"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function InfoCard({
  label,
  value,
  icon,
}: {
  label: string;
  value?: string;
  icon?: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
        {icon}
        {label}
      </div>
      <div className="break-words text-sm font-medium leading-6 text-slate-900">{value || "--"}</div>
    </div>
  );
}
