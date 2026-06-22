"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

export type PublicBlogPost = {
  title: string;
  slug: string;
  coverImage?: string;
  metaTitle?: string;
  metaDescription?: string;
  status?: string;
  content?: string;
  createdAt?: string | Date;
  updatedAt?: string | Date;
};

export function Blog({
  posts = blogPosts,
}: {
  posts?: PublicBlogPost[];
}) {
  const recentPosts = posts.slice(0, 3);
  const showViewAll = posts.length > 3;

  return (
    <section
      id="blog"
      className="pt-10 pb-5 md:pt-16 bg-gray-50/50 dark:bg-white/[0.02]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">
              Insights
            </h2>

            <h3 className="text-3xl md:text-4xl font-bold">
              Latest from our Blog
            </h3>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {recentPosts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
              }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="glass-card rounded-3xl overflow-hidden group hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
              >
                <div className="relative h-56 overflow-hidden">
                <Image
                    src={post.coverImage || "/logo1.png"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">

                  <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h4>

                  <div className="flex items-center justify-between border-t border-gray-100 dark:border-white/10 pt-4">
                    <div className="flex items-center gap-2 text-xs text-light font-medium">
                      <Calendar className="w-3 h-3" />
                      <span>
                        {post.updatedAt
                          ? new Date(post.updatedAt).toLocaleString("en-IN", {
                              dateStyle: "medium",
                              timeStyle: "short",
                            })
                          : post.createdAt
                            ? new Date(post.createdAt).toLocaleString("en-IN", {
                                dateStyle: "medium",
                                timeStyle: "short",
                              })
                            : ""}
                      </span>
                    </div>

                    <ArrowRight className="w-4 h-4 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {showViewAll ? (
          <div className="mt-10 flex justify-center">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary/90 transition-colors"
            >
              View All Blogs
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
