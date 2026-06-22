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
        class: "min-h-[450px] p-6 outline-none prose prose-slate max-w-none",
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

      <EditorContent editor={editor} />
    </div>
  );
}
