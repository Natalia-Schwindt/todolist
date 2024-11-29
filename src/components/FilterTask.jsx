import { Select } from "@chakra-ui/react";

const FilterTask = () => {
  return (
    <Select placeholder="Seleccione una opción">
      <option value="todas">Todas</option>
      <option value="completas">Completas</option>
      <option value="incompletas">Incompletas</option>
    </Select>
  );
};

export default FilterTask;
