import "./projectIos.css"
import phone from "../../img/phone.png"

const ProjectIos = ({img, link}) => {
  return (
  <>
    <div className="phone-container">
     <img src={phone} className="phone-img" />
      <div className="rk2-cont">
        <a href={link}>
          <img src={img} className="rk2" alt=""/>
        </a>
      </div>
    </div>
  </>
  )
}

export default ProjectIos;
