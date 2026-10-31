import "./style.css"
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import UsersList from "./components/UsersList";


function LoadingFallback() {

    return (

        <div className="loading" role="status">

            <span className="spinner" />
            <p>Loading users...</p>
        </div>
    )
}

function ErrorFallback({ error, resetErrorBoundary}: {error: Error; resetErrorBoundary: () => void}) {

    return (

        <div className="error-card" role="alert">

            <h2>Something went wrong</h2>
            <p>{error.message}</p>
            <button onClick={resetErrorBoundary}>Try Again</button>
        </div>
    )
}


function Home() {

    return (

        <div className="app">

            <header className="header">

                <h1>User Directory</h1>
                <p>React Suspense + Data Fetching</p>
            </header>
    
            <main className="content">

                <h2>Our Users</h2>
        
                <ErrorBoundary fallbackRender={(props) => ( <ErrorFallback {...props} />)}>

                    <Suspense fallback={<LoadingFallback />}>
                        <UsersList />
                    </Suspense>
                </ErrorBoundary>
            </main>
        </div>
    )
}

export default Home