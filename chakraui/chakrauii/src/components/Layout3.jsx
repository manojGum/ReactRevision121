import { Box, Grid, GridItem, } from "@chakra-ui/react";

const Layout3 = () => {
  return (
    <Box border={"1px solid red"} m="5px 0px" p="30px">
      <Grid
        templateRows={["repeat(5,70px)", "repeat(6,50px)", "repeat(3, 180px)"]}
        templateColumns={["repeat(6, 1fr)"]}
        gap={4}
        gridTemplateAreas={[
          `
          "a a a b b b"
          "c c c c c c"
          "c c c c c c"
          "d d d d d d"
          "e e e e e e"
          `,
          `
          "a a a b b b"
          "a a a b b b"
          "c c c c c c"
          "c c c c c c"
          "d d d d d d"
          "e e e e e e"
       
          `,
          `"a a a b b b"
           "c c c c c c"
           "d d e e f f"
          `,
        ]}
        w="70%"
        m="auto"
      >
        <GridItem bg="#ffc83c" gridArea="a" />
        <GridItem bg="#ffc83c" gridArea="b" />
        <GridItem bg="#f14e69" gridArea="c" />
        <GridItem bg="#6e7bfa" gridArea="d" />
        <GridItem bg="#6e7bfa" gridArea="e" />
        <GridItem bg="#6e7bfa" gridArea="f" />
      </Grid>
    </Box>
  );
};

export default Layout3;