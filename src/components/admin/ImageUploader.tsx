"use client";

import { UploadCloud } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import type { ChangeEvent } from "react";

type ImageUploaderProps = {
  name?: string;
  initialPreview?: string;
  onFileChange?: (preview: string) => void;
};

export default function ImageUploader({
  name = "coverImage",
  initialPreview = "",
  onFileChange,
}: ImageUploaderProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://naxoratechnology.com";
  const [preview, setPreview] = useState<string | null>(initialPreview || null);

  const normalizePreview = (value: string) =>
    value.startsWith("/uploads/") ? `${siteUrl}${value}` : value;

  useEffect(() => {
    setPreview(initialPreview ? normalizePreview(initialPreview) : null);
  }, [initialPreview]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const allowed = ["image/png", "image/jpeg", "image/jpg"];

    if (!allowed.includes(file.type)) {
      alert("Only PNG and JPG images are allowed.");
      return;
    }

    const url = URL.createObjectURL(file);
    setPreview(url);
    onFileChange?.(url);
  };

  const isRemote = typeof preview === "string" && /^https?:\/\//i.test(preview);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-950 mb-4">
        Cover Image
      </h3>

      <label className="border-2 border-dashed border-slate-300 rounded-2xl min-h-72 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-50 transition overflow-hidden">
        {preview ? (
          <div className="relative w-full min-h-72">
            <Image
              src={preview}
              alt="Preview"
              fill
              sizes="(max-width: 768px) 100vw, 700px"
              unoptimized={isRemote}
              className="object-cover rounded-2xl"
            />
          </div>
        ) : (
          <>
            <UploadCloud className="w-10 h-10 text-slate-400" />

            <p className="mt-3 font-medium text-slate-700">
              Upload Cover Image
            </p>

            <p className="text-sm text-slate-500">
              PNG or JPG only
            </p>
          </>
        )}

        <input
          type="file"
          accept=".png,.jpg,.jpeg"
          onChange={handleFileChange}
          name={name}
          className="hidden"
        />
      </label>
    </div>
  );
}
