import { Box, VStack, HStack, Stack, Text, Heading, IconButton } from "@chakra-ui/react";
import { CheckIcon, DeleteIcon } from "@chakra-ui/icons";
import InputTask from "./InputTask";
import FilterTask from "./FilterTask";

const TodoList = () => {
  return (
    <VStack minH="100vh" w="100%" spacing={12} p={4}>
      <Heading as="h1" fontSize="6xl" color="teal" textAlign="center">Todo List</Heading>
      <Stack
        spacing={4}
        w="60%"
        direction={{ base: "column", md: "row" }} // Cambia a fila en pantallas medianas
        justifyContent="center"
        alignItems="center"
      >
        <InputTask />
        <FilterTask />
      </Stack>
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
            <HStack justifyContent="space-between">
              <Text>Una Tarea</Text>
              <HStack>
                <IconButton
                  aria-label="Marcar como completada"
                  icon={<CheckIcon />}
                  size="sm"
                  colorScheme="green"
                />
                <IconButton
                  aria-label="Eliminar tarea"
                  icon={<DeleteIcon />}
                  size="sm"
                  colorScheme="red"
                />
              </HStack>
            </HStack>
          </Box>
          <Box bg="white" p={4} borderRadius="md" shadow="sm">
            <HStack justifyContent="space-between">
              <Text>Otra Tarea</Text>
              <HStack>
                <IconButton
                  aria-label="Marcar como completada"
                  icon={<CheckIcon />}
                  size="sm"
                  colorScheme="green"
                />
                <IconButton
                  aria-label="Eliminar tarea"
                  icon={<DeleteIcon />}
                  size="sm"
                  colorScheme="red"
                />
              </HStack>
            </HStack>
          </Box>
        </VStack>
      </Box>
    </VStack>
  );
};

export default TodoList;
