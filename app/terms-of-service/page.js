import Link from "next/link";
import React from "react";

export const metadata = {
  title:"Terms of Service"
}

export default function TermsOfService() {
  return (
    <section>
      <h1>Terms of Service</h1>
      <h2>1. Acceptance of Terms:</h2>
      By registering with our academy, you agree to abide by these terms.
      <h2>2. Registration & Payment:</h2>
      All fees are payable in full at the time of registration, unless financing through Affirm. No
      refunds after the program begins.
      <h2>3. Liability:</h2>
      Participants join at their own risk. Ottawa Stars is not responsible for injuries or loss of
      property.
      <h2>4. Code of Conduct:</h2>
      All players and parents are expected to promote sportsmanship, respect, and fair play. Any
      disruptive behavior may result in dismissal from the academy.
      <h2>5. Cancellation Policy:</h2>
      We reserve the right to cancel or modify sessions due to unforeseen circumstances, and will
      notify parents promptly.
      <h2>6. Intellectual Property:</h2>
      <p>
        All content on our website is owned by Ottawa Stars Soccer Academy and may not be used
        without permission.
      </p>
      <h2>7. Privacy:</h2>
      Your information is protected per our <Link href="/privacy-policy">Privacy Policy.</Link>
    </section>
  );
}
