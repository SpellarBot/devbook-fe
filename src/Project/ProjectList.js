import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// What shouls i import to get the state working
// import Job from "../Job/JobsList";

class ProjectList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    axios.get("https://devbook-backend.herokuapp.com/projects").then(res => {
      this.setState({ projects: res.data });
      console.log(this.state.projects);
    });
  }

  render() {
    if (this.state.projects) {
      let list = this.state.projects.map(cv => {
        return (
          <div key={cv._id}>
            <Link to={"/projects/" + cv._id}>
              <p>{cv.title}</p>
            </Link>
            <p>{cv.linkToRepo}</p>
            <p>{cv.description}</p>
            <p>{cv.Thumbnail}</p>
            
          </div>
        );
      });
      return <div>{list}</div>;
    }
  }
}

export default ProjectList;

// Projects:
//     • linkToRepo: String
//     • title: String
//     • description: String
//     • Thumbnail: String
