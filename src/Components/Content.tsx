import { Box, Show, Text } from "@chakra-ui/react";

const Content = () => {
  return (
    <>
      <Show breakpoint="(max-width: 767px)">
        <Box margin="1rem 0">
          <Text
            fontSize="18px"
            color="C2CBE5"
            textAlign="center"
            fontWeight="light"
          >
            Upload your audio to Pod with a single click. We’ll then distribute
            your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket
            Casts and more!
          </Text>
        </Box>
      </Show>
      <Show breakpoint="(min-width: 768px)">
        <Text
          fontSize="18px"
          color="C2CBE5"
          fontWeight="light"
          margin="2rem 2.5rem"
          maxW="445px"
        >
          Upload your audio to Pod with a single click. We’ll then distribute
          your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts
          and more!
        </Text>
      </Show>
    </>
  );
};

export default Content;
