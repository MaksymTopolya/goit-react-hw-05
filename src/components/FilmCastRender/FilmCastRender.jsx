import css from "./FilmCastRender.module.css"
export default function FilmCastRender({ character, name, img }) {

    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w500${img}`} alt={name} className={css.img } />
            <h1 className={css.name }>Real name - {name}</h1>
             <p className={css.character }>Character - {character}</p>
        </div>
    )
}