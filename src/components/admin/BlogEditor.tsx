"use client";

import { Save, Send, FileText, SlidersHorizontal } from "lucide-react";
import ImageUploader from "./ImageUploader";
import TiptapEditor from "./TiptapEditor";

type BlogEditorProps = {
  mode?: "create" | "edit";
  title?: string;
  description?: string;
  primaryActionLabel?: string;
  secondaryActionLabel?: string;
};

export default function BlogEditor({
  mode = "create",
  title = "Create Blog Post",
  description = "Create and publish a new article.",
  primaryActionLabel = "Publish",
  secondaryActionLabel = "Save Draft",
}: BlogEditorProps) {
    return (
        <div className="space-y-6">

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between mb-6">
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 mb-3">
                            <FileText size={14} />
                            {mode === "edit" ? "Edit mode" : "New post"}
                        </div>

                        <h2 className="text-2xl md:text-3xl font-bold text-slate-950">
                            {title}
                        </h2>

                        <p className="mt-2 text-sm md:text-base text-slate-500 max-w-2xl">
                            {description}
                        </p>
                    </div>

                    <div className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
                        <SlidersHorizontal size={16} />
                        SEO ready
                    </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Blog Title *
                        </label>

                        <input
                            className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                            placeholder="How Custom Web Development Helps Businesses Grow"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Slug *
                        </label>

                        <input
                            className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                            placeholder="custom-web-development-business-growth"
                        />
                    </div>

                </div>
            </div>

            <ImageUploader />

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

                <h3 className="text-lg font-semibold text-slate-950 mb-4">
                    Content
                </h3>
                <TiptapEditor />
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-950 mb-4">
                    SEO Settings
                </h3>

                <div className="grid gap-4 md:grid-cols-2">

                    <input
                        className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                        placeholder="Meta Title"
                    />

                    <textarea
                        rows={4}
                        className="w-full md:col-span-2 rounded-xl border border-slate-200 bg-slate-50 p-4 text-slate-900 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                        placeholder="Meta Description"
                    />

                </div>
            </div>

            <div className="flex flex-col-reverse sm:flex-row justify-end gap-3">

                <button className="h-12 px-5 rounded-xl border border-slate-200 bg-white flex items-center justify-center gap-2 text-slate-700 hover:bg-slate-50 transition-colors">
                    <Save size={18} />
                    {secondaryActionLabel}
                </button>

                <button className="h-12 px-5 rounded-xl bg-blue-600 text-white flex items-center justify-center gap-2 shadow-lg shadow-blue-200 hover:bg-blue-700 transition-colors">
                    <Send size={18} />
                    {primaryActionLabel}
                </button>

            </div>

        </div>
    );
}
