import Image from "next/image";
import Rectangle8 from "../../../image/Rectangle 8.png";
import Rectangle10 from "../../../image/Rectangle 10.png";
import Rectangle9 from "../../../image/Rectangle 9.png";

let About = () => {
  return (
    <div>
      <section className="aboutsection">
        <div className="aboutcontainer">
          <div className="images1">
            <div className="Rec1">
              <Image src={Rectangle8} alt="rec"></Image>
            </div>
            <div className="Rec3">
              <Image src={Rectangle10} alt="rec"></Image>
            </div>
          </div>

          <div className="images">
            <div className="Rec2">
              <Image src={Rectangle9} alt="rec"></Image>
            </div>
            <div>
              <h1>About Me</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
                Voluptate non eos accusamus dolores! Doloribus rem e <br /> re
                iure. Officiis laborum consectetur nemo exercitatione <br /> m
                ipsam sed et. laborum consectetur nemo exercitatione <br /> re
                iure. Officiis laborum consectetur nemo exercitatione <br /> m
                ipsam sed et. laborum consectetur nemo exercitatione <br />
                re iure. Officiis laborum consectetur nemo exercitatione <br />{" "}
                m ipsam sed et. laborum consectetur nemo exercitatione <br /> re
                iure. Officiis laborum consectetur nemo exercitatione <br />{" "}
              </p>
              <button className="btn">READ MORE</button>
            </div>{" "}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
