function Account() {
  return (
    <div
      className="containerAccount"
      style={{
        marginLeft: "150px",
        marginRight: "150px",
      }}
    >
      <div className="accountLeftPanel">
        <h4>Manage My Account</h4>
        <ul>
          <li style={{ color: "red" }} className="textDecor">
            My Profile
          </li>
          <li className="textDecor">Address Book</li>
          <li className="textDecor">My Payment Options</li>
        </ul>
        <h4 classname="accountPadding">My Orders</h4>
        <ul>
          <li className="textDecor">My Retuns</li>
          <li className="textDecor">My Cancellations</li>
        </ul>
        <h4 className="accountPadding">My WisList</h4>
      </div>
      <div className="accountRightPanel">
        <div className="form">
          <div class="form-group">
            <div class="input-label-section" style={{ width: "50%" }}>
              <label for="first name">First Name</label>
              <br></br>
              <input type="text" id="name" name="md" placeholder="Md" />
            </div>
            <div class="input-label-section" style={{ width: "50%" }}>
              <label for="last name">Last Name </label>
              <br></br>
              <input type="text" id="rimel" name="rimel" placeholder="Rimel" />
            </div>
          </div>
          <div class="form-group">
            <div class="input-label-section" style={{ width: "50%" }}>
              <label for="email">Email</label>
              <br></br>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="rimel11111@gmail.com"
              />
            </div>
            <div class="input-label-section" style={{ width: "50%" }}>
              <label for="address">Address</label>
              <br></br>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="kingston,5236,United State"
              />
            </div>
          </div>
          <div class="form-group">
            <div class="input-label-section" style={{ width: "100%" }}>
              <label for="password change">Password Change</label>
              <br></br>
              <input
                type="text"
                id="password change"
                name="Password Change"
                placeholder="Current Password"
              />
              <br></br>
              <input
                type="text"
                id="password change"
                name="Password Change"
                placeholder="New Password"
              />
              <br></br>
              <input
                type="text"
                id="password change"
                name="Password Change"
                placeholder="Confirm New Password"
              />
            </div>
          </div>
        </div>
        <div style={{textAlign:"right"}}>
          <button style={{ border: "none", color: "black", padding: "10px",marginRight:"10px" }}>
            Cancel
          </button>
          <button className="redButton" style={{borderRadius:"3px"}}>Save Changes</button>
        </div>
      </div>
    </div>
  );
}
export default Account;
