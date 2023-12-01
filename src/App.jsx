import logo from "./planet-logo.svg";
import search from "./search-logo.svg";
import shop from "./shop-logo.svg";
import hero from "./hero-img.png";
import user from "./card1.png";
import reviews from "./card2.png";
import item from "./card3.png";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <div className="navbar-links">
            <a href="">About Us</a>
            <a href="">Service</a>
            <a href="">Menu</a>
            <a href="">Contact</a>
          </div>
          <img src={logo} alt="logo" />
          <div className="right-side">
            <img src={search} alt="search" />
            <img src={shop} alt="shop" />
            <button>Register Now</button>
          </div>
        </nav>
        <div className="hero">
          <h1 className="hero-title">Organic Fruit & Vegetables</h1>
          <p className="hero-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley...
          </p>
          <a href="" className="hero-link">
            Order Now  <span className="btn">→</span>
          </a>
          <div className="hero-wrapper">
            <img width={860} height={460} src={hero} alt="" />
            <div className="card-wrapper">
              <div className="hero-card">
                <img src={user} alt="" />
                <span>30K</span>
                <span>User Order</span>
              </div>
              <div className="hero-card">
                <img src={reviews} alt="" />
                <span>20K</span>
                <span>Reviews(4.8)</span>
              </div>
              <div className="hero-card">
                <img src={item} alt="" />
                <span>300</span>
                <span>Items</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
