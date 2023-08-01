import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"header" "main"`,
        md: `"header header" "main background"`,
      }}
    >
      <GridItem area="header" bg="coral">
        header
      </GridItem>
      <GridItem area="main" bg="gold">
        main
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
