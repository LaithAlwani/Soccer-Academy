import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";

export const metadata = {
  title:"Contact"
}
export default function ContactPage () {
  return (
    <>
      <Hero image="/contactus.webp" alt="image of soccer balls" title="Let's Get in Touch" />
      <ContactForm />
    </>
  );
}
