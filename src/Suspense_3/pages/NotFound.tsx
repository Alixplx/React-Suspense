import { Link } from "react-router"


function NotFound() {

    return (

        <section className="page not-found">

            <h2>404 — Page Not Found</h2>
            <p>The page you are looking for does not exist.</p>
            <Link to="/" className="back-link">Return Home</Link>
        </section>
    )
}

export default NotFound