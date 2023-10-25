import "./project.css"
import phone from "../../img/phone.png"
import rk2 from "../../img/rk2.png"

const Project = ({img, link}) => {
  return (
  <>
    <div className="p">
        <div className="p-browser">
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
        </div>
        <a href={link} target="_blank" rel="noreferrer">
         <div className="os-cont">   
           <img src={img} alt="" className="os-img" />
         </div>
        </a>
    </div>
    <div className="phone-container">
     <img src={phone} className="phone-img" />
      <div className="rk2-cont">
       <img src={rk2} className="rk2" alt=""/>
      </div>
    </div>
  </>
  )
}

export default Project;
