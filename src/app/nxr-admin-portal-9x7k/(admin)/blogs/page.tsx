"use client";

import { useEffect, useMemo, useState } from "react";
import { Plus, MoreVertical, PencilLine, Trash2, Globe2, EyeOff, Loader2 } from "lucide-react";
import Link from "next/link";

type BlogRow = {
  _id?: string;
  id?: string;
  title: string;
  slug: string;
  status: string;
  createdAt?: string;
};

export default function BlogsPage() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [rows, setRows] = useState<BlogRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/blog?status=all", { cache: "no-store" });
      const data = await response.json();
      setRows(Array.isArray(data?.data) ? data.data : []);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchBlogs();
  }, []);

  const normalizedRows = useMemo(
    () =>
      rows.map((row) => ({
        ...row,
        id:
          typeof row._id === "string"
            ? row._id
            : typeof row.id === "string"
              ? row.id
              : row.slug,
        date: row.createdAt ? new Date(row.createdAt).toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }) : "--",
      })),
    [rows]
  );

  const handleDelete = async (id: string) => {
    const ok = window.confirm("Delete this blog post?");
    if (!ok) return;

    setActionLoading(id);
    try {
      const response = await fetch(`/api/blog/${id}`, { method: "DELETE" });
      if (response.ok) {
        await fetchBlogs();
        setOpenMenu(null);
      }
    } finally {
      setActionLoading(null);
    }
  };

  const handleStatus = async (id: string, status: "published" | "draft") => {
    setActionLoading(id);
    try {
      const response = await fetch(`/api/blog/${id}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      if (response.ok) {
        await fetchBlogs();
        setOpenMenu(null);
      }
    } finally {
      setActionLoading(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-medium text-blue-600 uppercase tracking-[0.2em]">
            Content Library
          </p>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold text-slate-950">
            Blogs
          </h1>
          <p className="mt-2 text-slate-500 max-w-2xl">
            Manage published articles, drafts, and SEO-ready updates from one place.
          </p>
        </div>

        <Link
          href="/nxr-admin-portal-9x7k/blogs/create"
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 py-3.5 font-semibold text-white shadow-lg shadow-blue-200 transition-colors hover:bg-blue-700"
        >
          <Plus size={18} />
          New Blog
        </Link>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 bg-slate-50 px-6 py-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-950">
                Blog Table
              </h2>
              <p className="text-sm text-slate-500">
                Quick snapshot of current publishing status.
              </p>
            </div>

            <div className="text-sm text-slate-500">
              {loading ? "Loading..." : `${normalizedRows.length} entries`}
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px]">
            <thead className="bg-white">
              <tr className="border-b border-slate-200 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                <th className="px-6 py-4">Title</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-200">
              {loading ? (
                <tr>
                  <td className="px-6 py-10 text-center text-slate-500" colSpan={4}>
                    <span className="inline-flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Loading blogs...
                    </span>
                  </td>
                </tr>
              ) : normalizedRows.length ? (
                normalizedRows.map((row) => {
                  const isPublished = row.status === "published";
                  const menuKey = row.id || row.slug;

                  return (
                    <tr key={menuKey} className="transition-colors hover:bg-slate-50/80">
                      <td className="px-6 py-5">
                        <div className="font-semibold text-slate-950">{row.title}</div>
                        <div className="mt-1 text-sm text-slate-500">
                          {row.slug}
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <span
                          className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                            isPublished
                              ? "bg-emerald-50 text-emerald-700"
                              : "bg-amber-50 text-amber-700"
                          }`}
                        >
                          {isPublished ? "Published" : "Draft"}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-sm text-slate-600">
                        {row.date}
                      </td>
                      <td className="px-6 py-5">
                        <div className="relative inline-block">
                          <button
                            type="button"
                            onClick={() => setOpenMenu(openMenu === menuKey ? null : menuKey)}
                            className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white p-2.5 text-slate-700 transition-colors hover:border-blue-200 hover:text-blue-700 hover:bg-blue-50"
                            aria-label={`Open actions for ${row.title}`}
                            disabled={actionLoading === menuKey}
                          >
                            <MoreVertical size={18} />
                          </button>

                          {openMenu === menuKey ? (
                            <div className="absolute right-0 z-20 mt-2 w-52 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
                              <Link
                                href={`/nxr-admin-portal-9x7k/blogs/${menuKey}/edit`}
                                className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
                                onClick={() => setOpenMenu(null)}
                              >
                                <PencilLine size={16} />
                                Edit
                              </Link>

                              <button
                                type="button"
                                onClick={() => handleDelete(menuKey)}
                                className="flex w-full items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
                              >
                                <Trash2 size={16} className="text-rose-600" />
                                Delete
                              </button>

                              {isPublished ? (
                                <button
                                  type="button"
                                  onClick={() => handleStatus(menuKey, "draft")}
                                  className="flex w-full items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
                                >
                                  <EyeOff size={16} className="text-amber-600" />
                                  Unpublish
                                </button>
                              ) : (
                                <button
                                  type="button"
                                  onClick={() => handleStatus(menuKey, "published")}
                                  className="flex w-full items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
                                >
                                  <Globe2 size={16} className="text-emerald-600" />
                                  Publish
                                </button>
                              )}
                            </div>
                          ) : null}
                        </div>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td className="px-6 py-10 text-center text-slate-500" colSpan={4}>
                    No blogs found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
