import { Link, useLocation } from "react-router-dom";

export default function MovieList({ films}) {
    const location = useLocation()
    console.log(films)
    return (  
        <div>
             <ul>
                {films.map((film) =>
                    <li key={film.id}>
                        <Link to={`/movies/${film.id}`} state={location}>{film.title}</Link>
                    </li>  
                )}
            </ul>
        </div>
    );
}