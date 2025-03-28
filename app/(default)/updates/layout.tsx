import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Updates - UpShft",
  description: "Page description",
};

export default function UpdatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
