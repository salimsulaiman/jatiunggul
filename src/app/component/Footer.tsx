import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full bg-primary-dark">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-6 py-14 grid grid-cols-6 gap-7 h-full">
        <div className="col-span-6 md:col-span-2 me-5">
          <Image
            className="h-12 w-auto block mx-auto md:mx-0"
            src={"/logo-jatiunggul.png"}
            width={500}
            height={500}
            quality={100}
            alt="logo"
          />
          <h4 className="text-white mt-10 sm:mt-5 text-center sm:text-start">
            Sentuhan alami gaya elegan di setiap sudut ruangan, untuk menciptakan suasana yang nyaman dan memukau bagi
            Anda.
          </h4>
          <div className="flex mt-10 sm:mt-5 justify-center md:justify-start">
            <div className="h-10 w-10 md:h-7 md:w-7 rounded-full bg-white me-4 flex items-center justify-center">
              <FaFacebookF />
            </div>
            <div className="h-10 w-10 md:h-7 md:w-7 rounded-full bg-white me-4 flex items-center justify-center">
              <FaTwitter />
            </div>
            <div className="h-10 w-10 md:h-7 md:w-7 rounded-full bg-white me-4 flex items-center justify-center">
              <FaInstagram />
            </div>
            <div className="h-10 w-10 md:h-7 md:w-7 rounded-full bg-white me-4 flex items-center justify-center">
              <FaYoutube />
            </div>
          </div>
        </div>
        <div className="col-span-6 sm:col-span-2 md:col-span-1 text-center sm:text-start mt-5 sm:mt-0">
          <h4 className="text-white font-bold text-lg mb-5">Halaman</h4>
          <ul>
            <li className="mb-5">
              <Link href="#" className="text-slate-50 hover:text-white">
                Beranda
              </Link>
            </li>
            <li className="mb-5">
              <Link href="#" className="text-slate-50 hover:text-white">
                Tentang Kami
              </Link>
            </li>
            <li className="mb-5">
              <Link href="#" className="text-slate-50 hover:text-white">
                Produk
              </Link>
            </li>
            <li className="mb-5">
              <Link href="#" className="text-slate-50 hover:text-white">
                Galeri
              </Link>
            </li>
            <li className="mb-5">
              <Link href="#" className="text-slate-50 hover:text-white">
                Kontak
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-6 sm:col-span-2 md:col-span-1 text-center sm:text-start">
          <h4 className="text-white font-bold text-lg mb-5">Layanan</h4>
          <ul>
            <li className="mb-5">
              <Link href="#" className="text-slate-50 hover:text-white">
                Ruang Tamu
              </Link>
            </li>
            <li className="mb-5">
              <Link href="#" className="text-slate-50 hover:text-white">
                Tempat Tidur
              </Link>
            </li>
            <li className="mb-5">
              <Link href="#" className="text-slate-50 hover:text-white">
                Ruang Makan
              </Link>
            </li>
            <li className="mb-5">
              <Link href="#" className="text-slate-50 hover:text-white">
                Kamar Mandi
              </Link>
            </li>
            <li className="mb-5">
              <Link href="#" className="text-slate-50 hover:text-white">
                Dapur
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-6 sm:col-span-2 md:col-span-2 text-center sm:text-start">
          <h4 className="text-white font-bold text-lg mb-5">Kontak</h4>
          <ul>
            <li className="mb-5 text-slate-50">Jalan Raya Jatibarang, Dukuhmaja, Songgom, Brebes, Jawa Tengah</li>
            <li className="mb-5 text-slate-50">contact@jatiunggul.com</li>
            <li className="mb-5 text-slate-50">+6287830119510</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
