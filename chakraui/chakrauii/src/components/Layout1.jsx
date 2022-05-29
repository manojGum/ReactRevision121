import {
    Box,
    Center,
    Grid,
    GridItem,
  } from "@chakra-ui/react";
  
  const Layout1 = () => {
    return (
    
    <Box border={"1px solid black"} m="5px 0px" p="30px">
        <Grid
  templateRows={["repeat(1, 500px)"]}
  templateColumns={['repeat(3, 1fr)']}

  gap={4}
  w={"100%"}
  m={"auto"}
>
  <GridItem  bg='blue'> <Center h= {["300px","100px"]}>Nav</Center></GridItem>
  <GridItem  bg='orange'><Center h={["300px","100px"]}>CONTENT</Center></GridItem>
  <GridItem  bg='red' > <Center h= {["300px","100px"]}>WIDGET</Center></GridItem>

</Grid>
    </Box>
    );
  };
  
  export default Layout1