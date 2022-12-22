import { useContext } from 'react';
import SearchedPlanets from '../context/SearchedPlanets';
import './styles/Table.css';

function Table() {
  const {
    fetchedPlanets,
    inputName,
    numericFilter,
  } = useContext(SearchedPlanets);

  const filterPlanets = () => {
    if (numericFilter !== 'ainda não filtrado') {
      if (numericFilter.length === 0) {
        return fetchedPlanets;
      }
      const filter = numericFilter.filter(
        (planets) => planets.name.includes(inputName.inputValue),
      );

      if (filter.length > 0) {
        return filter;
      }

      return numericFilter;
    }

    const filter = fetchedPlanets.filter(
      (planets) => planets.name.includes(inputName.inputValue),
    );

    if (filter.length > 0) {
      return filter;
    }

    return fetchedPlanets;
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation</th>
          <th>Orbital_Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface_Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>url</th>
        </tr>
      </thead>
      <tbody>
        {
          filterPlanets().map((planet) => (
            <tr key={ planet.name }>
              <td><p>{planet.name}</p></td>
              <td><p>{planet.rotation_period}</p></td>
              <td><p>{planet.orbital_period}</p></td>
              <td><p>{planet.diameter}</p></td>
              <td><p>{planet.climate}</p></td>
              <td><p>{planet.gravity}</p></td>
              <td><p>{planet.terrain}</p></td>
              <td><p>{planet.surface_water}</p></td>
              <td><p>{planet.population}</p></td>
              <td>{planet.films.map((fil, i) => (<p key={ i }>{`\n${fil}`}</p>))}</td>
              <td><p>{planet.created}</p></td>
              <td><p>{planet.edited}</p></td>
              <td><p>{planet.url}</p></td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default Table;
