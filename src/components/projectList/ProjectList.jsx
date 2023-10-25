import "./projectList.css";
import Project from "../project/Project";
import { project } from "../../data";

const ProjectList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">What I Created?.</h1>
        <p className="pl-desc">
         This is all my freelance project that i created for my customer's, based on their needs, and also for each project we do consult about the project first :)
        </p>
      </div>
      <div className="pl-list-ios">
        {project.map((item) => (
          <Project key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
