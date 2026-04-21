const NavbarStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  
};

function Navbar() {
  return (
    <div style={NavbarStyle}>
      <img src="./src/assets/logo.png" alt="my logo" width="100px" />
     <h1> Hello to my first to do App</h1>   
    </div>
  );
}

export default Navbar;
