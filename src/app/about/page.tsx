import Link from "next/link";
const page = () => {
    return (
        <>
        <h1 className="a">Aboutページです</h1>
        <p className="top">
            <Link href={"/"}>トップへ戻る</Link>
        </p>
        </>
    );
};
export default page;