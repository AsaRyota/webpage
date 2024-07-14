import Link1 from "next/link";
const page = () => {
    return (
        <>
        <h1 className="a">Homeページです</h1>
        <p className="top">
            <Link1 href={"/"}>トップへ戻る</Link1>
        </p>
        </>
    );
};
export default page;