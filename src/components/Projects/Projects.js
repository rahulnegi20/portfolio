import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tdict from "../../Assets/Projects/tdict.png"
import flashtype from "../../Assets/Projects/flashtype.png"
import karyniti from "../../Assets/Projects/karyniti.png"
import tenderapp from "../../Assets/Projects/tenderapp.png"
import bookadvisor from "../../Assets/Projects/bookadvisor.png"
import nameit from "../../Assets/Projects/nameit.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={tenderapp}
            isBlog={false}
            title="Tende App"
            description="Secure Tender Filling app which allows user to write and read drafts (PDF) of their Proposals(tender). Built using React.js and Django REST Framework."
            ghLink="https://github.com/"
            demoLink="https://tenderui.vercel.app/login"
            builtWith={["React.js", "Postgres", "GCP", "Django Rest Framework"]}
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={flashtype}
            isBlog={false}
            title="Flash Type"
            description="Can you type fast, like Flash!? 1 minute challenge to calculate your accuracy and typing speed (word per minute). "
            ghLink="https://github.com/rahulnegi20/flash-type"
            demoLink="https://rahulnegi20.github.io/flash-type/"
            builtWith={["React.js"]}
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={karyniti}
            isBlog={false}
            title="Karyniti"
            description="Django Admn based web app to assign a task to team members, change priority of tasks and can monitor the progress of the task."
            ghLink="https://github.com/rahulnegi20/Karyniti/tree/master"
            builtWith={["HTML5","Bootstrap", "Postgres", "Django"]}
          // demoLink="https://editor.soumya-jit.tech/"              
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={nameit}
            isBlog={false}
            title="Name it"
            description="Found new domain from your website. Name it provides you available domains form Namecheap's API. You can select the name you like,, it will redirect you to namecheap's website. "
            ghLink="https://github.com/rahulnegi20/Name-it"
            builtWith={["React.js"]}
          // demoLink="https://plant49-ai.herokuapp.com/"
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={tdict}
            isBlog={false}
            title="T-Dict"
            description="Too lazy, to go (google/bing) meaning of the word? Here comes your savior T-Dict it fetches the meaning for you direct from your terminal!"
            ghLink="https://github.com/rahulnegi20/tdict"
            builtWith={["Python", "shell"]}

          // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={bookadvisor}
            isBlog={false}
            title="Online Advisor Booking API"
            description="Online Bood your advisor with this REST API, You can list the available advisors and book/schedule them on spcecific data and time. Demo available on Github 👇."
            ghLink="https://github.com/rahulnegi20/Book-Advisor"
            builtWith={["Django Rest Framework", "Postgres"]}
          // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
          />
        </Col>
      </Row>
    </Container>
    </Container >
  );
}

export default Projects;
