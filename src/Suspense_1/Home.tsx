import "./style.css"
import { lazy, Suspense, useState } from "react";


const UserProfile = lazy(() => new Promise<typeof import("./components/UserProfile")>(

        (resolve) => {

            window.setTimeout(() => { resolve(import("./components/UserProfile"))}, 1500)
        }
    )
)


function Home() {

    const [showProfile, setShowProfile] = useState(false);


    return (

        <main className="app">

            <h1>React Suspense Demo</h1>
            <p className="description">Click the button to load the user profile.</p>

            <button onClick={() => setShowProfile((previous) => !previous)}>{showProfile ? "Hide Profile" : "Show Profile"}</button>

            {showProfile && (

                <Suspense fallback={

                    <div className="loading-card" role="status">

                        <span className="spinner" />
                        <p>Loading user profile...</p>
                    </div>
                }>
                    <UserProfile />
                </Suspense>
            )}
        </main>
    )
}

export default Home