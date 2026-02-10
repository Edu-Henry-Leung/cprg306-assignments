import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <nav>
        <ul className="underline"><Link href="/week-2">week-2</Link></ul>
        <ul className="underline"><Link href="/week-3">week-3</Link></ul>
        <ul className="underline"><Link href="/week-4">week-4</Link></ul>
        <ul className="underline"><Link href="/week-5">week-5</Link></ul>
      </nav>
    </main>
  );
}
