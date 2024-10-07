import ContactForm from "@/components/ContactForm";

export default function ContactPage () {
  return (
    <section>
      <h1>Get in Touch</h1>
      <ul>
        <li>Phone: 613-884-1155</li>
        <li>email: admin@ottawastars.com</li>
        <li>coach: tech.director@ottawastars.com</li>
      </ul>
      <h3>Send us a request:</h3>
      <ContactForm />
    </section>
  );
}
