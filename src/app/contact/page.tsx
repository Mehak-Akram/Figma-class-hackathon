import Image from "next/image";
import image14 from "../../../image/image 14.png";

let Contact = () => {
  return (
    <div>
      <div className="main-contact">
        {" "}
        <div>
          <div className="gallery-heading">
            <span className="gray">Contact</span>
            <br />
            Information
          </div>
          <br />
          <div className="contact-div">
            <h3>Company Name</h3>
            <p>123 Sample Street Austin Texsus 76401</p>
            <br />
            <h3>512.333.2222</h3>
            <br />
            <p>sampleemail@gmail.com</p>

            <br />
            <button className="contact-btn">CONTACT US</button>
          </div>
        </div>
        <Image src={image14} alt="map"></Image>
      </div>
    </div>
  );
};

export default Contact;
