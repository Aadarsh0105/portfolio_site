"use client";

import { useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Quote,
  Heading1,
  Heading2,
  Heading3,
  Undo2,
  Redo2,
  ImageIcon,
} from "lucide-react";

type TiptapEditorProps = {
  value?: string;
  onChange?: (value: string) => void;
};

export default function TiptapEditor({
  value = "",
  onChange,
}: TiptapEditorProps) {
  const editor = useEditor({
    extensions: [StarterKit, Image],
    content: value,
    editorProps: {
      attributes: {
        class:
          "min-h-[450px] p-6 outline-none max-w-none text-slate-700 leading-8 [&_h1]:mt-10 [&_h1]:mb-5 [&_h1]:text-4xl [&_h1]:font-bold [&_h1]:leading-tight [&_h1]:text-slate-950 [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:leading-tight [&_h2]:text-slate-950 [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-slate-950 [&_p]:mb-5 [&_p]:text-lg [&_p]:leading-8 [&_ul]:my-6 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:my-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-2 [&_blockquote]:my-8 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-5 [&_blockquote]:italic [&_img]:my-8 [&_img]:rounded-2xl [&_img]:w-full [&_a]:text-primary [&_a]:underline",
      },
    },
  });

  useEffect(() => {
    if (!editor || !onChange) return;

    const updateContent = () => {
      onChange(editor.getHTML());
    };

    editor.on("update", updateContent);
    return () => {
      editor.off("update", updateContent);
    };
  }, [editor, onChange]);

  useEffect(() => {
    if (!editor) return;

    const current = editor.getHTML();
    if (value !== current) {
      editor.commands.setContent(value, {
        emitUpdate: false,
      });
    }
  }, [editor, value]);

  if (!editor) return null;

  const addImage = () => {
    const url = window.prompt("Enter image URL");

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <div className="flex flex-wrap gap-2 border-b border-slate-200 bg-slate-50 p-3">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className="rounded-lg border border-slate-200 bg-white p-2 text-slate-700 transition-colors hover:border-blue-300 hover:text-blue-600"
        >
          <Heading1 size={18} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className="rounded-lg border border-slate-200 bg-white p-2 text-slate-700 transition-colors hover:border-blue-300 hover:text-blue-600"
        >
          <Heading2 size={18} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className="rounded-lg border border-slate-200 bg-white p-2 text-slate-700 transition-colors hover:border-blue-300 hover:text-blue-600"
        >
          <Heading3 size={18} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className="rounded-lg border border-slate-200 bg-white p-2 text-slate-700 transition-colors hover:border-blue-300 hover:text-blue-600"
        >
          <Bold size={18} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className="rounded-lg border border-slate-200 bg-white p-2 text-slate-700 transition-colors hover:border-blue-300 hover:text-blue-600"
        >
          <Italic size={18} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className="rounded-lg border border-slate-200 bg-white p-2 text-slate-700 transition-colors hover:border-blue-300 hover:text-blue-600"
        >
          <List size={18} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className="rounded-lg border border-slate-200 bg-white p-2 text-slate-700 transition-colors hover:border-blue-300 hover:text-blue-600"
        >
          <ListOrdered size={18} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className="rounded-lg border border-slate-200 bg-white p-2 text-slate-700 transition-colors hover:border-blue-300 hover:text-blue-600"
        >
          <Quote size={18} />
        </button>
        <button
          type="button"
          onClick={addImage}
          className="rounded-lg border border-slate-200 bg-white p-2 text-slate-700 transition-colors hover:border-blue-300 hover:text-blue-600"
        >
          <ImageIcon size={18} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().undo().run()}
          className="rounded-lg border border-slate-200 bg-white p-2 text-slate-700 transition-colors hover:border-blue-300 hover:text-blue-600"
        >
          <Undo2 size={18} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().redo().run()}
          className="rounded-lg border border-slate-200 bg-white p-2 text-slate-700 transition-colors hover:border-blue-300 hover:text-blue-600"
        >
          <Redo2 size={18} />
        </button>
      </div>

      <EditorContent editor={editor} className="[&_img]:max-w-full" />
    </div>
  );
}
