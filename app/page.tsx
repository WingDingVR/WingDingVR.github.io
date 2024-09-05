"use client";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Button,
  Center,
  Flex,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";

import bgImage from "../public/images/wingding-bg.jpg";
import logoImage from "../public/images/logo.jpg";

export default function Home() {
  return (
    <>
      <Flex
        as="main"
        flex={1}
        backgroundImage={`linear-gradient(rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.95)), url(${bgImage.src})`}
        backgroundSize="cover"
        backgroundPosition="center"
        padding={[2, 4, 8]}
      >
        <VStack spacing={[2, 4]}>
          <Center padding={[0, 2, 4]}>
            <Image src={logoImage.src} />
          </Center>
          <Center padding={[2, 4, 8]}>
            <VStack spacing={[2, 4]}>
              <Text fontFamily="roboto" fontSize={[18, 24, 32]} color="white">
                We&apos;re crafting WingDing, the best place to take flight in VR!
                Whether you want race against the others to be the number one bird,
                or perch with your fellow players, this is where you want to be.
              </Text>
              <Text fontFamily="roboto" fontSize={[18, 24, 32]} color="white">
                We need your help to bring this vision to life! Support our
                journey and unlock exclusive rewards by backing our Kickstarter
                campaign. Together, we can make WingDing the most fun flying
                experience in VR!
              </Text>
              <Link
                href="https://www.kickstarter.com/projects/wingding/wingding-vr-social-play-and-flight-experience/"
                target="_blank"
              >
                <Button
                  leftIcon={<ExternalLinkIcon />}
                  size={["sm", "md", "lg"]}
                  colorScheme="teal"
                >
                  Back the Kickstarter
                </Button>
              </Link>
            </VStack>
          </Center>
        </VStack>
      </Flex>
    </>
  );
}
