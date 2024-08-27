import type { Metadata } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "WingDing VR",
  description: "Flying. Friends. Fun.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ maxWidth: "100vw" }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
