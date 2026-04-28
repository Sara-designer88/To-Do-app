import { Link } from "react-router-dom";



function Navbar() {
  return (
    <div id="NavbarStyle">
      <Link to="/"> <img src="./src/assets/logo.png" alt="my logo" width="100px" /></Link>
      <nav  id="NavbarStyle" >
        <Link to="/user-list" >To Do List 📝 </Link>
      </nav>
    </div>
  );
}

export default Navbar;
