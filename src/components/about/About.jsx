import "./about.css";
import Masaki from "../../img/masaki.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Masaki} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I am 21 years old, i like programming, i was so dedicated on my work
          because programming is my hobby.
        </p>
        <p className="a-desc">
          I am a 7th semester student majoring in Information Systems with an
          interest in IT, have expertise as a JavaScript Developer, Frontend,
          Backend and also master React Js with experience making a full stack
          e-commerce project using React Nodejs
        </p>
        <div className="a-award">
          <div className="a-award-texts"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
