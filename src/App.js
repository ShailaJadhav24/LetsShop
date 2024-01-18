import "./App.css";
import "./style.css";

import one from "./assets/images/products/one.png";
import two from "./assets/images/products/two.png";
import three from "./assets/images/products/three.png";
import four from "./assets/images/products/four.png";
import five from "./assets/images/products/five.png";
import six from "./assets/images/products/six.png";
import seven from "./assets/images/products/seven.png";
import eight from "./assets/images/products/eight.png";
import iphonebanner from "./assets/images/products/iphonebanner.png";
import homeImage from "./assets/images/products/homeimage1.png";
import home1 from "./assets/images/products/home1.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faComputer,
  faClock,
  faCamera,
  faHeadphones,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="containerHome">
      <div className="AppHeader">
        <div className="container">
          <div className="homeLeftPanel">
            <ul style={{ listStyle: "none" }}>
              <li className="liMargin">Women's Fashion</li>
              <li className="liMargin">Men's Fashion</li>
              <li className="liMargin">Electronics</li>
              <li className="liMargin">Home and Lifestyle</li>
              <li className="liMargin">Medicine</li>
              <li className="liMargin">Sports and Outdoor</li>
              <li className="liMargin">Baby's and Toys</li>
              <li className="liMargin">Groceries and Pets</li>
              <li className="liMargin">Health and Beauty</li>
            </ul>
          </div>
          <div className="homeRightPanel">
            <img src={iphonebanner} alt="Denim Jeans" />
          </div>
        </div>
      </div>
      <div className="AppHeader">
        <div className="redSection">
          <h5>Today's</h5>
        </div>
        <div>
          <h2>Flash Sales</h2>
        </div>
        <div className="flashSalesProducts">
          <div className="card">
            <div className="imgWrapper">
              <img src={one} alt="Denim Jeans" />
            </div>
            <div className="productDetailsWrapper">
              <h5>HAVIT HV-G92 Gamepad</h5>
              <p className="price">
                $19.99 <span className="textDecorLine">$30.99</span>
              </p>
              <p>Some text about the jeans..</p>
            </div>
            <button>Add to Cart</button>
          </div>
          <div className="card">
            <div className="imgWrapper">
              <img src={two} alt="Denim Jeans" />
            </div>
            <div className="productDetailsWrapper">
              <h5>HAVIT HV-G92 Gamepad</h5>
              <p className="price">
                $19.99 <span className="textDecorLine">$30.99</span>
              </p>
              <p>Some text about the jeans..</p>
            </div>
            <button>Add to Cart</button>
          </div>
          <div className="card">
            <div className="imgWrapper">
              <img src={three} alt="Denim Jeans" />
            </div>
            <div className="productDetailsWrapper">
              <h5>HAVIT HV-G92 Gamepad</h5>
              <p className="price">
                $19.99 <span className="textDecorLine">$30.99</span>
              </p>
              <p>Some text about the jeans..</p>
            </div>
            <button>Add to Cart</button>
          </div>
          <div className="card">
            <div className="imgWrapper">
              <img src={four} alt="Denim Jeans" />
            </div>
            <div className="productDetailsWrapper">
              <h5>HAVIT HV-G92 Gamepad</h5>
              <p className="price">
                $19.99 <span className="textDecorLine">$30.99</span>
              </p>
              <p>Some text about the jeans..</p>
            </div>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="AppHeader">
        <div className="redSection">
          <h5>Categories</h5>
        </div>
        <div>
          <h2>Browse By Category</h2>
        </div>
        <div className="categoryContainer">
          <div className="box">
            <div className="boxContainer">
              <FontAwesomeIcon
                icon={faPhone}
                style={{
                  color: "Black",
                  marginRight: "10px",
                  fontSize: "25px",
                }}
              />
              Phones
            </div>
          </div>
          <div className="box">
            <div className="boxContainer">
              <FontAwesomeIcon
                icon={faComputer}
                style={{
                  color: "Black",
                  marginRight: "10px",
                  fontSize: "25px",
                }}
              />
              Computers
            </div>
          </div>
          <div className="box">
            <div className="boxContainer">
              <FontAwesomeIcon
                icon={faClock}
                style={{ color: "Black", marginRight: "10px", height: "50px" }}
              />
              SmartWatch
            </div>
          </div>
          <div className="box">
            <div className="boxContainer">
              <FontAwesomeIcon
                icon={faCamera}
                style={{ color: "Black", marginRight: "10px", height: "50px" }}
              />
              Camera
            </div>
          </div>
          <div className="box">
            <div className="boxContainer">
              <FontAwesomeIcon
                icon={faHeadphones}
                style={{ color: "Black", marginRight: "10px", height: "50px" }}
              />
              HeadPhones
            </div>
          </div>
          <div className="box">
            <div className="boxContainer">
              <FontAwesomeIcon
                icon={faGamepad}
                style={{ color: "Black", marginRight: "10px", height: "50px" }}
              />
              Gaming
            </div>
          </div>
        </div>
      </div>
      <div className="AppHeader">
        <div className="redSection">
          <h5>This Month</h5>
        </div>
        <div>
          <h2>Best Selling Products</h2>
        </div>
        <div className="flashSalesProducts">
          <div className="card">
            <div className="imgWrapper">
              <img src={five} alt="Denim Jeans" />
            </div>
            <div className="productDetailsWrapper">
              <h5>The north coat</h5>
              <p className="price">
                $260 <span className="textDecorLine">$360</span>
              </p>
            </div>
            <button>Add to Cart</button>
          </div>
          <div className="card">
            <div className="imgWrapper">
              <img src={six} alt="Denim Jeans" />
            </div>
            <div className="productDetailsWrapper">
              <h5> Gucci duffle bag</h5>
              <p className="price">
                $960 <span className="textDecorLine">$1160</span>
              </p>
            </div>
            <button>Add to Cart</button>
          </div>
          <div className="card">
            <div className="imgWrapper">
              <img src={seven} alt="Denim Jeans" />
            </div>
            <div className="productDetailsWrapper">
              <h5> RGB liquid CPU cooler </h5>
              <p className="price">
                $160 <span className="textDecorLine"> $170</span>
              </p>
            </div>
            <button>Add to Cart</button>
          </div>
          <div className="card">
            <div className="imgWrapper">
              <img src={eight} alt="Denim Jeans" />
            </div>
            <div className="productDetailsWrapper">
              <h5> Small bookself</h5>
              <p className="price">
                $360 <span className="textDecorLine"></span>
              </p>
            </div>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="AppHeader">
        <img src={homeImage} alt="Denim Jeans" />
      </div>
      <div className="AppHeader">
        <div className="redSection">
          <h5>Our Products</h5>
        </div>
        <div>
          <h2>Explore Our Products</h2>
        </div>
        <div className="flashSalesProducts">
          <div className="card">
            <div className="imgWrapper">
              <img src={one} alt="Denim Jeans" />
            </div>
            <div className="productDetailsWrapper">
              <h5>HAVIT HV-G92 Gamepad</h5>
              <p className="price">
                $19.99 <span className="textDecorLine">$30.99</span>
              </p>
              <p>Some text about the jeans..</p>
            </div>
            <button>Add to Cart</button>
          </div>
          <div className="card">
            <div className="imgWrapper">
              <img src={two} alt="Denim Jeans" />
            </div>
            <div className="productDetailsWrapper">
              <h5>HAVIT HV-G92 Gamepad</h5>
              <p className="price">
                $19.99 <span className="textDecorLine">$30.99</span>
              </p>
              <p>Some text about the jeans..</p>
            </div>
            <button>Add to Cart</button>
          </div>
          <div className="card">
            <div className="imgWrapper">
              <img src={three} alt="Denim Jeans" />
            </div>
            <div className="productDetailsWrapper">
              <h5>HAVIT HV-G92 Gamepad</h5>
              <p className="price">
                $19.99 <span className="textDecorLine">$30.99</span>
              </p>
              <p>Some text about the jeans..</p>
            </div>
            <button>Add to Cart</button>
          </div>
          <div className="card">
            <div className="imgWrapper">
              <img src={four} alt="Denim Jeans" />
            </div>
            <div className="productDetailsWrapper">
              <h5>HAVIT HV-G92 Gamepad</h5>
              <p className="price">
                $19.99 <span className="textDecorLine">$30.99</span>
              </p>
              <p>Some text about the jeans..</p>
            </div>
            <button>Add to Cart</button>
          </div>
        </div>
        <div className="flashSalesProducts">
          <div className="card">
            <div className="imgWrapper">
              <img src={one} alt="Denim Jeans" />
            </div>
            <div className="productDetailsWrapper">
              <h5>HAVIT HV-G92 Gamepad</h5>
              <p className="price">
                $19.99 <span className="textDecorLine">$30.99</span>
              </p>
              <p>Some text about the jeans..</p>
            </div>
            <button>Add to Cart</button>
          </div>
          <div className="card">
            <div className="imgWrapper">
              <img src={two} alt="Denim Jeans" />
            </div>
            <div className="productDetailsWrapper">
              <h5>HAVIT HV-G92 Gamepad</h5>
              <p className="price">
                $19.99 <span className="textDecorLine">$30.99</span>
              </p>
              <p>Some text about the jeans..</p>
            </div>
            <button>Add to Cart</button>
          </div>
          <div className="card">
            <div className="imgWrapper">
              <img src={three} alt="Denim Jeans" />
            </div>
            <div className="productDetailsWrapper">
              <h5>HAVIT HV-G92 Gamepad</h5>
              <p className="price">
                $19.99 <span className="textDecorLine">$30.99</span>
              </p>
              <p>Some text about the jeans..</p>
            </div>
            <button>Add to Cart</button>
          </div>
          <div className="card">
            <div className="imgWrapper">
              <img src={four} alt="Denim Jeans" />
            </div>
            <div className="productDetailsWrapper">
              <h5>HAVIT HV-G92 Gamepad</h5>
              <p className="price">
                $19.99 <span className="textDecorLine">$30.99</span>
              </p>
              <p>Some text about the jeans..</p>
            </div>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="AppHeader">
        <div className="redSection">
          <h5>Featured</h5>
        </div>
        <div>
          <h2>New Arrival</h2>
        </div>
        <div className="container">
          <div>
          <img src={home1} alt="Denim Jeans" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
