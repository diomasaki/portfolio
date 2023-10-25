import "./intro.css";
import Me from "../../img/me.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, I Am</h2>
          <h1 className="i-name">Dio Masaki</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Full Stack Web Developer</div>
              <div className="i-title-item">Backend Developer</div>
              <div className="i-title-item">UI Design</div>
            </div>
          </div>
          <p className="i-desc">
            I design and develop services for customers of all sizes,
            specializing in creating stylish modern websites, web services and
            online stores.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
