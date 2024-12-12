import { useState, useEffect } from "react";
import {
  Box,
  VStack,
  HStack,
  Stack,
  Text,
  Heading,
  IconButton,
  Editable,
  EditableInput,
  EditablePreview,
} from "@chakra-ui/react";
import { CheckIcon, DeleteIcon } from "@chakra-ui/icons";
import InputTask from "./InputTask";
import FilterTask from "./FilterTask";

const TodoList = () => {
  // Lee las tareas desde localStorage al iniciar
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const [tasks, setTasks] = useState(savedTasks); // Inicializa con las tareas guardadas
  const [filter, setFilter] = useState(""); // Estado para el filtro

  useEffect(() => {
    // Guarda las tareas en localStorage cuando el estado de tasks cambie
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]); // Se ejecutará cuando tasks cambie

  const addTask = (task) => {
    if (task.trim() !== "") {
      //task.trim() elimina los espacios en blanco al inicio y al final
      //y con (!== "") comprueba si la tarea no está vacía.
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

  const updateTaskText = (id, newText) => {
    if (newText === "") return; // Salir si el texto está vacio
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              text: newText } :task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completas") return task.completed;
    if (filter === "incompletas") return !task.completed;
    return true; // Retorna todas.
  });

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
        <FilterTask filter={filter} setFilter={setFilter} />
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
          {filteredTasks.map((task) => (
            <Box key={task.id} bg="white" p={4} borderRadius="md" shadow="sm">
              <HStack justifyContent="space-between">
                <Editable
                  defaultValue={task.text}
                  onSubmit={(newText) => {
                    if (newText.trim() === "") {
                      // Restablece el texto al valor original si está vacío
                      alert("El texto no puede estar vacío. Se restaurará el valor anterior.");
                      return;
                    }
                    updateTaskText(task.id, newText);
                  }}
                  >
                  <EditablePreview
                    textDecoration={task.completed ? "line-through" : "none"}
                    color={task.completed ? "gray.500" : "black"}
                  />
                  <EditableInput />
                </Editable>
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
