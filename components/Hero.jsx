import Image from "next/image";
import React from "react";

export default function Hero({ image, altImage, alt, title, styles }) {
  return (
    <section id="hero">
      <div className="hero-img-wrapper">
        <picture>
        <source srcset={altImage} media="(min-width: 600px)" />
          <Image src={image} alt={alt} priority quality={75} fill className={styles} />
        </picture>
        <div className="hero-title">
          <h1>{title}</h1>
        </div>
      </div>
    </section>
  );
}
