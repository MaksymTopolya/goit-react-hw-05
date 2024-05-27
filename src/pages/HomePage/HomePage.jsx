import { useEffect, useState } from "react";
import { api } from "../../filmsApi";
import MovieList from "/./src/components/MovieList/MovieList"
export default function HomePage() {
    const [filmsList, setFilmsList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    api(currentPage)
      .then(data => {
        setFilmsList(data);
      })
      .catch(err => {
        console.error('Failed to fetch films:', err);
      });
  }, []);


  return (
    <div>
            <h1>Trending today</h1>
            <ul>
                {filmsList.map((film) =>
                    <li key={film.id}>
                        <MovieList id={film.id} name={film.title} />
                    </li>  
                )}
            </ul>
        </div>
  );
}




