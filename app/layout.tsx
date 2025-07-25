import type { Metadata } from "next";
import "../styles/globals.css";
import { Providers } from "@/providers/providers";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="bg-teal-100">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
