import css from "./MovieReviewRender.module.css"
export default function MovieReviewRender({ author, content }) {

    return (
        <div className={css.container}>
            <h3 className={css.author}>{author}</h3>
            <p className={css.content}>{content}</p>
        </div>
    )
}