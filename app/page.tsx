import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <nav>
        <Link href="/week-2">week-2</Link>
        <Link href="/week-3">week-3</Link>
      </nav>
    </main>
  );
}
