import Image from "next/image";
import React from "react";

export default function Hero({ image, alt, title, styles }) {
  return (
    <section id="hero">
      <div className="hero-img-wrapper">
        <Image src={image} alt={alt} priority quality={75} fill className={styles} />
        <div className="hero-title">
          <h1>{title}</h1>
        </div>
      </div>
    </section>
  );
}
