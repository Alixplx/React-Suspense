import { use } from "react";
import { todosPromise } from "../data/dashboardData";


function RecentOrders() {

    const todos = use(todosPromise);

    return (

        <section className="dashboard-card">

            <h3>Recent Tasks</h3>

            <div className="tasks">

                {todos.slice(0, 5).map((todo) => (

                    <div className="task" key={todo.id}>

                        <span>{todo.title}</span>

                        <span className={ todo.completed ? "completed" : "pending"}>
                        
                            {todo.completed ? "Completed" : "Pending"}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default RecentOrders;