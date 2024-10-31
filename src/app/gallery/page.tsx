import Image from "next/image";
import Rectangle22 from "../../../image/Rectangle 22.png";
import Rectangle23 from "../../../image/Rectangle 23.png";
import Rectangle24 from "../../../image/Rectangle 24.png";
import Rectangle25 from "../../../image/Rectangle 25.png";
import Rectangle26 from "../../../image/Rectangle 26.png";
import Rectangle27 from "../../../image/Rectangle 27.png";
import Rectangle28 from "../../../image/Rectangle 28.png";
import Rectangle29 from "../../../image/Rectangle 29.png";
import Rectangle30 from "../../../image/Rectangle 30.png";
import Rectangle31 from "../../../image/Rectangle 31.png";
import Frame9 from "../../../image/Frame 9.png";
import Frame8 from "../../../image/Frame 8.png";
import numbers from "../../../image/numbers.png";

let Gallery = () => {
  return (
    <div>
      <div className="gallery-heading">
        <span className="gray">Photo</span>
        <br />
        Gallery
      </div>
      <div className="gallery-sec">
        <hr className="gallery-hr" />
        <div className="gallery-photos">
          <Image src={Rectangle22} alt="rec"></Image>
          <Image src={Rectangle23} alt="rec"></Image>
          <Image src={Rectangle24} alt="rec"></Image>
          <Image src={Rectangle25} alt="rec"></Image>
          <Image src={Rectangle26} alt="rec"></Image>
          <Image src={Rectangle27} alt="rec"></Image>
          <Image src={Rectangle28} alt="rec"></Image>
          <Image src={Rectangle29} alt="rec"></Image>
          <Image src={Rectangle30} alt="rec"></Image>
          <Image src={Rectangle31} alt="rec"></Image>
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

export default Gallery;
