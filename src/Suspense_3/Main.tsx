import "./style.css"
import { lazy, Suspense } from "react";
import { BrowserRouter, Link, Route, Routes} from "react-router"
import Home from "./pages/Home"


const Dashboard = lazy(() => import("./pages/Dashboard"))
const Settings = lazy(() => import("./pages/Settings"))
const NotFound = lazy(() => import("./pages/NotFound"))


function LoadingFallback() {

    return (

        <div className="loading" role="status">

            <span className="spinner" />
            <p>Loading page...</p>
        </div>
    )
}

function Main() {

    return (

        <BrowserRouter>

          <div className="app">

            <header className="header">

                <h1>My React Application</h1>
                <p>Suspense + React Router + TypeScript</p>
            </header>
    
            <nav className="navigation">

                <Link to="/">Home</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/settings">Settings</Link>
            </nav>
    
            <main className="content">

                <Suspense fallback={<LoadingFallback />}>

                    <Routes>

                        <Route path="/" element={<Home />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/settings" element={<Settings />}/>
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Suspense>
            </main>
    
            <footer className="footer">

                Learning React one phase at a time.
            </footer>
          </div>
        </BrowserRouter>
    )
}

export default Main