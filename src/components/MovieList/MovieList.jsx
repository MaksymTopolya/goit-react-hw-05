import { Link, useLocation } from "react-router-dom";

export default function MovieList({ name, id }) {
    const location = useLocation()
    return (  
        <Link to={`/movies/${id}`} state={location}>{name}</Link>
    );
}