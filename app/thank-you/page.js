import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import Link from "next/link";
import "animate.css";

export const metadata = {
  title:"Thank You"
}

export default function page() {
  return (
    <section className="text-center" >
      <IoIosCheckmarkCircleOutline
        color="green"
        size={96}
        className="animate__animated animate__fadeIn animate__slower"
      />
      <div className="animate__animated animate__fadeInRight">
        <h2>Thank you for registring!</h2>
        <p>An Ottawa Stars representitve will contact you.</p>

        <Link href="/" className="btn btn-primary">
          Home
        </Link>
      </div>
    </section>
  );
}
