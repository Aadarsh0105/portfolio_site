"use client";

import Link from "next/link";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { SiteShell } from "./SiteShell";

export function BlogPostPage({ slug }: { slug: string }) {
  const post = blogPosts.find((item) => item.slug === slug);
  const relatedPosts = blogPosts.filter((item) => item.slug !== slug).slice(0, 2);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  return (
    <SiteShell>
      <main className="flex-grow pt-32 pb-24">
        {!post ? (
          <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-light dark:text-gray-400 mb-8">
              The article you are looking for does not exist or has been moved.
            </p>
            <Link href="/" className="btn-primary">
              Return Home
            </Link>
          </div>
        ) : (
          <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="/#blog"
                className="inline-flex items-center text-sm font-medium text-light hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>

              <div className={`inline-flex px-3 py-1 rounded-full text-xs font-bold mb-6 ${post.color}`}>
                {post.category}
              </div>

              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-sm text-light dark:text-gray-400 mb-10 pb-10 border-b border-gray-200 dark:border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-white/10 flex items-center justify-center">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-dark dark:text-white">
                      {post.author.name}
                    </div>
                    <div className="text-xs">{post.author.role}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
              </div>

              <div className="w-full h-64 md:h-80 rounded-3xl mb-12 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 glass-card flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMTI4LCAxMjgsIDEyOCwgMC4xKSIvPjwvc3ZnPg==')] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
                <h2 className="text-3xl md:text-4xl font-bold text-dark/30 dark:text-white/30 text-center px-4 relative z-10">
                  {post.category} Insights
                </h2>
              </div>

              <div className="space-y-6 text-base md:text-lg leading-8 text-dark dark:text-gray-300">
                {post.content
                  .trim()
                  .split("\n\n")
                  .map((paragraph, index) => {
                    const text = paragraph.trim();
                    if (!text) return null;
                    if (text.startsWith("##")) {
                      return (
                        <h2
                          key={index}
                          className="text-2xl font-bold mt-10 mb-2 text-dark dark:text-white"
                        >
                          {text.replace("##", "").trim()}
                        </h2>
                      );
                    }
                    return <p key={index}>{text}</p>;
                  })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-20 pt-12 border-t border-gray-200 dark:border-white/10"
            >
              <h3 className="text-2xl font-bold mb-8">Related Articles</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="glass-card rounded-2xl p-6 group cursor-pointer hover:-translate-y-1 transition-all duration-300 flex flex-col"
                  >
                    <div className={`inline-flex self-start px-3 py-1 rounded-full text-xs font-bold mb-3 ${relatedPost.color}`}>
                      {relatedPost.category}
                    </div>
                    <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h4>
                    <div className="flex items-center justify-between pt-4 mt-auto">
                      <span className="text-xs text-light font-medium flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {relatedPost.readTime}
                      </span>
                      <ArrowRight className="w-4 h-4 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>

            <div className="mt-16 glass-card p-8 rounded-3xl text-center bg-gradient-to-br from-primary/5 to-accent/5">
              <h3 className="text-2xl font-bold mb-4">
                Ready to implement these strategies?
              </h3>
              <p className="text-light dark:text-gray-400 mb-6">
                Let&apos;s discuss how our team can help you achieve your business goals.
              </p>
              <Link href="/#contact" className="btn-primary">
                Book a Free Consultation
              </Link>
            </div>
          </article>
        )}
      </main>
    </SiteShell>
  );
}
