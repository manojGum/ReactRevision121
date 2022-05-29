import React from "react";
import { Box, ChakraProvider, Container } from '@chakra-ui/react'
import Github from "./components/Github";

function App() {
  return (
    <ChakraProvider>
      {/* <Container> */}
      <Github />
      {/* </Container> */}
  
  </ChakraProvider>
  );
}

export default App;