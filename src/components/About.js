import React, { Component } from "react";
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="https://avatars.githubusercontent.com/u/52958443?s=400&u=c02ad9d93ebd44210f7b47e36766a372d0941d55&v=4" height="200" width="400" alt="" />
          </div>

          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{resumeData.aboutme}</p>

            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{resumeData.name}</span>
                  <br />
                  <span>{resumeData.email}</span>
                  <br />
                  <span>{resumeData.Tell}</span>
                  <br />
                  <span>{resumeData.address}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>;
  }
}
