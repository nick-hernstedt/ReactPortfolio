import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src="myAvatar.png" alt="avatar" className="avatar-img" />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

              <hr />

              <p>
                HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express |
                MongoDB | mySQL
              </p>

              <div className="social-links">
                <a
                  href="https://github.com/nick-hernstedt"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/nick-hernstedt/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square"></i>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
