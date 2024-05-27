import { Link } from "react-router-dom"
export default function ErorPage(params) {
    return (
        <div>
            <h4>Sorry we can't find something. Please go <Link to="/">back</Link></h4>
        </div>
    )
}