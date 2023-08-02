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

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"header" "main"`,
        md: `"header header" "main background"`,
      }}
    >
      <GridItem area="header"></GridItem>
      <GridItem area="main">
        <TagLine />
      </GridItem>
      <Show above="md">
        <GridItem area="background" bg="blue">
          background
        </GridItem>
      </Show>
    </Grid>
  );
}

export default App;
