import apple from "../assets/desktop/apple-podcast.svg";
import google from "../assets/desktop/google-podcasts.svg";
import spotify from "../assets/desktop/spotify.svg";
import pocketCasts from "../assets/desktop/pocket-casts.svg";
import { Box, Flex, Show } from "@chakra-ui/react";

const Socials = () => {
  return (
    <div>
      <Show breakpoint="(max-width: 767px)">
        <Flex justifyContent="space-around">
          <img src={spotify} alt="Spotify" style={{ width: 56, height: 17 }} />
          <img
            src={apple}
            alt="Apple Podcast"
            style={{ width: 45, height: 17 }}
          />
          <Box alignSelf="center">
            <img
              src={google}
              alt="Google Podcast"
              style={{ width: 73, height: 11 }}
            />
          </Box>
          <img
            src={pocketCasts}
            alt="Pocket Casts"
            style={{ width: 77, height: 15 }}
          />
        </Flex>
      </Show>
      <Show breakpoint="(min-width: 768px)">
        <Flex justifyContent="space-around">
          <img src={spotify} alt="Spotify" style={{ width: 96, height: 29 }} />
          <img
            src={apple}
            alt="Apple Podcast"
            style={{ width: 78, height: 29 }}
          />
          <Box alignSelf="center">
            <img
              src={google}
              alt="Google Podcast"
              style={{ width: 125, height: 18 }}
            />
          </Box>
          <img
            src={pocketCasts}
            alt="Pocket Casts"
            style={{ width: 129, height: 26 }}
          />
        </Flex>
      </Show>
    </div>
  );
};

export default Socials;
