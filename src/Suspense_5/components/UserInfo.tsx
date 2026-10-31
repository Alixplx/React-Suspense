import { use } from "react"
import { userPromise } from "../data/dashboardData"


function UserInfo() {

    const user = use(userPromise)

    return (

        <section className="dashboard-card">

            <h3>User Information</h3>

            <div className="user-info">

                <div className="avatar">
                
                    {user.name.charAt(0)}
                </div>

                <div>

                    <h4>{user.name}</h4>
                    <p>@{user.username}</p>
                    <p>{user.email}</p>
                </div>
            </div>
        </section>
    )
}

export default UserInfo