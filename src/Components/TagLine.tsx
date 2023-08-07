import { Box, Heading, Show } from "@chakra-ui/react";

const TagLine = () => {
  return (
    <>
      <Show breakpoint="(max-width: 767px)">
        <Box margin="1.5rem 0">
          <Heading
            as="h2"
            color="#54E6AF"
            fontSize="26"
            textAlign="center"
            fontWeight="light"
          >
            PUBLISH YOUR PODCAST
          </Heading>
          <Heading
            as="h2"
            color="#FFFFFF"
            fontSize="26"
            textAlign="center"
            fontWeight="light"
          >
            EVERYWHERE.
          </Heading>
        </Box>
      </Show>
      <Show breakpoint="(min-width: 768px)">
        <Box marginX="2.5rem" marginY="1.6rem" paddingTop="93px">
          <Heading as="h2" color="#54E6AF" fontSize="48" fontWeight="light">
            PUBLISH YOUR PODCAST
          </Heading>
          <Heading as="h2" color="#FFFFFF" fontSize="48" fontWeight="light">
            EVERYWHERE.
          </Heading>
        </Box>
      </Show>
    </>
  );
};

export default TagLine;
