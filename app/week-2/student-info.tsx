import Link from "next/link";

export default function StudentInfo() {
    return (
        <nav>
            <h1>Henry Leung</h1>
            <p>Github: <Link className="underline" href="https://github.com/Edu-Henry-Leung">Link Here</Link></p>
        </nav>
    );
}