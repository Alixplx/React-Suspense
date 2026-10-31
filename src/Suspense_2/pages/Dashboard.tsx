
function Dashboard() {

    return (

        <section className="page">

            <h2>Dashboard</h2>
            <p>Welcome to your analytics dashboard.</p>
    
            <div className="stats-grid">
                <div className="stat-card">

                    <span>Total Users</span>
                    <strong>1,250</strong>
                </div>
    
                <div className="stat-card">

                    <span>Revenue</span>
                    <strong>$8,400</strong>
                </div>
    
                <div className="stat-card">

                    <span>Orders</span>
                    <strong>320</strong>
                </div>
            </div>
        </section>
    )
}
  
export default Dashboard