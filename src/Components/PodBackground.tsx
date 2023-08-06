import { ReactNode } from "react";
import { Box, Show } from "@chakra-ui/react";
import BgImageDesktop from "../assets/desktop/image-host.jpg";
import BgImageTablet from "../assets/tablet/image-host.jpg";
import BgImageMobile from "../assets/mobile/image-host.jpg";

interface Props {
  children: ReactNode;
}

const PodBackground = ({ children }: Props) => {
  const bgBoxStyles = {
    bgMobile: {
      backgroundImage: BgImageMobile,
      backgroundRepeat: "no-repeat",
      filter: "auto",
    },
    bgTablet: {
      backgroundImage: BgImageTablet,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right",
      backgroundSize: "contain",
      filter: "auto",
    },
    bgDesktop: {
      backgroundImage: BgImageDesktop,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right",
      filter: "auto",
    },
  };

  const contentBoxStyles = {
    mobile: {
      backgroundColor: "rgb(18, 23, 37, 0.9)",
      padding: "3rem 1.5rem",
    },
    tablet: {
      backgroundColor: "rgb(18, 23, 37, 0)",
    },
    desktop: {
      backgroundColor: "rgb(18, 23, 37, 0)",
    },
  };

  return (
    <>
      <Show breakpoint="(max-width: 767px)">
        <Box sx={bgBoxStyles.bgMobile} backgroundSize="">
          <Box sx={contentBoxStyles.mobile}>{children}</Box>
        </Box>
      </Show>
      <Show breakpoint="(min-width: 768px) and (max-width: 1023px)">
        <Box sx={bgBoxStyles.bgTablet} height="100vh">
          <Box sx={contentBoxStyles.tablet}>{children}</Box>
        </Box>
      </Show>
      <Show breakpoint="(min-width: 1024px)">
        <Box sx={bgBoxStyles.bgDesktop} height="100vh">
          <Box sx={contentBoxStyles.desktop}>{children}</Box>
        </Box>
      </Show>
    </>
  );
};

export default PodBackground;
