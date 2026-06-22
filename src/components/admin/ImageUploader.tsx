"use client";

import { UploadCloud, ImageIcon } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function ImageUploader() {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const allowed = [
      "image/png",
      "image/jpeg",
      "image/jpg",
    ];

    if (!allowed.includes(file.type)) {
      alert("Only PNG and JPG images are allowed.");
      return;
    }

    const url = URL.createObjectURL(file);
    setPreview(url);
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-950 mb-4">
        Cover Image
      </h3>

      <label className="border-2 border-dashed border-slate-300 rounded-2xl min-h-72 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-50 transition overflow-hidden">
        {preview ? (
          <div className="relative w-full h-full">
            <Image
              src={preview}
              alt="Preview"
              fill
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
          className="hidden"
        />
      </label>
    </div>
  );
}
