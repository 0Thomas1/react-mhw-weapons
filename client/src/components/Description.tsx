import "../App.css"
const Description = () => {
  return (
    <div className=" text-center bg-gray">
      <div className="container py-4">
        <h2>How To Use?</h2>
        <p>
          This is a simple web application that displays a list of weapons from the game Monster Hunter World.
          To get started, click on the "Weapons" link in the navigation bar. This will take you to a page that displays a list of weapons.
          You can click on each weapon to view more details about it.
          You can also use the search bar to filter the list of weapons by name.
          To reset the search, simply clear the search bar.
          This web application was built using React and TypeScript.
        </p>
        <a className="btn btn-primary" href="weapons">Click here to Start!</a>
      </div>
    </div>
  )
}

export default Description