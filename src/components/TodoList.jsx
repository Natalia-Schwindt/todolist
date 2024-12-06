import { useState } from "react";
import { Box, VStack, HStack, Stack, Text, Heading, IconButton } from "@chakra-ui/react";
import { CheckIcon, DeleteIcon } from "@chakra-ui/icons";
import InputTask from "./InputTask";
import FilterTask from "./FilterTask";

const TodoList = () => {
  const [tasks, setTasks] = useState([]); // Inicializado en array vacío

  const addTask = (task) => {
    if (task.trim() !== "") {
      //task.trim() elimina los espacios en blanco al inicio y al final
      //y con (!== "") comprueba si la tarea no está vacia.
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: Date.now(), text: task, completed: false },
        //id: Date.now() genera un id único para cada tarea.
      ]);
    }
  };

const toggleTaskCompletion = (id) => {
  setTasks((prevTask) =>
    prevTask.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    )
  );
};

const deleteTask = (id) => {
  setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
};

  return (
    <VStack minH="100vh" w="100%" spacing={12} p={4}>
      <Heading as="h1" fontSize="6xl" color="teal" textAlign="center">
        Todo List
      </Heading>
      <Stack
        spacing={4}
        w="60%"
        direction={{ base: "column", md: "row" }}
        justifyContent="center"
        alignItems="center"
      >
        <InputTask addTask={addTask} />
        <FilterTask />
      </Stack>
      <Box bg="gray.100" p={4} borderRadius="md" shadow="md" w="100%" maxW="600px">
        <Text fontSize="2xl" fontWeight="bold" mb={4} color="teal">
          Lista de Tareas
        </Text>
        <VStack spacing={4} align="stretch">
          {tasks.map((task) => (
            <Box key={task.id} bg="white" p={4} borderRadius="md" shadow="sm">
              <HStack justifyContent="space-between">
                <Text
                  textDecoration={task.completed ? "line-through" : "none"}
                  color={task.completed ? "gray.500" : "black"}
                >
                  {task.text}
                </Text>
                <HStack>
                  <IconButton
                    aria-label="Marcar como completada"
                    icon={<CheckIcon />}
                    size="sm"
                    colorScheme="green"
                    onClick={() => toggleTaskCompletion(task.id)}
                  />
                  <IconButton
                    aria-label="Eliminar tarea"
                    icon={<DeleteIcon />}
                    size="sm"
                    colorScheme="red"
                    onClick={() => deleteTask(task.id)}
                  />
                </HStack>
              </HStack>
            </Box>
          ))}
        </VStack>
      </Box>
    </VStack>
  );
};

export default TodoList;
