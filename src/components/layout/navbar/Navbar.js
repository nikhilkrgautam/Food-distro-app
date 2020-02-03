import React from "react";
import { Link } from "react-router-dom"
import { withFirebaseHOC } from '../../../firebase'
import headerImg from "../../../assets/pic1.png"

class Navbar extends React.Component {

  handleSignOut = () => {
    this.props.firebase.signOut().then(() => {
      // console.log("User has logged out");
    }).catch(err => console.log(err))
  }

  render() {


      return (
          <div className="header">
              <img id="header-img" src={headerImg}/>
              <ul className="nav justify-content-center">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/">Donate</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/atm">F&B ATM</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="volunteer.html">Volunteer</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/leaflet">Hunger Spots</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Contact</Link>
                </li>
              </ul>
          </div>

      )
  }
}

export default withFirebaseHOC(Navbar)
