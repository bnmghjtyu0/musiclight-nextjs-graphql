import AppLink from "./AppLink";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <AppLink className="nav-link" href="/">
        音樂時光
      </AppLink>
    </nav>
  );
};

export default Navbar;
