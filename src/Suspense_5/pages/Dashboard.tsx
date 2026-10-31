import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import UserInfo from "../components/UserInfo";
import ProductStats from "../components/ProductStats";
import RecentOrders from "../components/RecentOrders";
import LoadingFallback from "../components/LoadingFallback";
import ErrorFallback from "../components/ErrorFallback";


function Dashboard() {

    return (

        <div className="dashboard">

            <h2>Dashboard Overview</h2>

            <div className="dashboard-grid">

                {/* User Information */}
                <ErrorBoundary fallbackRender={({ error}) => (<ErrorFallback error={error} />)}>

                    <Suspense fallback={ <LoadingFallback message="Loading user..." /> }>

                        <UserInfo />
                    </Suspense>
                </ErrorBoundary>

                {/* Statistics */}
                <ErrorBoundary fallbackRender={({ error}) => (<ErrorFallback error={error} />)}>

                    <Suspense fallback={ <LoadingFallback message="Loading statistics..." />}>
                        
                        <ProductStats />
                    </Suspense>
                </ErrorBoundary>

                {/* Recent Tasks */}
                <ErrorBoundary fallbackRender={({ error }) => (<ErrorFallback error={error} />)}>

                    <Suspense fallback={<LoadingFallback message="Loading tasks..." />}>
                    
                        <RecentOrders />
                    </Suspense>
                </ErrorBoundary>
            </div>
        </div>
    )
}

export default Dashboard