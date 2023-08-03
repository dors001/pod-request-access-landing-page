import { Show, Text } from "@chakra-ui/react";

const Content = () => {
  return (
    <>
      <Show breakpoint="(max-width: 767px)">
        <Text fontSize="18px" color="C2CBE5" textAlign="center">
          Upload your audio to Pod with a single click. We’ll then distribute
          your podcast to Spotify , Apple Podcasts, Google Podcasts, Pocket
          Casts and more!
        </Text>
      </Show>
      <Show breakpoint="(min-width: 768px)">
        <Text fontSize="18px" color="C2CBE5">
          Upload your audio to Pod with a single click. We’ll then distribute
          your podcast to Spotify , Apple Podcasts, Google Podcasts, Pocket
          Casts and more!
        </Text>
      </Show>
    </>
  );
};

export default Content;
