"use client";
import ProductCard from "@/app/component/ProductCard";
import { log } from "console";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { FaArrowRight, FaSearch } from "react-icons/fa";

function SearchProduct() {
  const searchParams = useSearchParams();
  const search = searchParams.get("product");
  //   console.log(search);
  const [category, setCategory] = useState<string>("");

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
          <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
            <div className="text-3xl text-slate-700 font-bold">Modern Arm</div>
            <div className="flex items-center justify-between w-full md:w-fit md:justify-start mt-6 md:mt-0">
              <div className={`relative w-full md:w-[235px]`}>
                <input
                  type="search"
                  className="mx-auto w-full bg-white-bone rounded-full px-[20px] py-[13px] placeholder:text-rock-blue-500 placeholder:font-medium font-bold text-slate-500"
                  placeholder="Cari produk..."
                />
                <FaSearch className="absolute right-6 top-1/2 -translate-y-1/2 cursor-pointer text-slate-400 hover:text-slate-700 text-[23px]" />
              </div>
              <div
                className="h-[47px] w-[47px] p-3 bg-white-bone rounded-full ms-2 cursor-pointer hover:bg-white-bone-100 flex items-center justify-center"
                onClick={() => {
                  const filterButton = document.getElementById("filterButton") as HTMLDialogElement;
                  filterButton?.showModal();
                }}
              >
                <Image
                  width={24}
                  height={24}
                  alt="filter"
                  src={"/assets/icons/filter.png"}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <dialog id="filterButton" className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">Filter Kategori</h3>
                  <select
                    className="select select-bordered w-full mt-4"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option disabled value={""}>
                      Pilih Kategori
                    </option>
                    <option value={"Lemari"}>Lemari</option>
                    <option value={"Kursi"}>Kursi</option>
                    <option value={"Sofa"}>Sofa</option>
                    <option value={"Buffet"}>Buffet</option>
                    <option value={"Meja"}>Meja</option>
                  </select>
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
            </div>
          </div>
          <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
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

export default SearchProduct;
