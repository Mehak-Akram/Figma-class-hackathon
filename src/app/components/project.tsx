import Image from "next/image";
import image15 from "../../../image/image 15.png";
import image16 from "../../../image/image 16.png";
import image17 from "../../../image/image 17.png";
import image18 from "../../../image/image 18.png";

let Project = () => {
  return (
    <div>
      <section className="project-section">
        <div className="project-sec">
          <h1>Our Projects</h1>
          <div className="project-pic1">
            <div className="pic-sec1">
              <div className="projects-pic">
                <h1>
                  Sample <br /> Projects
                </h1>
                <br />
                <p> VIEW MORE </p>
              </div>
              <Image src={image15} alt="rec"></Image>
            </div>
            <div className="pic-sec2">
              <Image src={image16} alt="rec"></Image>
              <Image src={image17} alt="rec"></Image>
              <Image src={image18} alt="rec"></Image>
            </div>
            <button className="btn1">All PROJECTS</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
