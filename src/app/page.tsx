import Image from "next/image";
import Link1 from "next/link";
import Link2 from "next/link";

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
            <Link1 href="/home"><li>Home</li></Link1>
            {/* <a href="#home"><li>Home</li></a> */}
            <a href="#about"><li>About</li></a>
            <Link2 href="/hobby"><li>Hobby</li></Link2>
            {/* <a href="#hobby"><li>Hobby</li></a> */}
            <a href="#contact"><li>Contact</li></a>
            {/* <a href="https://erikterwan.com/" target="_blank"><li>Show me more</li></a> */}
          </ul>
        </div>
      </nav>
      <nav className="menu">
        <ul>
          <li><a href="#">menu1</a></li>
          <li><a href="#">menu2</a></li>
          <li><a href="#">Hobby</a></li>
          <li><a href="#">menu4</a></li>
        </ul>
      </nav>
    </>
  );
}

