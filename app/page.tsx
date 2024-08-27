import { Box, Center, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Flex as="header" minH="40px" w="full" position="sticky" top={0}>
        <Box>
          <Text
            fontFamily="mulish"
            fontSize={["3xl", "6xl"]}
            fontWeight={1000}
            fontStyle="italic"
          >
            WingDing
          </Text>
        </Box>
      </Flex>
      <Flex grow={1}>
        <SimpleGrid
          columns={[1, 2]}
          w="full"
          marginTop={[5, 10, 20]}
          spacing={[10, null]}
        >
          <Box>
            <Center padding={[0, 10, 20]}>
              <Text fontFamily="roboto" fontSize={[18, 30]}>
                We're crafting WingDing with a passionate community in mind, and
                we need your help to bring this vision to life. Support our
                journey and unlock exclusive rewards by backing our Kickstarter
                campaign. Together, we can make WingDing the premier destination
                for VR adventurers seeking the ultimate flight experience.
              </Text>
            </Center>
          </Box>
          <Box>
            <Center>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/9FoBV1h--8k?si=H4SsU66yCLFeb7kB"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </Center>
          </Box>
        </SimpleGrid>
      </Flex>
    </main>
  );
}
