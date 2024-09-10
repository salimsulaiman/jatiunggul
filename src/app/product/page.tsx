"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BiArrowFromLeft } from "react-icons/bi";
import { FaArrowRight, FaSearch, FaShieldAlt } from "react-icons/fa";

function Product() {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="w-full font-urbanist" id="home">
      {/* product */}
      {/* hero */}
      <section className="w-full bg-product bg-cover bg-no-repeat bg-center">
        <div className="w-full h-full bg-black/70">
          <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-6 pt-20 pb-10 h-fit lg:h-[500px] flex flex-col items-center justify-center">
            <h1 className="text-5xl text-white font-bold">Produk Kami</h1>
            <h3 className="text-xl text-white text-center max-w-[883px] mt-8 leading-loose">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.
              Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
              tellus..
            </h3>
          </div>
        </div>
      </section>
      {/* end section */}
      {/* product */}
      <section className="w-full bg-white mt-4" id="about">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-6 py-10 md:py-20 flex flex-col gap-4 items-center">
          {/* populer */}
          <div className="w-full flex justify-between items-center">
            <h2 className="text-[32px] text-slate-700 font-bold">Paling Populer</h2>
            <div className="flex items-center">
              <div className={`relative w-[235px]`}>
                <input
                  type="search"
                  className="mx-auto w-full bg-white-bone rounded-full px-[20px] py-[13px] placeholder:text-rock-blue-500 placeholder:font-medium font-bold text-slate-500"
                  placeholder="Cari produk..."
                />
                <FaSearch className="absolute right-6 top-1/2 -translate-y-1/2 cursor-pointer text-slate-400 hover:text-slate-700 text-[23px]" />
              </div>
              <div className="h-[47px] w-[47px] bg-white-bone rounded-full ms-2 cursor-pointer hover:bg-white-bone-100 flex items-center justify-center">
                <Image width={24} height={24} alt="filter" src={"/assets/icons/filter.png"} />
              </div>
            </div>
          </div>
          <div className="w-full grid grid-cols-4 gap-5 mt-4">
            <div className="h-[277px] bg-alabaster-50 rounded-[20px] relative p-[31px] overflow-hidden shadow-lg">
              <div className="w-full flex flex-col items-end">
                <h2 className="text-[28px] text-slate-500 font-extrabold uppercase text-start z-10">Brown Chair</h2>
                <h4 className="text-[15px] text-slate-500 text-start z-10">Kursi indah dan nyaman</h4>
                <Link
                  href={"#"}
                  className="py-[5px] px-4 bg-slate-600 hover:bg-slate-700 text-white text-[13px] rounded-[10px] mt-5 z-10"
                >
                  Lihat Produk
                </Link>
              </div>
              <Image
                src={"/assets/product/brown-chair.png"}
                alt="brown-chair"
                width={200}
                height={200}
                className="w-[155px] h-auto absolute -bottom-6 left-7"
              />
            </div>
            <div className="h-[277px] bg-alabaster-50 rounded-[20px] relative p-[31px] col-span-2 shadow-lg">
              <div className="w-full flex gap-4 h-full items-center">
                <div className="w-1/2 h-full">
                  <Image
                    src={"/assets/product/modern-arm-chair.png"}
                    alt="modern-arm-chair"
                    width={200}
                    height={200}
                    className="w-auto h-full ms-auto me-6"
                  />
                </div>
                <div className="w-1/2 flex flex-col items-start">
                  <h2 className="text-[28px] text-slate-500 font-extrabold uppercase text-start z-10">
                    Modern Arm Chair
                  </h2>
                  <h4 className="text-[15px] text-slate-500 text-start z-10">
                    Kursi minimalis yang mengutamakan kenyamanan dan gaya kontemporer nan klasik
                  </h4>
                  <Link
                    href={"#"}
                    className="py-[5px] px-4 bg-slate-600 hover:bg-slate-700 text-white text-[13px] rounded-[10px] mt-5 z-10"
                  >
                    Lihat Produk
                  </Link>
                </div>
              </div>
            </div>
            <div className="h-[277px] bg-alabaster-50 rounded-[20px] relative p-[31px] overflow-hidden shadow-lg">
              <div className="w-full flex flex-col items-start">
                <h2 className="text-[28px] text-slate-500 font-extrabold uppercase text-end z-10">Small Cabinet</h2>
                <h4 className="text-[15px] text-slate-500 text-end z-10">Bentuk nyaman dan stylish</h4>
                <Link
                  href={"/product/1"}
                  className="py-[5px] px-4 bg-slate-600 hover:bg-slate-700 text-white text-[13px] rounded-[10px] mt-5 z-10"
                >
                  Lihat Produk
                </Link>
              </div>
              <Image
                src={"/assets/product/small-cabinet.png"}
                alt="small-cabinet"
                width={200}
                height={200}
                className="w-[175px] h-auto absolute -bottom-4 right-2"
              />
            </div>
          </div>
          {/* new */}
          <div className="w-full flex justify-between items-center mt-24">
            <h2 className="text-[32px] text-slate-700 font-bold">Produk Terbaru</h2>
            <div className="flex items-center">
              <Link href={"#"} className="text-slate-600 hover:text-slate-700 font-semibold">
                Lihat lebih banyak
              </Link>
              <FaArrowRight className="text-slate-700 text-lg ms-2" />
            </div>
          </div>
          <div className="w-full grid grid-cols-4 gap-4">
            <div className="min-h-[400px] bg-white border-seashell-100 border-[1px] rounded-xl shadow-md hover:shadow-lg transition-all ease-in-out duration-500 p-5 flex flex-col justify-between">
              <div className="w-full">
                <div className="w-full h-[215px] bg-seashell-200 rounded-xl overflow-hidden">
                  <Image
                    src={"/assets/product/set-meja-makan.jpg"}
                    alt="set-meja-makan.jpg"
                    width={500}
                    height={500}
                    quality={50}
                    className="object-cover w-full h-full object-center"
                  />
                </div>
                <h4 className="text-slate-500 mt-4 text-lg line-clamp-2">Set Meja Makan Kayu Jati</h4>
                <h3 className="text-heather-300 mt-1 font-light text-lg">Meja dan Kursi</h3>
              </div>
              <Link
                href={"#"}
                className="py-[7px] px-5 bg-slate-600 hover:bg-slate-700 text-white text-[14px] rounded-[10px] mt-5 z-10 text-center"
              >
                Selengkapnya
              </Link>
            </div>
            <div className="min-h-[400px] bg-white border-seashell-100 border-[1px] rounded-xl shadow-md hover:shadow-lg transition-all ease-in-out duration-500 p-5 flex flex-col justify-between">
              <div className="w-full">
                <div className="w-full h-[215px] bg-seashell-200 rounded-xl overflow-hidden">
                  <Image
                    src={"/assets/product/sofa-bed-kulit-2-seat.jpg"}
                    alt="sofa-bed-kulit-2-seat.jpg"
                    width={500}
                    height={500}
                    quality={50}
                    className="object-cover w-full h-full object-center"
                  />
                </div>
                <h4 className="text-slate-500 mt-4 text-lg line-clamp-2">Sofa Bed Kulit 2 Seat - Hitam dan Putih</h4>
                <h3 className="text-heather-300 mt-1 font-light text-lg">Sofa</h3>
              </div>
              <Link
                href={"#"}
                className="py-[7px] px-5 bg-slate-600 hover:bg-slate-700 text-white text-[14px] rounded-[10px] mt-5 z-10 text-center"
              >
                Selengkapnya
              </Link>
            </div>
            <div className="min-h-[400px] bg-white border-seashell-100 border-[1px] rounded-xl shadow-md hover:shadow-lg transition-all ease-in-out duration-500 p-5 flex flex-col justify-between">
              <div className="w-full">
                <div className="w-full h-[215px] bg-seashell-200 rounded-xl overflow-hidden">
                  <Image
                    src={"/assets/product/lemari-rak.jpg"}
                    alt="lemari-rak.jpg"
                    width={500}
                    height={500}
                    quality={50}
                    className="object-cover w-full h-full object-center"
                  />
                </div>
                <h4 className="text-slate-500 mt-4 text-lg line-clamp-2">Lemari Rak Sepatu Susun 4 Tingkat - Putih</h4>
                <h3 className="text-heather-300 mt-1 font-light text-lg">Lemari</h3>
              </div>
              <Link
                href={"#"}
                className="py-[7px] px-5 bg-slate-600 hover:bg-slate-700 text-white text-[14px] rounded-[10px] mt-5 z-10 text-center"
              >
                Selengkapnya
              </Link>
            </div>
            <div className="min-h-[400px] bg-white border-seashell-100 border-[1px] rounded-xl shadow-md hover:shadow-lg transition-all ease-in-out duration-500 p-5 flex flex-col justify-between">
              <div className="w-full">
                <div className="w-full h-[215px] bg-seashell-200 rounded-xl overflow-hidden">
                  <Image
                    src={"/assets/product/set-meja-belajar.jpg"}
                    alt="set-meja-belajar.jpg"
                    width={500}
                    height={500}
                    quality={50}
                    className="object-cover w-full h-full object-center"
                  />
                </div>
                <h4 className="text-slate-500 mt-4 text-lg line-clamp-2">Set Meja dan Kursi Belajar</h4>
                <h3 className="text-heather-300 mt-1 font-light text-lg">Meja dan Kursi</h3>
              </div>
              <Link
                href={"#"}
                className="py-[7px] px-5 bg-slate-600 hover:bg-slate-700 text-white text-[14px] rounded-[10px] mt-5 z-10 text-center"
              >
                Selengkapnya
              </Link>
            </div>
            <div className="min-h-[400px] bg-white border-seashell-100 border-[1px] rounded-xl shadow-md hover:shadow-lg transition-all ease-in-out duration-500 p-5 flex flex-col justify-between">
              <div className="w-full">
                <div className="w-full h-[215px] bg-seashell-200 rounded-xl overflow-hidden">
                  <Image
                    src={"/assets/product/set-meja-makan-3-kursi.jpg"}
                    alt="set-meja-makan-3-kursi.jpg"
                    width={500}
                    height={500}
                    quality={50}
                    className="object-cover w-full h-full object-center"
                  />
                </div>
                <h4 className="text-slate-500 mt-4 text-lg line-clamp-2">Set Meja Makan 3 Kursi</h4>
                <h3 className="text-heather-300 mt-1 font-light text-lg">Meja dan Kursi</h3>
              </div>
              <Link
                href={"#"}
                className="py-[7px] px-5 bg-slate-600 hover:bg-slate-700 text-white text-[14px] rounded-[10px] mt-5 z-10 text-center"
              >
                Selengkapnya
              </Link>
            </div>
            <div className="min-h-[400px] bg-white border-seashell-100 border-[1px] rounded-xl shadow-md hover:shadow-lg transition-all ease-in-out duration-500 p-5 flex flex-col justify-between">
              <div className="w-full">
                <div className="w-full h-[215px] bg-seashell-200 rounded-xl overflow-hidden">
                  <Image
                    src={"/assets/product/sofa-bed-kulit-2-seat-coklat-hitam.jpg"}
                    alt="sofa-bed-kulit-2-seat-coklat-hitam.jpg"
                    width={500}
                    height={500}
                    quality={50}
                    className="object-cover w-full h-full object-center"
                  />
                </div>
                <h4 className="text-slate-500 mt-4 text-lg line-clamp-2">Sofa Bed Kulit 2 Seat - Coklat dan Hitam</h4>
                <h3 className="text-heather-300 mt-1 font-light text-lg">Sofa</h3>
              </div>
              <Link
                href={"#"}
                className="py-[7px] px-5 bg-slate-600 hover:bg-slate-700 text-white text-[14px] rounded-[10px] mt-5 z-10 text-center"
              >
                Selengkapnya
              </Link>
            </div>
            <div className="min-h-[400px] bg-white border-seashell-100 border-[1px] rounded-xl shadow-md hover:shadow-lg transition-all ease-in-out duration-500 p-5 flex flex-col justify-between">
              <div className="w-full">
                <div className="w-full h-[215px] bg-seashell-200 rounded-xl overflow-hidden">
                  <Image
                    src={"/assets/product/set-minimalis-dan-meja.jpg"}
                    alt="set-minimalis-dan-meja.jpg"
                    width={500}
                    height={500}
                    quality={50}
                    className="object-cover w-full h-full object-center"
                  />
                </div>
                <h4 className="text-slate-500 mt-4 text-lg line-clamp-2">Set Kursi Minimalis dan Meja - Hitam</h4>
                <h3 className="text-heather-300 mt-1 font-light text-lg">Kursi</h3>
              </div>
              <Link
                href={"#"}
                className="py-[7px] px-5 bg-slate-600 hover:bg-slate-700 text-white text-[14px] rounded-[10px] mt-5 z-10 text-center"
              >
                Selengkapnya
              </Link>
            </div>
            <div className="min-h-[400px] bg-white border-seashell-100 border-[1px] rounded-xl shadow-md hover:shadow-lg transition-all ease-in-out duration-500 p-5 flex flex-col justify-between">
              <div className="w-full">
                <div className="w-full h-[215px] bg-seashell-200 rounded-xl overflow-hidden">
                  <Image
                    src={"/assets/product/set-meja-dan-kursi-belajar.jpg"}
                    alt="set-meja-dan-kursi-belajar.jpg"
                    width={500}
                    height={500}
                    quality={50}
                    className="object-cover w-full h-full object-center"
                  />
                </div>
                <h4 className="text-slate-500 mt-4 text-lg line-clamp-2">Set Meja dan Kursi Belajar</h4>
                <h3 className="text-heather-300 mt-1 font-light text-lg">Meja dan Kursi</h3>
              </div>
              <Link
                href={"#"}
                className="py-[7px] px-5 bg-slate-600 hover:bg-slate-700 text-white text-[14px] rounded-[10px] mt-5 z-10 text-center"
              >
                Selengkapnya
              </Link>
            </div>
          </div>
          <div className="w-full relative h-[219px] rounded-tr-[50px] rounded-bl-[50px] bg-info bg-center bg-cover overflow-hidden mt-24">
            <div className="w-full h-full bg-black/50 flex justify-center items-center">
              <h4 className="text-white text-xl text-center max-w-[770px] leading-loose">
                Jika kamu ingin melakukan <span className="font-bold italic">custom desain furniture</span> , jangan
                ragu untuk menghubungi kami. Kami siap membantu mewujudkannya sesuai dengan keinginan dan kebutuhanmu.
              </h4>
            </div>
          </div>
        </div>
      </section>
      {/* end product */}
    </div>
  );
}

export default Product;
