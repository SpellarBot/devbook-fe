import React, { Component } from "react";
// import index from "../index";
import axios from "axios";
import UserProfile from "./UserProfile";
class UserForm extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      email: "",
      firstName: "",
      lastName: "",
      profilePic: "",
      location: "",
      gitHubUrl: "",
      employer: "",
      specialty: "",
      projects: ""
      // comments: "",
      // post: "",
      //jobs: ""
    };
    this.change = this.change.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  change(e) {
    this.setState({ [e.target.name]: e.target.value }, () => {
      console.log(this.state);
    });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log("the button is working");
    axios
      .post("https://devbook-backend.herokuapp.com", this.state)
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
    console.log("Onsubmit Fired");
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>UserName:</label>
        <input
          name="userName"
          placeholder="userName"
          value={this.state.userName}
          onChange={e => this.change(e)}
        />

        <label>FirstName:</label>
        <input
          name="firstName"
          placeholder="firstName"
          value={this.state.firstName}
          onChange={e => this.change(e)}
        />
        <br />
        <label>LastName:</label>
        <input
          name="lastName"
          placeholder="lastName"
          value={this.state.lastName}
          onChange={e => this.change(e)}
        />
        <br />

        <label>email:</label>
        <input
          name="email"
          placeholder="email"
          value={this.state.email}
          onChange={e => this.change(e)}
        />
        <br />

        <label>Profile Picture:</label>
        <input
          name="profilePic"
          placeholder="profilePic"
          value={this.state.profilePic}
          onChange={e => this.change(e)}
        />
        <br />

        <label>Location:</label>
        <input
          name="location"
          placeholder="location"
          value={this.state.location}
          onChange={e => this.change(e)}
        />
        <br />

        <label>employer:</label>
        <input
          name="employer"
          placeholder="employer"
          value={this.state.employer}
          onChange={e => this.change(e)}
        />
        <br />

        <label>GithubURL:</label>
        <input
          name="gitHubUrl"
          placeholder="gitHubUrl"
          value={this.state.gitHubUrl}
          onChange={e => this.change(e)}
        />
        <br />

        <label>spacialty:</label>
        <input
          name="specialty"
          placeholder="specialty"
          value={this.state.specialty}
          onChange={e => this.change(e)}
        />
        <br />

        <label>projects:</label>
        <input
          name="projects"
          placeholder="projects"
          value={this.state.projects}
          onChange={e => this.change(e)}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default UserForm;
