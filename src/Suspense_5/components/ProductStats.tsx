import { use } from "react"
import { postsPromise } from "../data/dashboardData"


function ProductStats() {

    const posts = use(postsPromise);

    return (

        <section className="dashboard-card">

            <h3>Activity Statistics</h3>

            <div className="stats">

                <div className="stat">

                    <span>Total Posts</span>
                    <strong>{posts.length}</strong>
                </div>

                <div className="stat">

                    <span>First Post ID</span>
                    <strong>{posts[0]?.id ?? "N/A"}</strong>
                </div>
            </div>
        </section>
    )
}

export default ProductStats