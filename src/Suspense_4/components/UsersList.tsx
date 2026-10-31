import { use } from "react"
import { usersPromise } from "../data/users"


function UsersList() {

    const users = use(usersPromise);

    return (

        <div className="users-grid">

            {users.map((user) => (

                <article className="user-card" key={user.id}>

                    <div className="avatar">{user.name.charAt(0)}</div>

                    <h3>{user.name}</h3>

                    <p className="username">@{user.username}</p>

                    <div className="user-details">

                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Website:</strong> {user.website}</p>
                    </div>
                </article>
            ))}
        </div>
    )
}

export default UsersList