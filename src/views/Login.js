import React from "react";
import { withFirebaseHOC } from '../firebase'
import  { Redirect } from 'react-router-dom'
import { Link } from "react-router-dom"


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      type: "",
      logggedIn: true
    }
  }

  componentDidMount() {

    // this.props.firebase.checkUserAuth(user => {
    //   // console.log(user);
    //   if(user) {
    //     console.log("User has logged in: ", user);
    //     this.setState({
    //       logggedIn: true
    //     })
    //   } else {
    //     console.log("User has logged out");
    //     this.setState({
    //       logggedIn: false
    //     })
    //   }
    // })
  }




  handleSubmit = (e) => {
      e.preventDefault()
      // window.location="/choose"
      // this.props.firebase.loginWithEmail(this.state.email, this.state.password)
      //   .then(cred => {
      //     // console.log(cred);
      //   })
      //   .catch(err => console.log(err))
      //
      // this.setState({
      //   email: "",
      //   password: ""
      // })

      window.location = "/choose"

  }

  onChange = (e) => {
      const { name, value } = e.target
      this.setState({
          [name]: value
      });
  }


  render() {


      return (
        <div>
          <h1 class="display-3">Login!</h1>
          <form id="login-form" onSubmit={this.handleSubmit}>
            
          <div className="form-group">
              <select value={this.state.username} className="form-control" name="type" onChange={this.onChange} required>
                <option value="">Choose the type</option>
                <option value="vol" >Volunteer</option>
                <option value="rest" >Restaurants</option>
                <option value="shel" >Shelter</option>
                <option value="don" >Donors</option>
              </select>
          </div>
              <div className="form-group">
                <input type="text" className="form-control" id="email" name="email" onChange={this.onChange} value={this.state.email} autoComplete="off" placeholder="Email" required />
              </div>
              <div className="form-group">
                <input type="password" className="form-control" id="password" name="password" onChange={this.onChange} value={this.state.password} autoComplete="off" placeholder="Password" required />
              </div>
              
              <button className="btn btn-primary" type="submit" >Log In</button>
              <Link to="/register"><button className="btn btn-warning signIn" >Sign Up</button></Link>
          </form>
        </div>
      )


  }
}

export default withFirebaseHOC(Login)
