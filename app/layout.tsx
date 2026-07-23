import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "劲舞世界 GrooveParty 怀旧服",
  description: "经典韩国街舞音乐网游 GrooveParty 怀旧服概念官网。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
