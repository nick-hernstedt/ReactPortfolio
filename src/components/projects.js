import React, { Component } from "react";
import {
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardText,
} from "react-mdl";

class Projects extends Component {
  render() {
    return (
      <div>
        <div className="projects-grid">
          <Card shadow={0} style={{ width: "512px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover",
              }}
            >
              Welcome
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={0} style={{ width: "512px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover",
              }}
            >
              Welcome
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>

        <div className="projects-grid">
          <Card shadow={0} style={{ width: "512px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover",
              }}
            >
              Welcome
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={0} style={{ width: "512px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover",
              }}
            >
              Welcome
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      </div>
    );
  }
}

export default Projects;
