import { useState } from 'react';

export default function useFilterPlanet() {
  const [numericFilterSelected, setNumericFilterSelected] = useState([]);
  const [inputsFilterSelected, setInputsFilterSelected] = useState([]);
  const [filters, setFilters] = useState([]);

  const filterByNumericInputs = () => {
    // ela pega os valores que estão nos inputs numéricos, e usa eles para montar a condição de filtragem
    // coloca o planeta filtrado no estado local.
    const { column, comparison, value } = input;

    switch (comparison) {
    case 'maior que':
      setNumericFilterSelected(fetchedPlanets.filter(
        (planet) => parseInt(planet[column], 10) > value,
      ));
      setFilters([...filters, fetchedPlanets.filter(
        (planet) => parseInt(planet[column], 10) > value,
      )]);
      break;
    case 'menor que':
      setNumericFilterSelected(fetchedPlanets.filter(
        (planet) => parseInt(planet[column], 10) < value,
      ));
      setFilters([...filters, fetchedPlanets.filter(
        (planet) => parseInt(planet[column], 10) < value,
      )]);
      break;
    default:
      setNumericFilterSelected(fetchedPlanets.filter(
        (planet) => parseInt(planet[column], 10) === value,
      ));
      setFilters([...filters, fetchedPlanets.filter(
        (planet) => parseInt(planet[column], 10) === value,
      )]);
    }
  };

  const checksIfTheFilterIsValid = () => {
    // verifica se os inputs de filtro ja foram selecionados ou não.
    // caso esse filtro ainda não seja adicionado, então permite filtrar e
    // armazenar o planetas filtrados em numericFilterSelected
    const { column, comparison, value } = input;
    const newInputFilter = column + comparison + value;
    if (!inputsFilterSelected.includes(newInputFilter)) {
      setInputsFilterSelected([...inputsFilterSelected, newInputFilter]);
      filterByNumericInputs();
    }
  };

  return [
    numericFilterSelected,
    filters,
    checksIfTheFilterIsValid,
  ];
}
