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
    <Grid
      templateAreas={{
        base: `"header" "main"`,
        md: `"header header" "main background"`,
      }}
    >
      <GridItem area="main">
        <Show below="md">
          <Flex flexDirection="column">
            <Center>
              <Heading as="h2" color="#54E6AF" fontSize="2xl">
                PUBLISH YOUR PODCAST
              </Heading>
            </Center>
            <Center>
              <Heading as="h2" color="#FFFFFF" fontSize="2xl">
                EVERYWHERE.
              </Heading>
            </Center>
          </Flex>{" "}
        </Show>
        <Show breakpoint="(min-width: 769px)">
          <Box marginX="2rem">
            <Heading as="h2" color="#54E6AF" fontSize="52">
              PUBLISH YOUR PODCAST
            </Heading>
            <Heading as="h2" color="#FFFFFF" fontSize="52">
              EVERYWHERE.
            </Heading>
          </Box>
        </Show>
      </GridItem>
    </Grid>
  );
};

export default TagLine;
