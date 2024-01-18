function Footer(props) {
  return (
    <div className="footer">
      <div style={{ width: "90%" }}>
        <div className="footer">
          <div style={{ width: "25%", padding: "20px" }}>
            <div>
              <h3>{props.footerName}</h3>
            </div>
            <div>
              <p>{props.input}</p>
            </div>
            <div>
              <p>Get 10% off your first Order</p>
            </div>
            <div>
              <input type="text" placeholder="Enter your email"></input>
            </div>
          </div>
          <div style={{ width: "20%", padding: "20px" }}>
            <h4>Support</h4>
            <p> 111 Bijoy Sarani Dhaka,</p>
            <p>DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+8888-89898-8080</p>
          </div>
          <div style={{ width: "12%", padding: "20px" }}>
            <h4>Account</h4>
            <a href="/account" className="normalAnchor">My Account</a>
            <p>Login/Register</p>
            <p>Cart</p>
            <p>Whislist</p>
            <p>Shop</p>
          </div>
          <div style={{ width: "18%", padding: "20px" }}>
            <h4>Quick Link</h4>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>FAQ</p>
            <a href="/contact" className="normalAnchor">Contact</a>
          </div>
          <div style={{ width: "25%", padding: "20px" }}>
            <h4>Download App</h4>
            <span style={{ fontSize: "12px" }}>
              Save $3 with App New User Only
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
