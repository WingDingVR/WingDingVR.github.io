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

import bgImage from "../public/wingding-bg.jpg";

export default function Home() {
  return (
    <>
      <Flex
        as="header"
        w="full"
        position="static"
        top={0}
        backgroundColor="black"
      >
        <Center w="full">
          <Image
            src="/wingding-logo.png"
            alt="WingDing Logo"
            boxSize={["128px", "256px", "320px"]}
          />
        </Center>
      </Flex>
      <Flex
        as="main"
        flex={1}
        backgroundImage={`linear-gradient(rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.5)), url(${bgImage.src})`}
        backgroundSize="cover"
        backgroundPosition="center"
      >
        <SimpleGrid
          columns={[1, 2]}
          w="full"
          minH="100%"
          marginY={[4, 8, 16]}
          paddingX={[4, 8, null]}
          spacing={[10, null]}
        >
          <Center padding={[2, 4, 8]}>
            <VStack spacing={[2, 4]}>
              <Text fontFamily="roboto" fontSize={[18, 24, 32]} color="white">
                We&apos;re crafting WingDing, the best place to take flight in
                VR! WingDing gives you a space to fly across the world. Whether
                you want race against the others to be the number one bird, or
                perch with your fellow players, this is where you want to be!
              </Text>
              <Text fontFamily="roboto" fontSize={[18, 24, 32]} color="white">
                We need your help to bring this vision to life! Support our
                journey and unlock exclusive rewards by backing our Kickstarter
                campaign. Together, we can make WingDing the premier destination
                for VR adventurers seeking the ultimate flight experience.
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
                  Kickstarter
                </Button>
              </Link>
            </VStack>
          </Center>
          <Center padding={[0, 2, 4]}>
            <iframe
              width="640"
              height="360"
              src="https://www.youtube.com/embed/9FoBV1h--8k?si=H4SsU66yCLFeb7kB"
              title="YouTube video player"
              style={{ border: "0" }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </Center>
        </SimpleGrid>
      </Flex>
    </>
  );
}
