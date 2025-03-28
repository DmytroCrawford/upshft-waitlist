import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faq - UpShft",
  description: "Page description",
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
