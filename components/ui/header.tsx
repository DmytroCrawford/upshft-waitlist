import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animation-variables";

export default function Header() {
  return (
    <header className="absolute top-4 md:top-6 w-full z-30 pb-4 md:pb-6 border-b [border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.4),transparent)1] dark:[border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.16),transparent)1] shadow-[0_1px_0_0_theme(colors.white/.2)] dark:shadow-none">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="px-4 sm:px-6"
      >
        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={itemVariants}
            className="relative flex items-center justify-between gap-x-2 h-12 bg-gradient-to-b from-white/90 to-white/70 dark:from-gray-700/80 dark:to-gray-700/70 rounded-lg px-3 shadow"
          >
            {/* Border with dots in corners */}
            <div
              className="absolute -inset-1.5 bg-indigo-500/15 dark:bg-gray-800/50 rounded-sm -z-10 before:absolute before:inset-y-0 before:left-0 before:w-[10px] before:bg-[length:10px_10px] before:[background-position:top_center,bottom_center] before:bg-no-repeat before:[background-image:radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_1px,transparent_1px),radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_1px,transparent_1px)] dark:before:[background-image:radial-gradient(circle_at_center,theme(colors.gray.600/.56)_1px,transparent_1px),radial-gradient(circle_at_center,theme(colors.gray.600/.56)_1px,transparent_1px)] after:absolute after:inset-y-0 after:right-0 after:w-[10px] after:bg-[length:10px_10px] after:[background-position:top_center,bottom_center] after:bg-no-repeat after:[background-image:radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_1px,transparent_1px),radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_1px,transparent_1px)] dark:after:[background-image:radial-gradient(circle_at_center,theme(colors.gray.600/.56)_1px,transparent_1px),radial-gradient(circle_at_center,theme(colors.gray.600/.56)_1px,transparent_1px)]"
              aria-hidden="true"
            />
            {/* Site branding */}
            <div className="flex-1">
              {/* Logo */}
              <Link href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={28}
                  height={28}
                  viewBox="0 0 305 319"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    className="fill-indigo-500"
                    d="M198.338 165.99V120.841L305 0.206055V177.072C305 209.283 299.371 235.88 288.112 256.861C276.853 277.547 259.817 293.062 237.003 303.405C214.485 313.452 186.486 318.476 153.006 318.476C119.23 318.476 90.9342 313.452 68.1203 303.405C45.6026 293.062 28.7144 277.547 17.4556 256.861C6.19679 235.88 0.567383 209.283 0.567383 177.072V0.206055H106.786V165.99C106.786 189.631 110.341 206.624 117.452 216.967C124.563 227.31 136.266 232.481 152.562 232.481C168.561 232.481 180.116 227.31 187.227 216.967C194.634 206.624 198.338 189.631 198.338 165.99ZM198.338 70.5281L260.515 0.206055H198.338V35.3671V70.5281Z"
                  />
                </svg>
              </Link>
            </div>
            {/* Navigation links */}
            <nav className="flex justify-center">
              <ul className="flex items-center sm:gap-x-3 text-sm font-medium">
                <li>
                  <Link
                    className="text-gray-800 dark:text-gray-200 rounded-lg hover:bg-indigo-100 dark:hover:bg-gray-800/30 py-1.5 px-3"
                    href="/updates"
                  >
                    Updates
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-800 dark:text-gray-200 rounded-lg hover:bg-indigo-100 dark:hover:bg-gray-800/30 transition-colors py-1.5 px-3"
                    href="/faq"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-800 dark:text-gray-200 rounded-lg hover:bg-indigo-100 dark:hover:bg-gray-800/30 transition-colors py-1.5 px-3"
                    href="/contact"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Light switch */}
            <ThemeToggle />
          </motion.div>
        </div>
      </motion.div>
    </header>
  );
}
