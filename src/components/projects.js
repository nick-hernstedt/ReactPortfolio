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
      <div className="resume-background">
        <div className="projects-grid" style={{ paddingTop: "100px" }}>
          <Card
            shadow={0}
            style={{ width: "512px", margin: "auto", borderRadius: "10px" }}
          >
            <CardTitle
              style={{
                color: "#fff",
                height: "200px",
                background: "url(mealmate.png) center / cover",
              }}
            >
              Meal Mate
            </CardTitle>
            <CardText style={{ textAlign: "center" }}>
              <span style={{ fontWeight: "bold" }}>
                An app that helps you decide where to eat.
              </span>
              <br />
              <span style={{ fontWeight: "bold" }}> Technologies Used </span>
              <br />
              HTML5 | CSS3 | Bulma | Node.js | Javascript | jQuery | Sequelize |
              Express | Yelp Fusion API
            </CardText>
            <CardActions
              border
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Button
                colored
                href="https://github.com/nick-hernstedt/meal-mate"
                target="_blank"
              >
                GitHub
              </Button>
              <Button
                colored
                href="https://meal--mate.herokuapp.com/"
                target="_blank"
              >
                Live Demo
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card
            shadow={0}
            style={{ width: "512px", margin: "auto", borderRadius: "10px" }}
          >
            <CardTitle
              style={{
                color: "#fff",
                height: "200px",
                background: "url(upAbove.png) center / cover",
              }}
            >
              Up Above
            </CardTitle>
            <CardText style={{ textAlign: "center" }}>
              <span style={{ fontWeight: "bold" }}>
                {" "}
                An app that gives a glimpse into our solar system
              </span>
              <br />
              <span style={{ fontWeight: "bold" }}> Technologies Used</span>
              <br />
              HTML5 | CSS3 | Materialize | Javascript | jQuery | API | Express
            </CardText>
            <CardActions
              border
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Button
                colored
                href="https://github.com/nick-hernstedt/Up-Above"
                target="_blank"
              >
                GitHub
              </Button>
              <Button
                colored
                href="https://nick-hernstedt.github.io/Up-Above/"
                target="_blank"
              >
                LiveDemo
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>

        <div className="projects-grid">
          <Card
            shadow={0}
            style={{ width: "512px", margin: "auto", borderRadius: "10px" }}
          >
            <CardTitle
              style={{
                color: "#fff",
                height: "200px",
                background: "url(weather.png) center / cover",
              }}
            >
              Weather
            </CardTitle>
            <CardText style={{ textAlign: "center" }}>
              <span style={{ fontWeight: "bold" }}>
                An app that shows your the upcoming weather for an area
              </span>
              <br />
              <span style={{ fontWeight: "bold" }}> Technologies Used</span>
              <br />
              HTML5 | CSS3 | BootStrap 4 | Javascript | jQuery
            </CardText>
            <CardActions
              border
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Button
                colored
                href="https://github.com/nick-hernstedt/WeatherApp "
                target="_blank"
              >
                GitHub
              </Button>
              <Button
                colored
                href="https://nick-hernstedt.github.io/WeatherApp/"
                target="_blank"
              >
                Live Demo
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card
            shadow={0}
            style={{ width: "512px", margin: "auto", borderRadius: "10px" }}
          >
            <CardTitle
              style={{
                color: "#fff",
                height: "200px",
                background: "url(bugout.png) center / cover",
              }}
            >
              Bug-Out
            </CardTitle>
            <CardText style={{ textAlign: "center", marginBottom: "2px" }}>
              <span style={{ fontWeight: "bold" }}>
                {" "}
                An app to help keep track of bugs you run into{" "}
              </span>
              <br />
              <span style={{ fontWeight: "bold" }}>Technologies Used</span>
              <br />
              HTML5 | CSS3 | React
            </CardText>
            <CardActions
              border
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Button
                colored
                href="https://github.com/nick-hernstedt/bug-out"
                target="_blank"
              >
                GitHub
              </Button>
              <Button
                colored
                href="https://get-the-bug-out.herokuapp.com/"
                target="_blank"
              >
                Live Demo
              </Button>
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
