import Main from "./pages/Main";
import "./style.css"
import { lazy, Suspense, useState } from "react";


const Dashboard = lazy(() => import("./pages/Dashboard"))
const Settings = lazy(() => import("./pages/Settings"))

type PageName = "main" | "dashboard" | "settings"


function Home() {

    const [currentPage, setCurrentPage] = useState<PageName>("main")


    return (

        <div className="app">

            <header className="header">

                <h1>My React App</h1>
                <p>Learning React.lazy() and Code Splitting</p>
            </header>
    
            <nav className="navigation">

                <button className={ currentPage === "main" ? "active" : ""} onClick={() => setCurrentPage("main")}>Main</button>
                <button className={ currentPage === "dashboard" ? "active" : ""} onClick={() => setCurrentPage("dashboard")}>Dashboard</button>
                <button className={ currentPage === "settings" ? "active" : ""} onClick={() => setCurrentPage("settings")}>Settings</button>
            </nav>
    
            <main className="content">

                {currentPage === "main" && <Main />}
        
                {currentPage === "dashboard" && (

                    <Suspense fallback={<div className="loading" role="status">

                        <span className="spinner" />
                        <p>Loading Dashboard...</p>
                        </div>
                    }>
                        <Dashboard />
                    </Suspense>
                )}
        
                {currentPage === "settings" && ( 
                    <Suspense fallback={<div className="loading" role="status">

                        <span className="spinner" />
                        <p>Loading Settings...</p>
                    </div>
                }>
                    <Settings />
                </Suspense>
                )}
            </main>
    
            <footer className="footer">

                React.lazy() Practice Project
            </footer>
        </div>
    )
}

export default Home