import "./index.css";
import Logo from "./Components/Logo";
import TagLine from "./Components/TagLine";
import Content from "./Components/Content";
import Socials from "./Components/Socials";
import RequestAccessForm from "./Components/RequestAccessForm";
import PodBackground from "./Components/PodBackground";
import { Box, Image, Show } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Box backgroundColor="rgb(18, 23, 37)">
        <Show breakpoint="(max-width: 767px)">
          <PodBackground>
            <Logo />
            <TagLine />
            <Content />
            <Socials />
            <RequestAccessForm />
          </PodBackground>
        </Show>
        <Show breakpoint="(min-width: 768px) and (max-width: 1024px)">
          <PodBackground>
            <Logo />
            <Box width="674px" backgroundColor="rgb(18, 23, 37)">
              <TagLine />
              <Content />
              <Box maxW="427px" marginLeft="2.5rem">
                <RequestAccessForm />
              </Box>
              <Socials />
            </Box>
            <Box
              height="257px"
              backgroundColor="rgb(18, 23, 37)"
              display="flex"
              alignItems="end"
              padding="0 1.5rem"
            >
              <Image
                src="/src/assets/desktop/bg-pattern-dots.svg"
                maxW="232px"
                maxH="104px"
              />
            </Box>
          </PodBackground>
        </Show>
      </Box>
    </>
  );
}

export default App;
