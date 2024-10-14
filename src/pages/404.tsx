import { Link } from "react-router-dom"

export const NotFound = () => {
    return (
        <div className="container">
            <h1>404</h1>
            <Link to="/">To Home</Link>
        </div>
    )
}