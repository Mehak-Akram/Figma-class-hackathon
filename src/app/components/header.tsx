import Link from "next/link";
import Image from "next/image";
import logo from "../../../image/logo.png";

let Header = () => {
  return (
    <div>
      <header>
        <nav>
          <Image src={logo} alt="logo" className="logo"></Image>
          <div className="right">
            <ul>
              <Link href="./">
                <li>MAIN</li>
              </Link>
              <Link href="gallery">
                <li>GALLERY</li>
              </Link>
              <Link href="project">
                <li>PROJECTS</li>
              </Link>
              <Link href="certification">
                <li>CERTIFICATION</li>
              </Link>{" "}
              <Link href="contact">
                <li>CONTACTS</li>
              </Link>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
