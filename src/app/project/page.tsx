import Image from "next/image";
import image30 from "../../../image/image 30.png";
import image32 from "../../../image/image 32.png";
import image33 from "../../../image/image 33.png";
import Frame9 from "../../../image/Frame 9.png";
import Frame8 from "../../../image/Frame 8.png";
import numbers from "../../../image/numbers.png";

let Projects = () => {
  return (
    <div>
      <div className="gallery-heading">
        <span className="gray">Our</span>
        <br />
        Projects
      </div>
      <div className="main-div">
        <hr className="gallery-hr" />
        <div className="First-project">
          <Image src={image30} alt="project"></Image>
          <div className="project-parah">
            {" "}
            <h1>
              <span className="gray">Sample Project</span>
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and <br />
              typesetting industry. Lorem Ipsum has been the <br /> industry's
              standard dummy text ever since the 1500s,
              <br /> when an unknown printer took a galley of type and <br />
              scrambled it to make a type specimen book.
            </p>
            <button className="btn-project">VIEW MORE</button>
          </div>
        </div>

        <div className="First-project">
          <Image src={image32} alt="project"></Image>
          <div className="project-parah">
            {" "}
            <h1>
              <span className="gray">Sample Project 2</span>
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and <br />
              typesetting industry. Lorem Ipsum has been the <br /> industry's
              standard dummy text ever since the 1500s,
              <br /> when an unknown printer took a galley of type and <br />
              scrambled it to make a type specimen book.
            </p>
            <button className="btn-project">VIEW MORE</button>
          </div>
        </div>

        <div className="First-project">
          <Image src={image33} alt="project"></Image>
          <div className="project-parah">
            {" "}
            <h1>
              <span className="gray">Sample Project 3</span>
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and <br />
              typesetting industry. Lorem Ipsum has been the <br /> industry's
              standard dummy text ever since the 1500s,
              <br /> when an unknown printer took a galley of type and <br />
              scrambled it to make a type specimen book.
            </p>
            <button className="btn-project">VIEW MORE</button>
          </div>
        </div>
      </div>

      <div className="num-photos">
        <Image src={numbers} alt="num"></Image>
        <Image src={Frame9} alt="arrow"></Image>
        <Image src={Frame8} alt="arrow"></Image>
      </div>
    </div>
  );
};

export default Projects;
