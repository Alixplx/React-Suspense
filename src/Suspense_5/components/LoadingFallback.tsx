
interface LoadingFallbackProps {

    message: string;
}
  
function LoadingFallback({message}: LoadingFallbackProps) {

    return (

        <div className="loading-card" role="status">

            <span className="spinner" />
            <p>{message}</p>
        </div>
    );
}
  
export default LoadingFallback