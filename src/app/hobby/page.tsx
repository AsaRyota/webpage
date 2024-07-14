import Link1 from "next/link";
import Link2 from "next/link";
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
            <a href="#about"><li>About</li></a>
            <Link2 href="/hobby"><li>Hobby</li></Link2>
            <a href="#contact"><li>Contact</li></a>
          </ul>
        </div>
      </nav>
        <header>
        <h1>My Hobby</h1>
    </header>
    <main>
        <section className="hobby">
            <h2>趣味1</h2>
            {/* <img src="hobby1.jpg" alt="趣味1の画像"> */}
            {/* <p>趣味1の説明文。ここには趣味の詳細やなぜそれを楽しんでいるかについて書きます。</p> */}
        </section>
        <section className="hobby">
            <h2>趣味2</h2>
            {/* <img src="hobby2.jpg" alt="趣味2の画像"> */}
            {/* <p>趣味2の説明文。ここには趣味の詳細やなぜそれを楽しんでいるかについて書きます。</p> */}
        </section>
        <section className="hobby">
            <h2>趣味3</h2>
            {/* <img src="hobby3.jpg" alt="趣味3の画像"> */}
            {/* <p>趣味3の説明文。ここには趣味の詳細やなぜそれを楽しんでいるかについて書きます。</p> */}
        </section>
    </main>
    <footer>
        <p>&copy; 2024 My Hobby</p>
        <div className="social-media">
            <a href="#">Twitter</a>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
        </div>
    </footer>
    </body>
        </>
    );
};
export default page;