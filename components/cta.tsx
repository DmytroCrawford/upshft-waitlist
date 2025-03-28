import SubscribeForm from "@/components/subscribe-form";
import { itemVariants } from "@/lib/animation-variables";
import { motion } from "framer-motion";

export default function Cta() {
  return (
    <section>
      <div className="pb-12 md:pb-20">
        <div className="px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="pt-12 md:pt-20 text-center border-t [border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.72),transparent)1] dark:[border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.16),transparent)1] shadow-[inset_0_1px_0_0_theme(colors.white/.2)] dark:shadow-none mb-12"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <h2 className="font-inter-tight text-4xl md:text-5xl font-bold text-gray-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-indigo-200 dark:to-gray-200 pb-4">
                Be the First to Experience UpShft
              </h2>
            </motion.div>
          </div>

          <SubscribeForm />
        </div>
      </div>
    </section>
  );
}
