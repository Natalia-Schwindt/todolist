import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";

const InputTask = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (task.trim() !== "") { // Validación para evitar agregar tareas vacías
      addTask(task); // Llama a la función para agregar la tarea
      setTask(""); // Limpia el input
    }
  };

  return (
    <InputGroup size="md">
      <Input
        pr="4.5rem"
        type="text"
        placeholder="Ingrese una tarea"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") handleAddTask(); // Agrega la tarea al presionar Enter
        }}
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleAddTask} colorScheme="teal">
          Agregar
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default InputTask;
