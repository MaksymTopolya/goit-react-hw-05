import css from "./FilmsReviewRender.module.css"
export default function FilmsReviewRender({ author, content }) {

    return (
        <div className={css.container}>
            <h3 className={css.author}>{author}</h3>
            <p className={css.content}>{content}</p>
        </div>
    )
}