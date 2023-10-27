import "./projectList.css";
import { projectIos } from "../../data";
import ProjectIos from "../projectIos/ProjectIos";
import { useRef } from "react";

const ProjectList = () => {
  const right = useRef()
  let firstIndex = 1

  const nextSlide = () => {
    if (right.current) {
      right.current.style.transform = `translateX(-${firstIndex * 500}px)`;
      firstIndex++;
    }
  }

  const firstSlide = () => {
    if (right.current) {
      right.current.style.transform = `translateX(0px)`
      firstIndex = 1
    }
  }

  const lastSlide = () => {
    if (right.current) {
      right.current.style.transform = `translateX(-1500px)`
      firstIndex = 4
    }
  }

  const prevSlide = () => {
    if (right.current) {
      right.current.style.transform = `translateX(-${(firstIndex - 2) * 500}px)`
      firstIndex--
    }
  }

  const previousClick = () => {
    firstIndex > 1 ? prevSlide() : lastSlide()
  }

  const continueClick = () => {
    firstIndex < 4 ? nextSlide() : firstSlide()
  }

  const dotSlideFirst = () => {
    if (right.current) {
      right.current.style.transform = `translateX(0px)`
    }
  }
 
  const dotSlideSecond = () => {
    if (right.current) {
      right.current.style.transform = `translateX(-500px)`
    }
  }

  const dotSlideThird = () => {
    if (right.current) {
      right.current.style.transform = `translateX(-1000px)`
    }
  }

  const dotSlideFourth = () => {
    if (right.current) {
      right.current.style.transform = `translateX(-1500px)`
    }
  }


  return (
    <div className="ios-1" id="adada">
      <div className="ios-2">
        <div className="ios-textBox">
          <h1 className="ios-text">What I Created?</h1>
          <p className="ios-desc">
          This is all my freelance project that i created for my client's, based on their needs, and also for each project we do consult about the project first :)
          </p>
          <div className="ios-list">
            <ul>
              <li className="list-business">Rangkopi E-Catalog</li>
              <li className="list-business">React Commerce</li>
              <li className="list-business">Travel App</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="ios-3">
        <div className="arrowLeft" onClick={() => previousClick()}>L</div>
        <div className="ios-6">
          <h1 className="ios-scrollMe">Scroll</h1>
          <div className="slideForPhone">
            <div className="ios-7" ref={right}>
              {projectIos.map((item) => (
                <ProjectIos key={item.id} img={item.img} link={item.link} />
                ))}
            </div>
            <div className="dotContainer">
              <div className="dotFirst1" onClick={() => dotSlideFirst()}></div>
              <div className="dotFirst2" onClick={() => dotSlideSecond()}></div>
              <div className="dotFirst3" onClick={() => dotSlideThird()}></div>
              <div className="dotFirst4" onClick={() => dotSlideFourth()}></div>
            </div>
          </div>
        </div>
        <div className="arrowRight" onClick={() => continueClick()}>R</div>
      </div>
    </div>
  );
};

export default ProjectList;

