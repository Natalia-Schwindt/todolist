// import { Fa42Group } from "react-icons/fa6";
import { ChakraProvider, VStack, Box } from "@chakra-ui/react";
import TodoList from "./components/TodoList";
import fondo from "./assets/fondo.webp";

function App() {
  return (
    <ChakraProvider>
      <Box
        bgImage={`url(${fondo})`}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        minH="100vh"
      >
        <VStack>
          <TodoList />
        </VStack>
      </Box>
    </ChakraProvider>
  );
}

export default App;
