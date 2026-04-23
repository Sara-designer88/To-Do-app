import { Link } from "react-router-dom";

const NavbarStyle = {
  display: "flex",
  flexDirection: "coloum",
  justifyContent: "space-evenly",
  
};

function Navbar() {
  return (
    <div style={NavbarStyle}>
      <img src="./src/assets/logo.png" alt="my logo" width="100px" />
      <nav>
        <Link to="/">Home</Link>
        <br />
        <Link to="/about">About</Link>
        <br />
        <Link to="/user-list">To Do List</Link>
      </nav>
    </div>
  );
}

export default Navbar;
