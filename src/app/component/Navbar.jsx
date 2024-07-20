import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="fixed top-0 right-0 left-0 bg-transparent w-full z-10">
      <div className="max-w-screen-xl mx-auto px-4 py-8 text-white flex justify-between items-center">
        <Image
          className="h-12 w-auto"
          src={"/logo-jatiunggul.png"}
          width={500}
          height={500}
          quality={100}
        />
        <ul className="flex text-xl">
          <li>
            <Link href={"/#"} className="text-slate-200 hover:text-white ms-7">
              Beranda
            </Link>
            <Link href={"/#"} className="text-slate-200 hover:text-white ms-7">
              Tentang Kami
            </Link>
            <Link href={"/#"} className="text-slate-200 hover:text-white ms-7">
              Produk
            </Link>
            <Link href={"/#"} className="text-slate-200 hover:text-white ms-7">
              Galeri
            </Link>
            <Link href={"/#"} className="text-slate-200 hover:text-white ms-7">
              Kontak
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
