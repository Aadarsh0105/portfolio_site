"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
} from "lucide-react";

import { SiteShell } from "./SiteShell";

type BlogPost = {
  title: string;
  slug: string;
  coverImage?: string;
  metaTitle?: string;
  metaDescription?: string;
  content: string;
  createdAt?: string | Date;
  updatedAt?: string | Date;
};

export function BlogPostPage({
  post,
  relatedPosts = [],
}: {
  post: BlogPost;
  relatedPosts?: BlogPost[];
}) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [post.slug]);

  return (
    <SiteShell>
      <main className="flex-grow pt-32 pb-24">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/blog">Blog</Link>
            <span>/</span>
            <span className="text-primary">
              {post.title}
            </span>
          </nav>

          <Link
            href="/blog"
            className="inline-flex items-center text-sm mb-8 hover:text-primary"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-light mb-10">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>
                Created{" "}
                {post.createdAt
                  ? new Date(post.createdAt).toLocaleString("en-IN", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })
                  : ""}
              </span>
            </div>
          </div>

          <div className="relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden mb-12">
            <Image
              src={post.coverImage || "/logo1.png"}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          <div
            className="max-w-none text-slate-700 leading-8 [&_h1]:mt-10 [&_h1]:mb-5 [&_h1]:text-4xl [&_h1]:font-bold [&_h1]:leading-tight [&_h1]:text-slate-950 [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:leading-tight [&_h2]:text-slate-950 [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-slate-950 [&_p]:mb-5 [&_p]:text-lg [&_p]:leading-8 [&_ul]:my-6 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:my-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-2 [&_blockquote]:my-8 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-5 [&_blockquote]:italic [&_img]:my-8 [&_img]:rounded-2xl [&_img]:w-full [&_a]:text-primary [&_a]:underline"
            dangerouslySetInnerHTML={{
              __html: post.content,
            }}
          />

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="mt-20 pt-12 border-t border-gray-200 dark:border-white/10"
          >
            <h3 className="text-2xl font-bold mb-8">
              Related Articles
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="glass-card rounded-3xl overflow-hidden group hover:-translate-y-1 transition-all"
                >
                  <div className="relative h-48">
                    <Image
                      src={relatedPost.coverImage || "/logo1.png"}
                      alt={relatedPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-5">
                    <h4 className="font-bold line-clamp-2 mb-3">
                      {relatedPost.title}
                    </h4>

                    <div className="flex items-center justify-between">
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </article>
      </main>
    </SiteShell>
  );
}
