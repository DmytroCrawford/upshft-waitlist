export const metadata = {
  title: "Home - UpShft",
  description: "Page description",
};

import Particles from "@/components/particles";
import Illustration from "@/public/images/page-illustration.svg";
import Image from "next/image";
import PageHeader from "@/components/page-header";
import SubscribeForm from "@/components/subscribe-form";
import { ArrowRightIcon, SparklesIcon } from "lucide-react";

export default function Home() {
  return (
    <section>
      {/* Radial gradient */}
      <div
        className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-full max-w-[800px] aspect-square"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-purple-500 rounded-full blur-[120px] opacity-30" />
        <div className="absolute w-64 h-64 bg-purple-400 rounded-full blur-[80px] opacity-70" />
      </div>

      {/* Particles animation */}
      <Particles className="absolute inset-0 h-96 -z-10" quantity={15} />

      {/* Illustration */}
      <div
        className="md:block absolute left-1/2 -translate-x-1/2 -mt-16 blur-2xl opacity-90 pointer-events-none -z-10"
        aria-hidden="true"
      >
        <Image
          src={Illustration}
          className="max-w-none "
          width={1440}
          height={427}
          alt="Page Illustration"
        />
      </div>
      <div className="pt-32 pb-12 md:pt-44 md:pb-20">
        <div className="px-4 sm:px-6">
          <PageHeader
            className="mb-12"
            title="The racing data platform built for speed"
            description="UpShft takes the complexity out of racing data analysis. Upload, visualize, and compare laps effortlessly—so you can focus on driving faster, not crunching numbers. 🚀"
          >
            <div className="inline-flex relative before:absolute before:inset-0 before:bg-purple-500 before:blur-md">
              <a
                className="btn-sm py-0.5 text-slate-300 hover:text-white transition duration-150 ease-in-out group [background:linear-gradient(var(--color-purple-500),var(--color-purple-500))_padding-box,linear-gradient(var(--color-purple-500),var(--color-purple-200)_75%,transparent_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/50 before:rounded-full before:pointer-events-none shadow-sm"
                href="/updates"
              >
                <span className="relative inline-flex items-center whitespace-nowrap">
                  Check our updates{" "}
                  <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                    <ArrowRightIcon className="w-4 h-4" />
                  </span>
                </span>
              </a>
            </div>
          </PageHeader>

          <SubscribeForm />
        </div>
      </div>
    </section>
  );
}
