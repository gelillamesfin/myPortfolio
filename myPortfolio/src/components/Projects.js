import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/appt.png";
import projImg2 from "../assets/img/music.png";
import projImg3 from "../assets/img/library.png";
// import projImg4 from "../assets/img/a-z.png"
import projImg5 from "../assets/img/ecommerce.png";
import projImg6 from "../assets/img/ezbz.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import medsVideo from "../assets/img/medsVideo.mp4"
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "HealthCare Appointment Manager",
      description: "FullStack | MERN",
      imgUrl: projImg1,
    },
    {
      title: "Music Player",
      description: "Frontend | React",
      imgUrl: projImg2,
    },
    {
      title: "Library Management App",
      description: "React-Native| Frontend",
      imgUrl: projImg3,
    },
    {
      title: "Macy's Clone",
      description: "HTML | CSS | LocalStorage | Frontend",
      imgUrl: projImg5,
    },
    {
      title: "EZBZ LLC",
      description: "Frelance | MERN",
      imgUrl: projImg6,
    },
    {
      title: "A-Z Medication",
      description: "Angular | FrontEnd",
      videoURL:medsVideo,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Here are some selected projects. For additional projects and
                    daily coding updates, please visit my GitHub profile.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          I am currently working as a freelance developer on a
                          website for EZBZ LLC, where I am honing my skills in
                          web development. Simultaneously, I am expanding my
                          knowledge of AWS to enhance my expertise in cloud
                          technologies. I am also actively seeking a junior
                          developer position to apply my skills and contribute
                          to a dynamic team.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          “Coding is not just about writing lines of code; it’s
                          about perseverance, resilience, and the constant
                          pursuit of knowledge. The only way to fail is to give
                          up; every challenge is an opportunity to learn and
                          grow.” -unknown tech-Savvy
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=''></img>
    </section>
  );
};
