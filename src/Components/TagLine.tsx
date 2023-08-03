import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Show,
} from "@chakra-ui/react";

const TagLine = () => {
  return (
    <>
      <Show breakpoint="(max-width: 767px)">
        <Heading as="h2" color="#54E6AF" fontSize="2xl" textAlign="center">
          PUBLISH YOUR PODCAST
        </Heading>
        <Heading as="h2" color="#FFFFFF" fontSize="2xl" textAlign="center">
          EVERYWHERE.
        </Heading>
      </Show>
      <Show breakpoint="(min-width: 768px)">
        <Box marginX="2rem">
          <Heading as="h2" color="#54E6AF" fontSize="52">
            PUBLISH YOUR PODCAST
          </Heading>
          <Heading as="h2" color="#FFFFFF" fontSize="52">
            EVERYWHERE.
          </Heading>
        </Box>
      </Show>
    </>
  );
};

export default TagLine;
