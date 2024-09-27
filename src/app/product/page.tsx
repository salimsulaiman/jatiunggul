"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiArrowFromLeft } from "react-icons/bi";
import { FaArrowRight, FaSearch, FaShieldAlt } from "react-icons/fa";
import ProductCard from "../component/ProductCard";
import { useRouter } from "next/navigation";
import Pagination from "../component/Pagination";

interface Product {
  id: string;
  name: string;
  price: number;
  categoryId: string;
  desc: string;
  pictures: Array<string>;
  createdAt: Date;
  category: Category;
}

interface Category {
  id: string;
  name: string;
}

function Product() {
  const router = useRouter();

  const [category, setCategory] = useState<string>("Semua");
  const [data, setData] = useState<Product[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [search, setSearch] = useState<string>("");

  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage = 10;

  useEffect(() => {
    fetch("/api/product", {
      cache: "force-cache",
      next: {
        revalidate: 10,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  const filteredProducts = data?.filter((product) => {
    const matchesCategory = category === "Semua" || product?.category?.name === category;

    return matchesCategory;
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts?.length / productsPerPage);

  // Change page
  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

  const handleCategoryChange = (e: any) => {
    setCategory(e.target.value);
    const filterButton = document.getElementById("filterButton") as HTMLDialogElement;
    filterButton?.close();
    setCurrentPage(1);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/product/search?product=${search}`);
    setSearch("");
  };

  return (
    <div className="w-full font-urbanist" id="home">
      {/* product */}
      {/* hero */}
      <section className="w-full bg-product bg-cover bg-no-repeat bg-center">
        <div className="w-full h-full bg-black/70 pt-7 md:pt-0">
          <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-6 pt-20 pb-10 h-fit md:h-[400px] lg:h-[500px] flex flex-col items-center justify-center">
            <h1 className="text-2xl md:text-5xl text-white font-bold">Produk Kami</h1>
            <h3 className="hidden md:block text-xl text-white text-center max-w-[883px] mt-8 leading-loose">
              Setiap potongan mebel jati kami dibuat dari bahan pilihan yang tahan lama, memberikan keindahan alami yang
              menambah kemewahan di setiap ruangan.
            </h3>
          </div>
        </div>
      </section>
      {/* end section */}
      {/* product */}
      <section className="w-full bg-white mt-4" id="about">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-6 py-8 md:py-20 flex flex-col gap-4 items-center">
          {/* populer */}
          <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center">
            <h2 className="text-2xl md:text-[32px] text-slate-700 font-bold">Paling Populer</h2>
            <div className="flex items-center justify-between w-full md:w-fit md:justify-start mt-6 md:mt-0">
              <div className={`relative w-full md:w-[290px]`}>
                <form onSubmit={handleSearch}>
                  <input
                    type="search"
                    className="mx-auto w-full bg-white-bone rounded-full px-[20px] py-[13px] placeholder:text-rock-blue-500 placeholder:font-medium font-bold text-slate-500"
                    placeholder="Cari produk..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </form>
                <FaSearch
                  className="absolute right-6 top-1/2 -translate-y-1/2 cursor-pointer text-slate-400 hover:text-slate-700 text-[23px]"
                  onClick={() => handleSearch}
                />
              </div>
              {/* <div
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
                    onChange={handleCategoryChange}
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
              </dialog> */}
            </div>
          </div>
          <div className="w-full grid grid-cols-4 gap-5 mt-4">
            <div className="h-[277px] bg-alabaster-50 rounded-[20px] relative p-[31px] overflow-hidden shadow-lg col-span-4 md:col-span-2 lg:col-span-1 order-last lg:order-first">
              <div className="w-full flex flex-col items-end">
                <h2 className="text-[28px] text-slate-500 font-extrabold uppercase text-start z-10">Brown Chair</h2>
                <h4 className="text-[15px] text-slate-500 text-start z-10">Kursi indah dan nyaman</h4>
                <Link
                  href={"/product/2"}
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
                    href={"/product/1"}
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
                  href={"/product/10"}
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
          <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center mt-8 md:mt-20 mb-0 md:mb-8">
            <h2 className="text-2xl md:text-[32px] text-slate-700 font-bold">Produk Terbaru</h2>
            <div className="flex items-center mt-4 md:mt-0 group">
              <Link
                href={"/product/search?product"}
                className="text-slate-500 group-hover:text-slate-700 font-semibold"
              >
                Lihat lebih banyak
              </Link>
              <FaArrowRight className="text-slate-500 group-hover:text-slate-700 text-lg ms-2" />
            </div>
          </div>
          {isLoading ? (
            <div className="w-full h-20 flex items-center justify-center">
              <span className="loading loading-dots loading-lg"></span>
            </div>
          ) : (
            <>
              <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {data &&
                  data
                    ?.sort((a, b) => {
                      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
                    })
                    .slice(0, 10)
                    .map((element: any, index: number) => {
                      return (
                        <ProductCard
                          key={index}
                          id={element?.id}
                          name={element?.name}
                          category={element?.category?.name}
                          price={element?.price}
                          picture={element?.pictures[0]}
                        />
                      );
                    })}
              </div>
              {/* <div className="w-full mt-4-">
                <Pagination currentPage={currentPage} totalPages={totalPages} paginate={paginate} />
              </div> */}
            </>
          )}

          <div className="w-full relative h-fit md:h-[219px] rounded-tr-2xl md:rounded-tr-[50px] rounded-bl-2xl md:rounded-bl-[50px] bg-info bg-center bg-cover overflow-hidden mt-8 mb-6">
            <div className="w-full h-full bg-black/50 flex justify-center items-center p-8">
              <h4 className="text-white text-sm md:text-xl text-center max-w-[770px] leading-loose">
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
