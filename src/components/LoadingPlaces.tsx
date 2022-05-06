
export const LoadingPlaces = () => {
  return (
    <div className="alert alert-light mt-2 text-center">
        <h6>Searching...</h6>
        <p>Please wait</p>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
  )
}
