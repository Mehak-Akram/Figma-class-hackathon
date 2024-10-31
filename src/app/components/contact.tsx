import Image from "next/image";

import image12 from "../../../image/image 12.png";

let Contact = () => {
  return (
    <div>
      <section className="contact-section">
        <div className="contact-sec">
          <h1>Contact Us</h1>
          <div className="main-contact">
            <div className="contact-right">
              <form>
                <input type="text" name="Name" placeholder=" Names" required />
                <span></span>
                <br />
                <input
                  type="email"
                  name="email"
                  placeholder="Phone Number*"
                  required
                />
                <br />
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail*"
                  required
                />
                <br />
                <input
                  type="email"
                  name="email"
                  placeholder="Interested In"
                  required
                />
                <br />
                <textarea
                  className="text-message"
                  name="message"
                  placeholder="Message*"
                ></textarea>
              </form>
            </div>
            <div className="contact-image">
              <Image src={image12} alt="contact"></Image>
            </div>
          </div>
          <button className="btn2">SEND EMAIL</button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
