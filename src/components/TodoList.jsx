import { Box, VStack, Text, Heading } from "@chakra-ui/react";
import InputTask from "./InputTask";
import FilterTask from "./FilterTask";

const TodoList = () => {
  return (
    <VStack bg='beige' w='100%' h='100%'>
      <Heading color="teal">Todo List</Heading>
      <InputTask />
      <FilterTask />
      <Box bg="gray.100" p={4} borderRadius="md" shadow="md">
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
