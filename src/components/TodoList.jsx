import { Box, VStack, HStack, Text, Heading } from "@chakra-ui/react";
import InputTask from "./InputTask";
import FilterTask from "./FilterTask";

const TodoList = () => {
  return (
    <VStack minH="100vh" w="100%" spacing={12} p={4}>
      <Heading as="h1" fontSize="6xl" color="teal" textAlign="center">Todo List</Heading>
      <HStack spacing={4} w="60%" justifyContent="center">
        <InputTask />
        <FilterTask />
      </HStack>
      <Box
        bg="gray.100"
        p={4}
        borderRadius="md"
        shadow="md"
        w="100%"
        maxW="600px"
      >
        <Text fontSize="2xl" fontWeight="bold" mb={4} color="teal">
          Lista de Tareas
        </Text>
        <VStack spacing={4} align="stretch">
          {/* Aquí van los ítems de las tareas */}
          <Box bg="white" p={4} borderRadius="md" shadow="sm">
            Una Tarea
          </Box>
          <Box bg="white" p={4} borderRadius="md" shadow="sm">
            Otra Tarea
          </Box>
        </VStack>
      </Box>
    </VStack>
  );
};

export default TodoList;
