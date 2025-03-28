"use client";

{
  /*
Note: This code includes an example of how to fetch data from an external JSON file that is hosted at "https://raw.githubusercontent.com/DmytroCrawford/UpShft-Updates/refs/heads/main/waitlist-posts.json. To facilitate this, we've included a lib directory in the root which contains a function that can fetch the JSON content. Additionally, we've defined the Post types in the types.d.ts file located in the root.
*/
}

import getAllPosts from "@/lib/getAllPosts";
import Particles from "@/components/particles";
import Illustration from "@/public/images/page-illustration.svg";
import GlowBottomIllustration from "@/public/images/glow-bottom.svg";
import Image from "next/image";

import PageHeader from "@/components/page-header";
import Cta from "@/components/cta";
import Posts from "@/app/(default)/updates/posts";

export default async function Updates() {
  const postsData: Promise<Post[]> = getAllPosts();
  const posts = await postsData;

  return (
    <>
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
            className="max-w-none"
            width={1440}
            height={427}
            alt="Page Illustration"
          />
        </div>

        <div className="pt-32 pb-12 md:pt-44 md:pb-20">
          <div className="px-4 sm:px-6">
            <PageHeader
              title="News & Updates"
              description="Rank and score updates and feature requests so you know you're working on the most impactful things."
            >
              What's New
            </PageHeader>
          </div>
        </div>
      </section>

      <Posts posts={posts} />
      <Cta />
    </>
  );
}
