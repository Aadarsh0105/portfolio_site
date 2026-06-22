import {
  FileText,
  Eye,
  PenSquare,
  ArrowUpRight,
  Sparkles,
  Activity,
  Clock3,
  CircleCheckBig,
} from "lucide-react";

import StatsCard from "@/components/admin/StatsCard";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-indigo-50 pointer-events-none" />

        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 mb-4">
              <Sparkles size={14} />
              Internal CMS Overview
            </div>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-950">
              Welcome back, Aadarsh.
            </h2>

            <p className="mt-3 max-w-xl text-sm md:text-base leading-7 text-slate-600">
              Monitor blog performance, review publishing status, and jump
              straight into content operations from one clean workspace.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full lg:w-auto">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              <div className="flex items-center gap-2 text-slate-500 text-sm">
                <Activity size={16} />
                Live Status
              </div>
              <div className="mt-2 text-lg font-semibold text-slate-950">
                Online
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              <div className="flex items-center gap-2 text-slate-500 text-sm">
                <Clock3 size={16} />
                Last Update
              </div>
              <div className="mt-2 text-lg font-semibold text-slate-950">
                Just now
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              <div className="flex items-center gap-2 text-slate-500 text-sm">
                <CircleCheckBig size={16} />
                Queue
              </div>
              <div className="mt-2 text-lg font-semibold text-slate-950">
                3 items
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <StatsCard
          title="Total Blogs"
          value="18"
          icon={<FileText size={22} />}
        />

        <StatsCard
          title="Published"
          value="12"
          icon={<Eye size={22} />}
        />

        <StatsCard
          title="Drafts"
          value="6"
          icon={<PenSquare size={22} />}
        />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.4fr_0.9fr]">
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold text-slate-950">
                Recent Blogs
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                Latest content updates and publishing queue.
              </p>
            </div>

            <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors">
              View all
              <ArrowUpRight size={16} />
            </button>
          </div>

          <div className="space-y-4">
            {[
              "AI Automation Trends 2026",
              "SEO Strategies for Startups",
              "Future of Web Development",
            ].map((title, index) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 transition-colors hover:border-blue-200 hover:bg-blue-50/60"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h4 className="font-semibold text-slate-950">
                      {title}
                    </h4>
                    <p className="mt-1 text-sm text-slate-500">
                      {index === 0
                        ? "Scheduled for publishing"
                        : index === 1
                          ? "Ready for review"
                          : "Needs final edits"}
                    </p>
                  </div>

                  <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-600 border border-slate-200">
                    {index === 0 ? "Draft" : index === 1 ? "Review" : "Editing"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
          <h3 className="text-xl font-bold text-slate-950 mb-2">
            Quick Actions
          </h3>
          <p className="text-sm text-slate-500 mb-6">
            Common admin tasks for faster content management.
          </p>

          <div className="space-y-3">
            {[
              "Create a new blog post",
              "Review unpublished drafts",
              "Update site settings",
            ].map((item) => (
              <button
                key={item}
                className="w-full flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-left text-slate-700 hover:border-blue-200 hover:bg-blue-50/60 transition-colors"
              >
                <span className="font-medium">{item}</span>
                <ArrowUpRight size={16} className="text-slate-400" />
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
