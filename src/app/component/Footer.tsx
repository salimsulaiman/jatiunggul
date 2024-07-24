import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full bg-primary-dark px-4 py-14">
      <div className="max-w-screen-xl mx-auto grid grid-cols-5 gap-7 h-full">
        <div className="col-span-2 me-5">
        <Image
          className="h-12 w-auto"
          src={"/logo-jatiunggul.png"}
          width={500}
          height={500}
          quality={100}
          alt="logo"
        />
        <h4 className="text-white mt-5">Sentuhan alami gaya elegan di setiap sudut ruangan, untuk menciptakan suasana yang nyaman dan memukau bagi Anda.</h4>
        <div className="flex mt-5">
          <div className="h-7 w-7 rounded-full bg-white me-4 flex items-center justify-center">
            <FaFacebookF/>
          </div>
          <div className="h-7 w-7 rounded-full bg-white me-4 flex items-center justify-center">
            <FaTwitter/>
          </div>
          <div className="h-7 w-7 rounded-full bg-white me-4 flex items-center justify-center">
            <FaInstagram/>
          </div>
          <div className="h-7 w-7 rounded-full bg-white me-4 flex items-center justify-center">
            <FaYoutube/>
          </div>
        </div>
        </div>
        <div className="">
          <h4 className="text-white font-semibold mb-5">Halaman</h4>
          <ul>
            <li className="mb-5"><Link href="#" className="text-white">Beranda</Link></li>
            <li className="mb-5"><Link href="#" className="text-white">Tentang Kami</Link></li>
            <li className="mb-5"><Link href="#" className="text-white">Produk</Link></li>
            <li className="mb-5"><Link href="#" className="text-white">Galeri</Link></li>
            <li className="mb-5"><Link href="#" className="text-white">Kontak</Link></li>
          </ul>
        </div>
        <div className="">
          <h4 className="text-white font-semibold mb-5">Layanan</h4>
          <ul>
            <li className="mb-5"><Link href="#" className="text-white">Ruang Tamu</Link></li>
            <li className="mb-5"><Link href="#" className="text-white">Tempat Tidur</Link></li>
            <li className="mb-5"><Link href="#" className="text-white">Ruang Makan</Link></li>
            <li className="mb-5"><Link href="#" className="text-white">Kamar Mandi</Link></li>
            <li className="mb-5"><Link href="#" className="text-white">Dapur</Link></li>
          </ul>
        </div>
        <div className="">
          <h4 className="text-white font-semibold mb-5">Kontak</h4>
          <ul>
            <li className="mb-5 text-white">Jalan Raya Jatibarang, Dukuhmaja, Songgom, Brebes, Jawa Tengah</li>
            <li className="mb-5 text-white">contact@jatiunggul.com</li>
            <li className="mb-5 text-white">+6287830119510</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
