"use client";

import { containerVariants, itemVariants } from "@/lib/animation-variables";
import { motion } from "framer-motion";

interface PageHeaderProps {
  className?: string;
  children: React.ReactNode;
  title: string;
  description?: string;
}

export default function PageHeader({
  className,
  children,
  title,
  description,
}: PageHeaderProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`max-w-3xl mx-auto ${className || ""}`}
    >
      <div className="text-center">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="relative flex items-center justify-center gap-4 mb-5 before:h-px before:w-24 before:border-b before:[border-image:linear-gradient(to_left,theme(colors.indigo.300),transparent)1] dark:before:[border-image:linear-gradient(to_left,theme(colors.indigo.300/.16),transparent)1] before:shadow-sm before:shadow-white/20 dark:before:shadow-none after:h-px after:w-24 after:border-b after:[border-image:linear-gradient(to_right,theme(colors.indigo.300),transparent)1] dark:after:[border-image:linear-gradient(to_right,theme(colors.indigo.300/.16),transparent)1] after:shadow-sm after:shadow-white/20 dark:after:shadow-none"
        >
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className=""
          >
            {/* Border with dots in corners */}

            {children}
          </motion.div>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="font-inter-tight text-5xl md:text-6xl font-bold text-gray-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-indigo-200 dark:to-gray-200 pb-4">
              {title}
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-400">
              {description}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
