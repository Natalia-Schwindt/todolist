// import { Fa42Group } from "react-icons/fa6";
import { ChakraProvider, VStack } from '@chakra-ui/react';
import TodoList from './components/TodoList';

function App() {

  return (
    <ChakraProvider>
      <VStack>
        <TodoList />
      </VStack>
    </ChakraProvider>
  );
}

export default App
