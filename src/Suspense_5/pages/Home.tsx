import { Link } from "react-router"


function Home() {

    return (

        <section className="home-page">

            <h2>Welcome to our Dashboard</h2>

            <p>
                This project demonstrates advanced React Suspense
                patterns and independent data loading.
            </p>

            <Link to="/dashboard" className="dashboard-link">

                Open Dashboard
            </Link>
        </section>
    )
}

export default Home