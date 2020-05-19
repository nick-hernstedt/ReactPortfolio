import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";

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
            <h2>Education</h2>
            <Education
              startYear={2011}
              endYear={2014}
              schoolName="California State University Sacramento"
              schoolDescription="Degree: B.S. Environmental Science"
            />
            <Education
              startYear={2019}
              endYear={2020}
              schoolName="University of California Davis"
              schoolDescription="Full Stack Web Developer Bootcamp"
              moreInfo="A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3,
              Javascript, JQuery, Bootstrap, Firebase, Node Js, MySQL, MongoDB, Express, Handelbars.js &
              ReactJS.
              "
            />

            <hr style={{ borderTop: "3px solid #26c2da" }} />

            <h2> Experience</h2>
            <Experience
              startYear={"Dec - 2017"}
              endYear={"Dec -2019"}
              jobName={"Arcadis: Environmental Scientist"}
              /*   jobDescription={"● Performed environmental site assessments and provided remediation
                recommendations
                ● Investigated accidents and analyzed root causes to develop corrective action
                plans
                ● Completed permit applications and maintained environmental permits
                ● Interpreted test data to determine whether contamination existed in accordance
                with environmental laws
                ● Gathered environmental data, including water, air and soil contaminations"} */
            />

            <Experience
              startYear={"Jan - 2016"}
              endYear={"Nov -2019"}
              jobName={"City of Roseville: Lab Technician"}
              /*  ● Ran EPA Compliance Testing as well as QA/QC
                ● Operated lab independently without supervision
                ● Analyzed data to create and organize graphs, charts, and documents for
                  publications and presentation
                ● Identified abnormal test results and referred them to the shift operators for further
                review
                  ● Required meticulous data entry and management in various spreadsheets and
                data entry programs
                ● Performed both routine and emergency maintenance on laboratory instruments
                and sample pumps */
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
