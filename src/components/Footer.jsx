const footerStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  position: "fixed",
  heigth:"20px"
};

function Footer() {
  return (
    <div style={footerStyle}>
        <> @2026</>
       
      <a href="https://github.com/Sara-designer88/To-Do-app.git">GitHub</a>
  
    </div>
  );
}

export default Footer;
