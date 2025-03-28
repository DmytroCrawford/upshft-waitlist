"use client";

import { useState } from "react";

import PostsSidebar from "./posts-sidebar";
import PostsList from "./posts-list";
import { motion } from "framer-motion";
import { itemVariants } from "@/lib/animation-variables";

export default function Posts({ posts }: { posts: Post[] }) {
  const categories = ["News", "Release Notes"];

  const [selectedCategory, setSelectedCategory] = useState<string>("News");

  return (
    <section>
      <div className="pb-12 md:pb-20">
        <div className="px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="md:flex md:justify-between"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Sidebar */}
              <PostsSidebar
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />

              {/* Posts */}
              <PostsList posts={posts} selectedCategory={selectedCategory} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
