"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BiArrowFromLeft } from "react-icons/bi";
import { FaArrowRight, FaSearch, FaShieldAlt } from "react-icons/fa";
import ProductCard from "../component/ProductCard";

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
              <div
                className="h-[47px] w-[47px] bg-white-bone rounded-full ms-2 cursor-pointer hover:bg-white-bone-100 flex items-center justify-center"
                onClick={() => {
                  const filterButton = document.getElementById("filterButton") as HTMLDialogElement;
                  filterButton?.showModal();
                }}
              >
                <Image width={24} height={24} alt="filter" src={"/assets/icons/filter.png"} />
              </div>
              <dialog id="filterButton" className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">Filter Kategori</h3>
                  <select className="select select-bordered w-full mt-4">
                    <option disabled selected>
                      Pilih Kategori
                    </option>
                    <option>Lemari</option>
                    <option>Kursi</option>
                    <option>Sofa</option>
                    <option>Buffet</option>
                    <option>Meja</option>
                  </select>
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
            </div>
          </div>
          <div className="w-full grid grid-cols-4 gap-5 mt-4">
            <div className="h-[277px] bg-alabaster-50 rounded-[20px] relative p-[31px] overflow-hidden shadow-lg col-span-4 md:col-span-2 lg:col-span-1 order-last lg:order-first">
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
            <div className="h-[277px] bg-alabaster-50 rounded-[20px] relative p-[31px] col-span-4 lg:col-span-2 shadow-lg">
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
                  <h2 className="text-[28px] text-slate-500 font-extrabold uppercase text-start z-10 line-clamp-2 md:line-clamp-none">
                    Modern Arm Chair
                  </h2>
                  <h4 className="text-[15px] text-slate-500 text-start z-10 line-clamp-2 md:line-clamp-none">
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
            <div className="h-[277px] bg-alabaster-50 rounded-[20px] relative p-[31px] overflow-hidden shadow-lg col-span-4 md:col-span-2 lg:col-span-1">
              <div className="w-full flex flex-col items-start">
                <h2 className="text-[28px] text-slate-500 font-extrabold uppercase text-start z-10">Small Cabinet</h2>
                <h4 className="text-[15px] text-slate-500 text-start z-10">Bentuk nyaman dan stylish</h4>
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
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            <ProductCard
              id={1}
              name={"Modern Arm Chair"}
              category={"Kursi"}
              price={1600000}
              picture={"modern-arm-chair.png"}
            />
            <ProductCard id={2} name={"Brown Chair"} category={"Kursi"} price={1600000} picture={"brown-chair.png"} />
            <ProductCard id={3} name={"Clasic Chair"} category={"Kursi"} price={1600000} picture={"clasic.png"} />
            <ProductCard id={4} name={"Modern Chair"} category={"Kursi"} price={3800000} picture={"modern.png"} />
            <ProductCard
              id={5}
              name={"Luxury Blue Sofa"}
              category={"Sofa"}
              price={4000000}
              picture={"luxury-blue-sofa.png"}
            />
            <ProductCard id={6} name={"Cabinet"} category={"Lemari"} price={1700000} picture={"cabinet.png"} />
            <ProductCard id={7} name={"Black Chair"} category={"Kursi"} price={1700000} picture={"black-chair.png"} />
            <ProductCard id={8} name={"Kitchen Set"} category={"Lemari"} price={1700000} picture={"kitchen-set.png"} />
            <ProductCard
              id={9}
              name={"Wooden Buffet"}
              category={"buffet"}
              price={1700000}
              picture={"wooden-buffet.png"}
            />
            <ProductCard
              id={10}
              name={"Small Cabinet"}
              category={"Lemari"}
              price={1700000}
              picture={"small-cabinet.png"}
            />
          </div>
          <div className="w-full relative h-[219px] rounded-tr-[50px] rounded-bl-[50px] bg-info bg-center bg-cover overflow-hidden mt-24 mb-6">
            <div className="w-full h-full bg-black/50 flex justify-center items-center p-8">
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
