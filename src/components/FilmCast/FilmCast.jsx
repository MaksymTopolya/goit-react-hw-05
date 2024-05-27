import { useParams} from "react-router-dom";
import { getCast } from "../../filmsApi";
import { useEffect, useState} from "react";
import FilmCastRender from "../FilmCastRender/FilmCastRender";
import css from "./FilmCast.module.css"

export default function FilmCast() {
    const { filmId } = useParams();
    const [casts, setCast] = useState([]);

    useEffect(() => {
        getCast(filmId)
            .then(data => {
        setCast(data.data.cast);
      })
      .catch(err => {
        console.log('Failed to fetch film:', err);
      });
    }, [])
    
    
    
    return (
        <div>
            {casts.length === 0 && <p>no actors</p>}
            <ul className={css.list}>
               {casts.map((cast) =>
                    <li key={cast.id}>
                        <FilmCastRender character={cast.character} name={cast.original_name} img={cast.profile_path} />
                    </li>  
                )}
            </ul>
        </div>
    )
}