import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Show,
} from "@chakra-ui/react";
import Logo from "./Components/Logo";
import TagLine from "./Components/TagLine";
import Content from "./Components/Content";
import Socials from "./Components/Socials";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"header" "main"`,
        md: `"header header" "main background"`,
      }}
    >
      <GridItem area="header"></GridItem>
      <GridItem area="main"></GridItem>
      <Show above="md">
        <GridItem area="background"></GridItem>
      </Show>
    </Grid>
  );
}

export default App;
