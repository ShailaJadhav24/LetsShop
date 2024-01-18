function Login() {
  return (
    <div className="login">
      <div className="loginLeftPanel"></div>
      <div className="loginRightPanel">
        <div className="loginForm">
          <div className="loginContent">
            <h2>Log in to Exclusive</h2>
            <h5>Enter Your Details Below</h5>
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="loginText"
            />
            <input
              type="password"
              placeholder="Password"
              className="loginText"
            />
            <div className="container marginTop10px">
              <div style={{ width: "50%" }}>
                <button class="btn">Log in</button>
              </div>
              <div style={{ width: "50%", textAlign: "right" }}>
                <a
                  href="#forgotPassword"
                  style={{ color: "red", textDecoration: "none" }}
                >
                  Forgot password?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
