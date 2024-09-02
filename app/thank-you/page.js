import { MdCheckCircleOutline } from "react-icons/md";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import Link from "next/link";
import "animate.css";

export default function page() {
  return (
    <section style={{ textAlign: "center" }}>
      <IoIosCheckmarkCircleOutline
        color="green"
        size={96}
        className="animate__animated animate__fadeIn animate__slower"
      />
      <div className="animate__animated animate__fadeInRight">
        <h2>Thanks for your payment</h2>
        <p>A payment to OTTAWASTARS will appear on your statement.</p>
        <Link href="/" className="btn btn-primary">
          Home
        </Link>
      </div>
    </section>
  );
}
