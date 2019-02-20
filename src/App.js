import React, { Component } from "react";
import "./App.css";
// import UserForm from "./user/userForm";
// import { Route, Link, Switch } from "react-router-dom";
import UserProfile from "./User/UserProfile";
// import JobCreate from "../src/Job/JobCreate";
// import JobShow from "../src/Job/JobShow";
// import JobsList from "../src/Job/JobsList";
// import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "Mifta",
      lastName: "Hamid",
      email: "wherer@gmail.com"
    };
  }

  //   componentDidMount() {
  //     axios
  //       .get(`http://www.ourapi.com/{this.props.jobid}.json`)
  //       .then(res => {
  //         this.setState({
  //           job: res.data
  //         });
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   }

  render() {
    return (
      <div className="App">
        <p>Hello</p>
        {/* <UserForm /> */}
        <UserProfile />
        {/* <Route
          path="/jobs"
          render={routerProps => (
            <JobsList jobs={this.state.jobs} {...routerProps} {...this.state} />
          )}
        /> */}
      </div>
    );
  }
}

export default App;
