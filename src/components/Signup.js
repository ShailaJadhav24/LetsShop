function Signup() {
    return (
        <div className="signup">
            <div className="signupLeftPanel" >
            </div>
            <div className="signupRightPanel">
                <div className="signupForm">
                    <div className="signupContent">
                        <h2>Creat an Account</h2>
                        <h5>Enter Your Details Below</h5>
                        <input type="text" placeholder="Name" className="signupText" />
                        <input type="text" placeholder="Email or Phone Number" className="signupText" />
                        <input type="password" placeholder="Password" className="signupText" />
                        <div style={{ width: "100%", textAlign: "right" }}>
                            <button class="button" style={{ width: "100%", margin:"10px 0px" }}>Create Account</button>
                            <button class="btnBackgroundNone" style={{ width: "100%", margin:"10px 0px" }}>Sign up with Google</button>
                        </div>
                        <div className="container marginTop10px">
                            <div style={{width:"50%", textAlign:"right"}}>
                                <a href="#Already have account" style={{ color: "black", textDecoration: "none" }}>Already have account?</a>

                            </div>
                            <div style={{width:"50%", textAlign:"left", marginLeft:"10px"}}>
                            <a href="/login" style={{ color: "black", textDecoration: "none" }}>Login</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Signup