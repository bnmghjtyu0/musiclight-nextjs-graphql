import AppLink from "./AppLink";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      Navbar
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <AppLink className="nav-link" href="/">
              Home <span className="sr-only">(current)</span>
            </AppLink>
          </li>
          <li className="nav-item">
            <AppLink className="nav-link" href="/portfolio">
              portfolio
            </AppLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
