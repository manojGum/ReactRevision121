import { Box, Grid, GridItem, } from "@chakra-ui/react";

const Layout2 = () => {
  return (
    <Box border={"1px solid red"} p="30px">
      <Grid
        gap={2}
        templateColumns={["repeat(1,1fr)","repeat(3,1fr)",]}
        templateRows={["repeat(3,150px)","repeat(3, 150px)"]}
        w="70%"
        margin="auto"
      >
        <GridItem bg="#a186bd" rowSpan={["1","2"]} colSpan={["3","2"]} />
        <GridItem bg="tomato" rowSpan={["1","3"]} colSpan={["3","auto"]}/>
        <GridItem bg="#6ccff6" colSpan={["3","2"]} />
      </Grid>
    </Box>
  );
};

export default Layout2;