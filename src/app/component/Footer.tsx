import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <div className="w-full h-[466px] bg-primary-dark flex items-center justify-center">
      <Image
        className="h-12 w-auto"
        src={"/logo-jatiunggul.png"}
        width={500}
        height={500}
        quality={100}
        alt="logo"
      />
    </div>
  );
}

export default Footer;
