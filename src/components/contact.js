import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body resume-background">
        <Grid className="contact-grid" style={{ borderRadius: "15px" }}>
          <Cell col={6}>
            <h2>Nick Hernstedt</h2>
            <img
              src="myAvatar.png"
              alt="avatar"
              style={{ height: "250px", borderRadius: "15px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Experienced Web Developer with a background in Environmental
              Science, adept in all stages of advanced web development.
              Knowledgeable in user interface, testing, and debugging processes.
              Bringing forth expertise in design, installation, testing and
              maintenance of web systems. Equipped with a diverse and promising
              skill-set. Proficient in an assortment of technologies, including
              JavaScript, CSS Frameworks, Node, HTML and React. Able to
              effectively self-manage during independent projects, as well as
              collaborate in a team setting.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "30px",
                      fontFamily: "Anton",
                      color: "white",
                    }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (661)303-8765
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "30px",
                      fontFamily: "Anton",
                      color: "white",
                    }}
                  >
                    <i className="fa fa-envelope-square" aria-hidden="true" />
                    nick.hernstedt@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "30px",
                      fontFamily: "Anton",
                      color: "white",
                    }}
                  >
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                    <a
                      style={{ color: "white", textDecoration: "none" }}
                      href="https://www.linkedin.com/in/nick-hernstedt/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      linkedin.com/in/nick-hernstedt/
                    </a>
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
