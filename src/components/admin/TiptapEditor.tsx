"use client";

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

export default function TiptapEditor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
    ],
    content: "",
    editorProps: {
      attributes: {
        class:
          "min-h-[450px] p-6 outline-none prose prose-slate max-w-none",
      },
    },
  });

  if (!editor) return null;

  const addImage = () => {
    const url = window.prompt("Enter image URL");

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">

      {/* Toolbar */}

      <div className="flex flex-wrap gap-2 border-b border-slate-200 p-3 bg-slate-50">

        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className="p-2 rounded-lg border border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:text-blue-600 transition-colors"
        >
          <Heading1 size={18} />
        </button>

        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className="p-2 rounded-lg border border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:text-blue-600 transition-colors"
        >
          <Heading2 size={18} />
        </button>

        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleBold().run()
          }
          className="p-2 rounded-lg border border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:text-blue-600 transition-colors"
        >
          <Bold size={18} />
        </button>

        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleItalic().run()
          }
          className="p-2 rounded-lg border border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:text-blue-600 transition-colors"
        >
          <Italic size={18} />
        </button>

        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleBulletList().run()
          }
          className="p-2 rounded-lg border border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:text-blue-600 transition-colors"
        >
          <List size={18} />
        </button>

        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleOrderedList().run()
          }
          className="p-2 rounded-lg border border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:text-blue-600 transition-colors"
        >
          <ListOrdered size={18} />
        </button>

        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleBlockquote().run()
          }
          className="p-2 rounded-lg border border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:text-blue-600 transition-colors"
        >
          <Quote size={18} />
        </button>

        <button
          type="button"
          onClick={addImage}
          className="p-2 rounded-lg border border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:text-blue-600 transition-colors"
        >
          <ImageIcon size={18} />
        </button>

        <button
          type="button"
          onClick={() =>
            editor.chain().focus().undo().run()
          }
          className="p-2 rounded-lg border border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:text-blue-600 transition-colors"
        >
          <Undo2 size={18} />
        </button>

        <button
          type="button"
          onClick={() =>
            editor.chain().focus().redo().run()
          }
          className="p-2 rounded-lg border bg-white"
        >
          <Redo2 size={18} />
        </button>
      </div>

      <EditorContent editor={editor} />
    </div>
  );
}
