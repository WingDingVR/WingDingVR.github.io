"use client";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { mulish, roboto } from "./fonts";

const theme = extendTheme({
  fonts: {
    mulish: mulish.style.fontFamily,
    roboto: roboto.style.fontFamily,
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
