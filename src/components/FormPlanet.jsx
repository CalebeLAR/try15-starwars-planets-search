import { useContext } from 'react';
import SearchedPlanets from '../context/SearchedPlanets';
import './styles/FormPlanet.css';

export default function FormPlanet() {
  const { inputName, handlesChange } = useContext(SearchedPlanets);
  return (
    <section className="searchBar">
      <div>
        <label htmlFor="nameFilter">
          <h1>SEARCH PLANET</h1>
          <input
            data-testid="name-filter"
            id="nameFilter"
            value={ inputName }
            type="text"
            onChange={ (event) => handlesChange(event) }
          />
        </label>
      </div>
      <div>
        <label htmlFor="columnFilter">
          Filtros
          <select id="columnFilter" data-testid="column-filter">
            <option value="population">population</option>
            <option value="orbital_period">orbital period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation period</option>
            <option value="surface_water">surface water</option>
          </select>
        </label>
      </div>
      <div>
        <label htmlFor="comparisonFilter">
          Operador
          <select id="comparisonFilter" data-testid="comparison-filter">
            <option value="maior">maior que</option>
            <option value="menor">menor que</option>
            <option value="igual">igual a</option>
          </select>
        </label>
      </div>
      <div>
        <label htmlFor="valueFilter">
          <h6>FILTER POPULATION</h6>
          <input
            data-testid="value-filter"
            id="valueFilter"
            value={ inputValue }
            type="text"
            onChange={ (event) => handlesChange(event) }
          />
        </label>
      </div>
      <div>
        <button type="button">Filtrar</button>
      </div>
    </section>
  );
}
