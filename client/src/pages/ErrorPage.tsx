interface ErrorProps {
  errorMessage: string;
}
const ErrorPage = ({errorMessage}:ErrorProps) => {
  return (
    <div>
      <h1 className="display-1">Opps, something happended</h1>
      <p>{errorMessage}</p>
    </div>
  )
}

export default ErrorPage