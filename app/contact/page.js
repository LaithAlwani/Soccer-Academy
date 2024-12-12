import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";

export const metadata = {
  title: "Contact",
};
export default function ContactPage() {
  return (
    <>
      <Hero image="/contact.webp" alt="image of soccer balls" title="Get in Touch" />

      <ContactForm />
    </>
  );
}
