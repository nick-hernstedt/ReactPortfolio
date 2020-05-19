import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="myAvatar.png"
                alt="avatar"
                style={{ height: "200px", borderRadius: "15px" }}
              />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Nick Hernstedt</h2>
            <h4 style={{ color: "grey" }}>Programmer</h4>
            <hr stlye={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic
            </p>
            <hr stlye={{ borderTop: "3px solid #833fb2", width: "50%" }} />

            <h5>Location</h5>
            <p>Sacramento, CA</p>

            <h5>Phone</h5>
            <p>(661)303-8765</p>

            <h5>Email</h5>
            <p>nick.hernstedt@gmail.com</p>

            <h5>GitHub</h5>
            <a
              style={{ color: "black", textDecoration: "none" }}
              href="https://github.com/nick-hernstedt"
              rel="noopener noreferrer"
              target="_blank"
            >
              github.com/nick-hernstedt
            </a>

            <h5>LinkedIn</h5>
            <a
              style={{ color: "black", textDecoration: "none" }}
              href="https://www.linkedin.com/in/nick-hernstedt/"
              rel="noopener noreferrer"
              target="_blank"
            >
              linkedin.com/in/nick-hernstedt/
            </a>

            <hr stlye={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            Right Side
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
