
interface ErrorFallbackProps {

    error: Error
}
  
function ErrorFallback({ error }: ErrorFallbackProps) {

    return (

        <div className="error-card" role="alert">

            <h3>Something went wrong</h3>
            <p>{error.message}</p>
        </div>
    );
}
  
export default ErrorFallback