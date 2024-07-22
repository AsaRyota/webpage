import Link1 from "next/link";
import Link2 from "next/link";
import Link3 from "next/link";
import Link4 from "next/link";
import Image from "next/image";
import { XImage, InstagramImage, FacebookImage} from './components/NextImage';
const page = () => {
    return (
        <>
        {/* <h1 className="a">Hobbyページです</h1>
        <p className="top">
            <Link2 href={"/"}>トップへ戻る</Link2>
        </p> */}
<body>
<nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <Link1 href="/home"><li>Home</li></Link1>
            <Link2 href="/about"><li>About</li></Link2>
            <Link3 href="/hobby"><li>Hobby</li></Link3>
            <Link4 href="/contact"><li>Contact</li></Link4>
          </ul>
        </div>
      </nav>
        <header>
        <h1>My Hobby</h1>
    </header>
    <main>
        <section className="hobby1">
            <h2>趣味1</h2>
            {/* <img src="hobby1.jpg" alt="趣味1の画像"> */}
            {/* <p>趣味1の説明文。ここには趣味の詳細やなぜそれを楽しんでいるかについて書きます。</p> */}
        </section>
        <section className="hobby2">
            <h2>趣味2</h2>
            {/* <img src="hobby2.jpg" alt="趣味2の画像"> */}
            {/* <p>趣味2の説明文。ここには趣味の詳細やなぜそれを楽しんでいるかについて書きます。</p> */}
        </section>
        <section className="hobby3">
            <h2>趣味3</h2>
            {/* <img src="hobby3.jpg" alt="趣味3の画像"> */}
            {/* <p>趣味3の説明文。ここには趣味の詳細やなぜそれを楽しんでいるかについて書きます。</p> */}
        </section>
    </main>

    <footer>
        <p>&copy; 2024 My Hobby</p>
        <div className="social-media">
            <ul>
                <li>
                <a href="https://x.com/" target="_blank">
                <XImage />
                </a>
                </li>
                <li>
                <a href="https://facebook.com/" target="_blank">
                <FacebookImage />
                </a>
                </li>
                <li>
                <a href="https://instagram.com/" target="_blank">
                <InstagramImage />
                </a>
                </li>
            </ul>
            {/* <a href="#">Twitter</a>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a> */}
        </div>
        <a className="pagetop" href="#"><div className="pagetop__arrow"></div></a>
    </footer>
    


    </body>
        </>
    );
};
export default page;