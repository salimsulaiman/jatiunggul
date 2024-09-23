"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BiArrowFromLeft } from "react-icons/bi";
import { FaArrowRight, FaSearch, FaShieldAlt } from "react-icons/fa";
import ProductCard from "../component/ProductCard";
import { useRouter } from "next/navigation";
import Pagination from "../component/Pagination";

function Product() {
  const router = useRouter();

  const [category, setCategory] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage = 10;

  const products = [
    {
      id: 1,
      name: "Modern Arm Chair",
      category: "Kursi",
      price: 1600000,
      pictures: [
        "https://utfs.io/f/UyKYMyzOlFb2BCCGh9jM9G3P4oI82keztW1KlApU0Ns7iQfR",
        "https://plus.unsplash.com/premium_photo-1683120673588-682452cc83a0?fm=jpg&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1683141507095-7a8e587663aa?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      desc: "Kursi lengan modern yang dirancang dengan bentuk yang ergonomis dan estetika kontemporer. Terbuat dari bahan berkualitas tinggi, kursi ini menawarkan kenyamanan maksimal dengan bantalan empuk yang mendukung postur tubuh dengan baik. Ideal untuk ruang tamu, ruang kerja, atau area lounge.",
    },
    {
      id: 2,
      name: "Brown Chair",
      category: "Kursi",
      price: 1600000,
      pictures: [
        "https://utfs.io/f/UyKYMyzOlFb2aKI2nuvpYb1rvdABqMhZfI39F8kGn65ecgpi",
        "https://images.unsplash.com/photo-1644711454038-141e4bae4a52?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1658071372366-8a658d8a9835?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1659246973603-748505504837?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      desc: "Kursi berwarna cokelat dengan desain klasik yang menggabungkan estetika tradisional dan kenyamanan modern. Dibalut dengan bahan yang tahan lama, kursi ini cocok untuk penggunaan sehari-hari dan dapat melengkapi berbagai gaya interior, dari minimalis hingga klasik.",
    },
    {
      id: 3,
      name: "Clasic Chair",
      category: "Kursi",
      price: 1600000,
      pictures: [
        "https://utfs.io/f/UyKYMyzOlFb2dH53YYnQxswRLT4fm7E5GMP9uvYoNhyplqVJ",
        "https://plus.unsplash.com/premium_photo-1664391899883-59de759c56a8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1612372606404-0ab33e7187ee?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      desc: "Kursi klasik dengan desain elegan yang menonjolkan sentuhan vintage namun tetap nyaman untuk digunakan. Terbuat dari bahan berkualitas tinggi dengan detail yang rapi, kursi ini cocok untuk ruang makan, ruang kerja, atau ruang tamu yang membutuhkan sentuhan klasik.",
    },
    {
      id: 4,
      name: "Modern Chair",
      category: "Kursi",
      price: 3800000,
      pictures: [
        "https://utfs.io/f/UyKYMyzOlFb2rHMlCX3qCdcTxv0UePIR9AJbEB7ZhMVwHluO",
        "https://plus.unsplash.com/premium_photo-1705169612410-50d9576035f7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1680350303578-15118239eb6a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      desc: "Kursi modern dengan desain kontemporer yang dilengkapi dengan fitur penyesuaian untuk meningkatkan kenyamanan. Didesain dengan garis-garis bersih dan bahan premium, kursi ini sangat cocok untuk lingkungan kantor, ruang rapat, atau ruang tamu yang mengutamakan gaya dan fungsi.",
    },
    {
      id: 5,
      name: "Luxury Blue Sofa",
      category: "Sofa",
      price: 4000000,
      pictures: [
        "https://utfs.io/f/UyKYMyzOlFb2bfyiLNg4fduC7gqKHy5DW4RZIN0FUsTn2kP3",
        "https://images.unsplash.com/photo-1584198541667-f790d4f62742?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1723874468810-3147a74bb3a7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1608529271579-4eebc4db1b0e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1516843969861-162ea31e8072?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      desc: "Sofa mewah berwarna biru yang memberikan sentuhan elegan pada ruang tamu Anda. Terbuat dari bahan berkualitas tinggi dengan busa memori yang empuk, sofa ini menawarkan kenyamanan ekstra dan desain yang menawan. Ideal untuk bersantai atau sebagai pusat perhatian di ruang tamu modern.",
    },
    {
      id: 6,
      name: "Cabinet",
      category: "Lemari",
      price: 1700000,
      pictures: ["https://utfs.io/f/UyKYMyzOlFb28clYdSfWBu5Yp1ETJ9vHzceAiXg6V7bOSxof"],
      desc: "Lemari serbaguna dengan desain yang sederhana namun fungsional. Memiliki ruang penyimpanan yang luas dengan rak yang dapat disesuaikan, lemari ini ideal untuk menyimpan berbagai barang dengan rapi. Cocok untuk digunakan di ruang tamu, kamar tidur, atau ruang kerja.",
    },
    {
      id: 7,
      name: "Black Chair",
      category: "Kursi",
      price: 1700000,
      pictures: [
        "https://utfs.io/f/UyKYMyzOlFb2unvvJ505PFyNQOp9gMBS1GYCURkzb7KZJmrI",
        "https://images.unsplash.com/photo-1591565518071-f3c0b81725aa?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1571898223382-0aa3499f0f2a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1700604012496-e7888f924bf3?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1503971116037-1e438143ac4e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      desc: "Kursi hitam yang menawarkan desain modern dan stylish dengan bahan berkualitas tinggi. Didesain untuk memberikan kenyamanan yang optimal dengan fitur yang mendukung postur tubuh, kursi ini cocok untuk berbagai ruang, termasuk kantor, ruang tamu, atau ruang kerja.",
    },
    {
      id: 8,
      name: "Kitchen Set",
      category: "Lemari",
      price: 1700000,
      pictures: ["/assets/product/kitchen-set.png"],
      desc: "Set dapur lengkap yang dirancang untuk memenuhi kebutuhan memasak dan penyimpanan Anda. Dengan desain yang praktis dan fungsional, set dapur ini menyediakan berbagai ruang penyimpanan untuk peralatan memasak dan bahan makanan, menjadikannya pilihan ideal untuk dapur rumah.",
    },
    {
      id: 9,
      name: "Wooden Buffet",
      category: "Buffet",
      price: 1700000,
      pictures: ["https://utfs.io/f/UyKYMyzOlFb2rbYyjX3qCdcTxv0UePIR9AJbEB7ZhMVwHluO"],
      desc: "Buffet kayu dengan desain tradisional yang menghadirkan kehangatan dan keindahan pada ruang makan Anda. Dikenal karena kekuatan dan daya tahannya, buffet ini menyediakan ruang penyimpanan yang luas untuk peralatan makan dan barang-barang lainnya, sambil menambahkan sentuhan estetika yang elegan.",
    },
    {
      id: 10,
      name: "Small Cabinet",
      category: "Lemari",
      price: 1700000,
      pictures: ["https://utfs.io/f/UyKYMyzOlFb23p0zCk1otYWzs8QShwIZ4M0pKbG6iFlOyA1f"],
      desc: "Lemari kecil dengan desain minimalis yang ideal untuk menyimpan barang-barang kecil. Dilengkapi dengan rak dan laci untuk memudahkan organisasi, lemari ini sangat cocok untuk digunakan di ruang tamu, kamar tidur, atau ruang kerja, memberikan solusi penyimpanan yang rapi dan bergaya.",
    },
    {
      id: 11,
      name: "Small Cabinet V2",
      category: "Lemari",
      price: 1700000,
      pictures: ["https://utfs.io/f/UyKYMyzOlFb23p0zCk1otYWzs8QShwIZ4M0pKbG6iFlOyA1f"],
      desc: "Lemari kecil dengan desain minimalis yang ideal untuk menyimpan barang-barang kecil. Dilengkapi dengan rak dan laci untuk memudahkan organisasi, lemari ini sangat cocok untuk digunakan di ruang tamu, kamar tidur, atau ruang kerja, memberikan solusi penyimpanan yang rapi dan bergaya.",
    },
    {
      id: 12,
      name: "Small Cabinet V3",
      category: "Lemari",
      price: 1700000,
      pictures: ["https://utfs.io/f/UyKYMyzOlFb23p0zCk1otYWzs8QShwIZ4M0pKbG6iFlOyA1f"],
      desc: "Lemari kecil dengan desain minimalis yang ideal untuk menyimpan barang-barang kecil. Dilengkapi dengan rak dan laci untuk memudahkan organisasi, lemari ini sangat cocok untuk digunakan di ruang tamu, kamar tidur, atau ruang kerja, memberikan solusi penyimpanan yang rapi dan bergaya.",
    },
    {
      id: 13,
      name: "Small Cabinet V4",
      category: "Lemari",
      price: 1700000,
      pictures: ["https://utfs.io/f/UyKYMyzOlFb23p0zCk1otYWzs8QShwIZ4M0pKbG6iFlOyA1f"],
      desc: "Lemari kecil dengan desain minimalis yang ideal untuk menyimpan barang-barang kecil. Dilengkapi dengan rak dan laci untuk memudahkan organisasi, lemari ini sangat cocok untuk digunakan di ruang tamu, kamar tidur, atau ruang kerja, memberikan solusi penyimpanan yang rapi dan bergaya.",
    },
  ];

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Change page
  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

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
        <div className="w-full h-full bg-black/70">
          <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-6 pt-20 pb-10 h-fit lg:h-[500px] flex flex-col items-center justify-center">
            <h1 className="text-5xl text-white font-bold">Produk Kami</h1>
            <h3 className="text-xl text-white text-center max-w-[883px] mt-8 leading-loose">
              Setiap potongan mebel jati kami dibuat dari bahan pilihan yang tahan lama, memberikan keindahan alami yang
              menambah kemewahan di setiap ruangan.
            </h3>
          </div>
        </div>
      </section>
      {/* end section */}
      {/* product */}
      <section className="w-full bg-white mt-4" id="about">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-6 py-10 md:py-20 flex flex-col gap-4 items-center">
          {/* populer */}
          <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center">
            <h2 className="text-[32px] text-slate-700 font-bold">Paling Populer</h2>
            <div className="flex items-center justify-between w-full md:w-fit md:justify-start mt-6 md:mt-0">
              <div className={`relative w-full md:w-[235px]`}>
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
          <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center mt-24">
            <h2 className="text-[32px] text-slate-700 font-bold">Produk Terbaru</h2>
            <div className="flex items-center mt-4 md:mt-0 group">
              <Link href={"#"} className="text-slate-500 group-hover:text-slate-700 font-semibold">
                Lihat lebih banyak
              </Link>
              <FaArrowRight className="text-slate-500 group-hover:text-slate-700 text-lg ms-2" />
            </div>
          </div>
          <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {currentProducts.map((element, index) => {
              return (
                <ProductCard
                  key={index}
                  id={element?.id}
                  name={element?.name}
                  category={element?.category}
                  price={element?.price}
                  picture={element?.pictures[0]}
                />
              );
            })}
          </div>
          <div className="w-full mt-4-">
            <Pagination currentPage={currentPage} totalPages={totalPages} paginate={paginate} />
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
