import logo from "../images/logo.png";
import "../components/NavbarStyles.css";
import { Component } from "react";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <nav>
          <a href="index.html">
            <img src={logo} alt="logo" width="80" height="80" />
          </a>

          <div>
            <ul
              id="navbar"
              className={this.state.clicked ? "#navbar active" : "#navbar"}
            >
              <li>
                <a className="active" href="index.html">
                  Sākums
                </a>
              </li>
              <li>
                <a href="index.html">Pakalpojumi</a>
              </li>
              <li>
                <a href="index.html">Noteikumi</a>
              </li>
              <li>
                <a href="index.html">Kontakti</a>
              </li>
              <li>
                <a href="index.html">Galerija</a>
              </li>
              <li>
                <a href="index.html">Autorizēties</a>
              </li>
              <li>
                <a href="index.html">Reģistrēties</a>
              </li>
            </ul>
          </div>
          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </nav>
      </>
    );
  }
}
export default Navbar;
