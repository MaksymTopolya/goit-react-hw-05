import { useState, useEffect, useRef } from 'react';
import { Outlet, useParams, useLocation, Link } from 'react-router-dom';
import { getById } from '../../filmsApi';
import { NavLink } from 'react-router-dom';
import css from "./MovieDetailsPage.module.css"
import clsx from 'clsx';

export default function MovieDetailsPage() {
  const { filmId } = useParams();
  const [film, setFilm] = useState({});

  const location = useLocation()
  const backHref = useRef(location.state ?? "/")
  useEffect(() => {
    getById(filmId)
      .then(data => {
        setFilm(data);
      })
      .catch(err => {
        console.log('Failed to fetch film:', err);
      });
  }, [filmId]);

  return (
    <div>
      <Link to={backHref.current}>Go back</Link>
      <div>
        {film.poster_path && (
          <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt={film.title} />
        )}
        <div className="">
          <h3 className="">{film.title}</h3>
          <p>Tagline - {film.tagline}</p>
          <p>Overview - {film.overview}</p>
          <p>Average vote - {film.vote_average}</p>
                  <p>Release date - {film.release_date}</p>
              </div>
              <div className={css.information}>
                  <NavLink to={`cast`} className={(params) => {
                        return clsx(css.link, params.isActive && css.active);
                    }}>Cast</NavLink>
          
                  <NavLink to={`revievs`} className={(params) => {
                        return clsx(css.link, params.isActive && css.active);
                    }}>Revievs</NavLink>
              </div>

              <Outlet/>
      </div>
    </div>
  );
}