import { useEffect, useState } from 'react';
import { getByName } from "../../filmsApi";
import MovieList from '../../components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';

export default function MoviesPage() {
  const [filmsListByQuery, setFilmsListByQuery] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("query") ?? "";
  const [query, setQuery] = useState(search);

  useEffect(() => {
    const fetchFilms = async () => {
      const formattedQuery = search.split(" ").join("+");
      if (formattedQuery) {
        try {
          const data = await getByName(formattedQuery);
          setFilmsListByQuery(data);
        } catch (err) {
          console.error('Failed to fetch films:', err);
        }
      }
    };

    fetchFilms();
  }, [search]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchParams({ query });
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

      <MovieList films={filmsListByQuery } />
      
    </div>
  );
}


