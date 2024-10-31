import About from "./components/about";
import Heading from "./components/other";
import Project from "./components/project";
import Image from "next/image";
import Frame9 from "../../image/Frame 9.png";
import Frame8 from "../../image/Frame 8.png";
import numbers from "../../image/numbers.png";
import Contact from "./components/contact";

export default function Home() {
  return (
    <div>
      <section className="first">
        <div className="leftSection">
          <div>
            <span className="gray">PROJECTS</span>
            <br />
            Lorum
          </div>
          <div className="boxes">
            <div className="box1">
              <Image src={Frame9} alt="arrow"></Image>
            </div>
            <div className="box2">
              {" "}
              <Image src={Frame8} alt="arrow"></Image>
            </div>
          </div>
          <div className="num1">
            <Image src={numbers} alt="num"></Image>
          </div>
        </div>
        <div className="rightSection">
          <br />
          <button className="btn3">VIEW PROJECT</button>
        </div>
      </section>

      <About />
      <Heading />
      <Project />
      <Contact />
    </div>
  );
}
