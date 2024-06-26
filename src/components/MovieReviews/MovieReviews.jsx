import { useParams} from "react-router-dom";
import { getRewiews } from "../../filmsApi";
import { useEffect, useState} from "react";
import MovieReviewRender from "../MovieReviewRender/MovieReviewRender";
import css from "./MovieReviews.module.css"
export default function FilmsReview() {
    const { filmId } = useParams();
    const [reviews, setReview] = useState([]);

   
    useEffect(() => {
    getRewiews(filmId)
      .then(data => {
        setReview(data);
      })
      .catch(err => {
        console.log('Failed to fetch film:', err);
      });
  }, []);
   
    
   
    
    
    
    return (
        <div>
            {reviews.length === 0 && <p>no reviews</p>}
             <ul className={css.list}>
               {reviews.map((review) =>
                    <li key={review.id}>
                        <MovieReviewRender author={review.author} content={review.content}/>
                    </li>  
                )}
            </ul>
        </div>
    )
}