import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <div
      className="containerContact"
      style={{
        marginLeft: "150px",
        marginRight: "150px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="contactLeftPanel">
        <h5>
          <FontAwesomeIcon
            icon={faPhone}
            style={{ color: "red", marginRight: "10px" }}
          />
          Call To Us
        </h5>
        <p>We are available 24/7, 7 days a week.</p>
        <p>Phone:+8801611112222</p>
        <hr></hr>

        <h5>
          <FontAwesomeIcon
            icon={faEnvelope}
            style={{ color: "red", marginRight: "10px" }}
          />
          Write To Us
        </h5>
        <p>Fill out our from and we will contact you within 24 hours. </p>
        <span>Emails: customer@exclusive.com</span>
        <br></br>
        <span>Emails: support@exclusive.com</span>
      </div>
      <div className="contactRightPanel">
        <div className="container" style={{ justifyContent: "space-around"}}>
          <div className="width33 paddingmargin10">
            <input
              type="text"
              placeholder=" Your Name*"
              className="contactText"
            />
          </div>
          <div className="width33 paddingmargin10">
            <input
              type="text"
              placeholder="Your Email*"
              className="contactText"
            ></input>
          </div>
          <div className="width33 paddingmargin10">
            <input
              type="text"
              placeholder="Your Phone*"
              className="contactText"
            ></input>
          </div>
        </div>
        <div className="paddingmargin10" style={{ width: "100%" }}>
          <textarea
            className="contactTextArea"
            id="Your Massage"
            placeholder="Your Massage"
            rows="4"
            cols="78"
          ></textarea>
        </div>
        <div style={{ width: "100%", textAlign: "right" }}>
          <button className="redButton">Send Massage</button>
        </div>
      </div>
    </div>
  );
}
export default Contact;
