import Link from "next/link";

export default function Home() {
  return (
    <section>
      <Link href={'/register'} className="btn btn-primary">Register</Link>
      <a  href="#" className="btn">Learn More</a>
    </section>
  );
}
