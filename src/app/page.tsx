import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <Link href="/home"><li>Home</li></Link>
            {/* <a href="#home"><li>Home</li></a> */}
            <a href="#about"><li>About</li></a>
            <a href="#info"><li>Info</li></a>
            <a href="#contact"><li>Contact</li></a>
            {/* <a href="https://erikterwan.com/" target="_blank"><li>Show me more</li></a> */}
          </ul>
        </div>
      </nav>
      <nav className="menu">
        <ul>
          <li><a href="#">menu1</a></li>
          <li><a href="#">menu2</a></li>
          <li><a href="#">menu3</a></li>
          <li><a href="#">menu4</a></li>
        </ul>
      </nav>
    </>
  );
}

