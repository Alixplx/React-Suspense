import { lazy, Suspense } from "react"
import { BrowserRouter, Link, Route, Routes} from "react-router"
import Home from "./pages/Home"
import LoadingFallback from "./components/LoadingFallback"
import "./style.css"



const Dashboard = lazy(() => import("./pages/Dashboard"))


function Main() {

    return (

        <BrowserRouter>

            <div className="app">

                <header className="header">

                    <h1>Advanced Suspense Dashboard</h1>
                    <p>React 19 + TypeScript</p>
                </header>

                <nav className="navigation">

                    <Link to="/">Home</Link>
                    <Link to="/dashboard">Dashboard</Link>
                </nav>

                <main className="content">

                    <Suspense fallback={<LoadingFallback message="Loading dashboard page..." />}>

                        <Routes>

                            <Route path="/" element={<Home />} />
                            <Route path="/dashboard" element={<Dashboard />}/>
                            <Route path="*" element={<h2>404 - Page Not Found</h2>}/>
                        </Routes>
                    </Suspense>
                </main>

                <footer className="footer">
                
                    Advanced React Suspense Practice
                </footer>
            </div>
        </BrowserRouter>
    )
}

export default Main