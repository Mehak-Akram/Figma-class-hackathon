import Image from "next/image";
import one from "../../../image/one.png";
import two from "../../../image/two.png";

let Heading = () => {
  return (
    <div>
      <section className="focussection">
        <div className="third-sec">
          <h1>Main Focus/Mission Statement</h1>
          <div className="right">
            <div className="main">
              <div className="num">
                <Image src={one} alt="1"></Image>
              </div>
              <div className="parah">
                lorem ipsum dolor sit amet,
                <br />
                consectetur adipsicing elit. <br /> sed efficitur, lectus et{" "}
                <br />
                facilis placerat
              </div>
            </div>
            <div className="left">
              <div className="num">
                <Image src={two} alt="2"></Image>
              </div>
              <div className="parah">
                Lorem, ipsum dolor sit amet consectetur adipisicing
                <br />
                Voluptate non eos accusamus dolores! Doloribus rem e<br /> re
                iure. Officiis laborum consectetur nemo exercitatione <br />m
                ipsam sed et. laborum consectetur nemo exercitatione
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Heading;
