import type { Metadata } from "next";
import { Providers } from "./providers";
import { Flex } from "@chakra-ui/react";

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
      <body>
        <Providers>
          <Flex direction="column" minH="100vh">
            {children}
          </Flex>
        </Providers>
      </body>
    </html>
  );
}
