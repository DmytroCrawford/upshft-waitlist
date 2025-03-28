"use client";

import PageHeader from "@/components/page-header";
import Accordion from "@/components/accordion";
import Cta from "@/components/cta";
import Particles from "@/components/particles";
import Illustration from "@/public/images/page-illustration.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import { itemVariants } from "@/lib/animation-variables";

export default function Faq() {
  const faqs = [
    {
      title: "When will the software be released?",
      text: "To be honest, we don't know. We're still in the development phase, and predicting a release date is about as accurate as predicting the weather three months from now. But trust us, when it's ready, you'll know.",
      active: true,
    },
    {
      title: "What do I get by joining the waitlist?",
      text: "You get exclusive early access, insider updates, and the undeniable clout of saying 'I was here first.' Oh, and maybe some cool beta features before everyone else.",
      active: false,
    },
    {
      title: "Will UpShft make me a faster driver?",
      text: (
        <>
          Look, we can give you <strong>data, insights, and tools</strong>, but
          if you send it into a wall at Turn 3, that's on you. We're here to
          help you <strong>analyze mistakes, and maybe prevent them.</strong>
        </>
      ),
      active: false,
    },
    {
      title:
        "Is this just another AI-powered, blockchain-enhanced, Web3 cloud-based SaaS?",
      text: (
        <>
          No. We're just building <strong>racing software</strong> that actually
          makes sense. No unnecessary buzzwords, no crypto wallet required. Just
          good old-fashioned telemetry analysis with a modern UI.
        </>
      ),
      active: false,
    },
    {
      title: "How is UpShft different from other racing analysis tools?",
      text: (
        <>
          Other tools: 'Here's your data, good luck decoding it.'
          <br />
          <strong>UpShft:</strong> 'Here's your data, clear visualizations,
          intuitive comparisons, and a UI that doesn't feel like it was designed
          in 1998.'
        </>
      ),
      active: false,
    },
    {
      title: "What if I don't have fancy data-logging equipment?",
      text: (
        <>
          No worries! We support <strong>various hardware setups</strong>, and
          we're working on ways to make analysis accessible for everyone. Worst
          case? Just make race car noises and pretend.
        </>
      ),
      active: false,
    },
    {
      title: "What happens if I don't renew my license after one year?",
      text: (
        <>
          You'll lose access to premium features, and we'll send a mildly
          disappointed email. But don't worry, your data will still be there
          when you come back. (We forgive easily.)
        </>
      ),
      active: false,
    },
    {
      title: "How does billing work?",
      text: (
        <>
          You give us money. We give you software. It's a{" "}
          <strong>pretty classic exchange</strong>. No hidden fees, no upsells,
          no surprise charges (unless you enjoy that kind of thing).
        </>
      ),
    },
    {
      title: "What is your cancellation or refund policy?",
      text: (
        <>
          If you're not happy, you can cancel anytime. No long goodbyes, no
          'please stay' pop-ups, no guilt-tripping. Just a clean break—like a
          perfect apex exit.
        </>
      ),
      active: false,
    },
    {
      title: "Will I become an F1 driver if I use UpShft?",
      text: (
        <>
          Absolutely. Just use UpShft for one session, and Toto Wolff will be{" "}
          <strong>knocking on your door.</strong> (Disclaimer: Not legally
          binding.)
        </>
      ),
      active: false,
    },
  ];

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
              className="mb-12 md:mb-20"
              title="Let's Talk About UpShft"
              description="Got questions? We've got answers—well, mostly. From when UpShft will launch (we're working on it, we promise) to how it will make racing data less of a headache, this is the place to get the details. 🏎️"
            >
              Quick Answers
            </PageHeader>

            <div className="max-w-3xl mx-auto">
              <motion.div
                className="space-y-1"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
              >
                {faqs.map((faq, index) => (
                  <Accordion
                    key={index}
                    title={faq.title}
                    id={`faqs-${index}`}
                    active={faq.active}
                  >
                    {faq.text}
                  </Accordion>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
