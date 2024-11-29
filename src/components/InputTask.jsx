import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";

const InputTask = () => {

     const [show, setShow] = useState(false);
     const handleClick = () => setShow(!show);

    return (
      <InputGroup size="md">
        <Input
          pr="4.5rem"
          type={"text"}
          placeholder="Ingrese una tarea"
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            Agregar
          </Button>
        </InputRightElement>
      </InputGroup>
    );
  }


export default InputTask;
