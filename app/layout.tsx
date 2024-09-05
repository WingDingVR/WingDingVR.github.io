import type { Metadata } from "next";
import { Providers } from "./providers";
import { Flex } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "WingDing VR",
  description: "Flight! Friends! Fun!",
  openGraph: {
    title: "WingDing",
    description: "Flight! Friends! Fun! - WingDing is the ultimate VR flying experience",
    url: 'https://wingdingvr.com',
    siteName: "WingDing VR",
    type: 'website',
    images: [
      {
        url: 'https://wingdingvr.com/images/logo.jpg',
        secureUrl: 'https://wingdingvr.com/images/logo.jpg',
        width: 717,
        height: 720,
        alt: 'Logo for WingDing VR',
      }
    ]
  }
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
