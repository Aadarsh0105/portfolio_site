"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  User,
} from "lucide-react";

import { blogPosts } from "@/data/blogPosts";
import { SiteShell } from "./SiteShell";

export function BlogPostPage({
  slug,
}: {
  slug: string;
}) {
  const post = blogPosts.find(
    (item) => item.slug === slug
  );

  const relatedPosts = blogPosts
    .filter((item) => item.slug !== slug)
    .slice(0, 2);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [slug]);

  if (!post) {
    return (
      <SiteShell>
        <main className="min-h-screen flex items-center justify-center">
          Post Not Found
        </main>
      </SiteShell>
    );
  }

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

          <div className="flex flex-wrap items-center gap-6 text-sm text-light mb-10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="w-4 h-4" />
              </div>
            </div>

            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {/* {new Date(post.createdAt).toLocaleDateString()} */}
            </div>

            {/* <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </div> */}
          </div>

          <div className="relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden mb-12">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          <div
            className="prose prose-lg max-w-none dark:prose-invert"
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
                      src={relatedPost.coverImage}
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
                      {/* <span className="text-xs flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {relatedPost.readTime}
                      </span> */}

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