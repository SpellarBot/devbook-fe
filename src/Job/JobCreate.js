import React, { Component } from "react";
import axios from "axios";

class JobCreate extends Component {
  constructor() {
    super();
    this.state = {
      position: "",
      company: "",
      logoURL: "",
      content: "",
      location: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };

  onSubmit = e => {
    e.preventDefault();
    console.log("form has been submitted");
    // get our form data out of state
    // const { position, company, logoURL, content, location } = this.state;

    axios.post("https://devbook-backend.herokuapp.com/jobs", this.state).then(result => {
      console.log(result);
      // whatever the route to the jobs list is
      this.props.history.push("/jobs");
    });
  };

  render() {
    const { position, company, logoURL, content, location } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <label>Position:</label>
        <input
          type="text"
          name="position"
          value={position}
          onChange={this.onChange}
        />
        <br />
        <label>Company:</label>
        <input
          type="text"
          name="company"
          value={company}
          onChange={this.onChange}
        />
        <br />
        <label>Logo URL:</label>
        <input
          type="text"
          name="logoURL"
          value={logoURL}
          onChange={this.onChange}
        />
        <br />
        <label>Content:</label>
        <input
          type="text"
          name="content"
          value={content}
          onChange={this.onChange}
        />
        <br />
        <label>Location:</label>
        <input
          type="text"
          name="location"
          value={location}
          onChange={this.onChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default JobCreate;

// Jobs:
//     • content: String
//     • position: String
//     • company: String
//     • location: String
//     • companyLogo: String (Op)
//     • user:
//         § userId: [ Linked Model ]
//         § userName: [ Linked Model ]
//     • createdAt:
//         ▪ Type: Date
//         ▪ Default: Date.now()
