import logo from "../assets/desktop/logo.svg";
import { Box, Image, Show } from "@chakra-ui/react";

const Logo = () => {
  return (
    <>
      <Show breakpoint="(max-width: 767px)">
        <Box marginBottom="3rem">
          <Image src={logo} alt="Pod-Logo" boxSize="56x135" marginLeft="30%" />
        </Box>
      </Show>
      <Show breakpoint="(min-width: 768px)">
        <Box padding="3rem 2.5rem" paddingBottom="9rem" maxW="277px">
          <Image src={logo} alt="Pod-Logo" boxSize="56x135" />
        </Box>
      </Show>
    </>
  );
};

export default Logo;
