import { Metadata } from "next";

import { headers } from "next/headers";

export const generateRootMetadata = async (): Promise<Metadata> => {
  const headersStore = await headers();
  const csrfToken = headersStore.get("x-csrf-token") ?? "";

  return {
    title: "UpShft",
    description:
      "UpShft is a racing software that helps you analyze your data.",
    icons: {
      icon: "/images/favicon/favicon.ico",
      apple: "/images/favicon/apple-touch-icon.png",
    },
  };
};
