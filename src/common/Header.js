const Header = (props) => {
  return (
    <div className="header">
      <div style={{ width: "30%", textAlign: "center" }}>
        <h3>{props.headerName} </h3>
      </div>
      <div className="shop-menu" style={{ width: "40%" }}>
        <a href="/">Home</a>
        <a href="/contact">Contact</a>
        <a href="/about">About</a>
        <a href="/signup">Signup</a>
      </div>
      <div style={{ width: "30%" }}>
        <input
          type="search"
          style={{
            border: "none",
            backgroundColor: "lightgray",
            padding: "10px",
            width: "50%",
          }}
          placeholder={props.message}
        />
      </div>
    </div>
  );
};

export default Header;
