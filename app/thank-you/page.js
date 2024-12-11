import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import Link from "next/link";
import "animate.css";

export const metadata = {
  title: "Thank You",
};

export default function page() {
  return (
    <section className="text-center">
      <IoIosCheckmarkCircleOutline
        color="green"
        size={96}
        className="animate__animated animate__fadeIn animate__slower"
      />
      <div className="animate__animated animate__fadeInRight">
        <h2>Thank you for registring!</h2>
        <p>
          To secure your spot, please complete the payment of the
          registration fees promptly. Spots are limited and will be allocated on a first-come,
          first-served basis. You will receive an email shortly with more details about the payment
          process. If you have any questions, feel free to contact us.
        </p>

        <Link href="/" className="btn btn-primary">
          Home
        </Link>
      </div>
    </section>
  );
}
