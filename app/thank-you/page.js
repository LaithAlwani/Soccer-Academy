import { MdCheckCircleOutline } from "react-icons/md";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import Link from "next/link";

export default function page() {
  return (
    <section style={{ textAlign: "center" }}>
      <IoIosCheckmarkCircleOutline color="green" size={96} />
      <h2>Thanks for your payment</h2>
      <p>A payment to OTTAWASTARS will appear on your statement.</p>
      <Link href="/" className="btn btn-primary">Home</Link>
    </section>
  );
}
