import { useState} from 'react';
import { getByName } from "../../filmsApi";
import MovieList from '../../components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';

export default function MoviesPage() {
  const [filmsListByQuery, setFilmsListByQuery] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("query") ?? "";
  const [query, setQuery] = useState(search);



  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedQuery = query.split(" ").join("+");
    
    try {
      const data = await getByName(formattedQuery);
      setFilmsListByQuery(data);
      setSearchParams({ query: formattedQuery });
    } catch (err) {
      console.error('Failed to fetch films:', err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="write a film" 
          name="query" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {filmsListByQuery.map((film) => (
          <li key={film.id}>
            <MovieList id={film.id} name={film.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}

