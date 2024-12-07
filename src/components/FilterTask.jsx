import { Select } from "@chakra-ui/react";

const FilterTask = ({ filter, setFilter }) => {
  return (
    <Select
      value={filter} // Vincula el estado al valor del select
      onChange={(e) => setFilter(e.target.value)} // Actualiza el estado al cambiar la selección
      w="100%"
      placeholder="Seleccione una opción"
      >
      <option value="todas">Todas</option>
      <option value="completas">Completas</option>
      <option value="incompletas">Incompletas</option>
    </Select>
  );
};

export default FilterTask;
