const Nav = () => {
  const pageComponents = import.meta.glob("../pages/*.tsx");
  return (
    <nav className="navbar navbar-expand-md bg-dark  w-100 p-2 sticky-top">
      <span className="navbar-brand">
        <span className="text-white display-4">MHW</span>
      </span>
      <div className="collapse navbar-collapse" id="navCollapse">
        <div className="navbar-nav">
          {Object.keys(pageComponents).map((page) => {
            if (page.split("/")[2].split(".")[0] !== "ErrorPage") {
              const pageName = page.split("/")[2].split(".")[0];
              return (
                <a
                  key={pageName}
                  className="nav-link text-white"
                  href={`/${pageName}`}
                >
                  {pageName[0].toUpperCase() + pageName.slice(1)}
                </a>
              );
            }
          })}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
