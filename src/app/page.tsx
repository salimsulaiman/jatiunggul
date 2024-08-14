import React from "react";
import { FaCheck, FaCheckCircle, FaCheckDouble, FaCheckSquare, FaHammer, FaMoneyBill, FaRegCheckCircle, FaShieldAlt, FaShippingFast } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Link from "next/link";
import Image from "next/image";
import { IoMdPricetag, IoMdPricetags } from "react-icons/io";

function page() {
  return (
    <div className="w-full font-urbanist">
      <Navbar />
      {/* hero */}
      <section className="w-full bg-primary-green bg-cover bg-no-repeat bg-center">
        <div className="max-w-screen-lg mx-auto px-6 md:px-8 lg:px-6 pt-20 pb-10 h-fit lg:h-[600px]">
          <div className="flex h-full items-center w-full flex-col lg:flex-row mt-12 lg:mt-0">
            <div className="w-full lg:w-5/12">
              <h1 className="text-white text-5xl leading-tight font-semibold">Sentuhan Alami Gaya Elegan</h1>
              <h4 className="text-base text-white mt-5 text-justify">
                Mebel berkualitas tinggi yang memadukan keindahan alami dengan desain elegan, memberikan nuansa hangat dan estetik untuk setiap ruang.
              </h4>
              <div className="flex w-full">
                <Link href={"/"} className="bg-yellow-400 text-slate-700 hover:bg-yellow-500 py-2 px-5 rounded-full font-medium mt-4 block w-fit me-4">Jelajahi</Link>
                <Link href={"/"} className="bg-transparent text-white hover:bg-white hover:text-slate-700 py-2 px-5 rounded-full font-medium mt-4 block w-fit border-2 border-white">Katalog</Link>
              </div>
            </div>
            <div className="w-full lg:w-7/12 relative h-full">
              <Image src={"/assets/dot2.png"} loading="lazy" height={500} width={500} alt="sofa" quality={100} className="absolute w-28 h-28 lg:h-36 lg:w-36 bottom-4 left-2"/>
              <Image src={"/assets/dot1.png"} loading="lazy" height={500} width={500} alt="sofa" quality={100} className="absolute w-28 h-28 lg:h-56 lg:w-56 top-4 -right-4"/>
              <Image src={"/assets/sofa.png"} loading="lazy" height={500} width={500} alt="sofa" quality={100} className="w-full mt-12 lg:mt-0 relative lg:absolute top-auto lg:top-1/2 -translate-y-0 lg:-translate-y-1/2 left-4 right-0 bottom-0"/>
            </div>
          </div>
        </div>
      </section>
      {/* end section */}
      {/* feature */}
      <section className="w-full bg-white mt-4">
        <div className="max-w-screen-lg mx-auto px-6 md:px-8 lg:px-6 py-20 flex flex-col-reverse lg:flex-row  justify-between gap-4 items-center">
          <div className="w-full lg:w-6/12 flex-grow">
            <h2 className="text-4xl font-bold text-slate-700">Kenapa Harus Kami</h2>
            <h4 className="text-slate-400 mt-4 text-lg">
            Kami menawarkan mebel kayu berkualitas tinggi dengan desain unik dan elegan. Dibuat dengan teliti dari bahan terbaik menjamin keindahan alami, daya tahan, dan kenyamanan maksimal.
            </h4>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
              <div className="w-full flex flex-col">
                <div className="w-12 h-12 bg-slate-300 rounded-full flex items-center justify-center">
                  <FaShippingFast className="w-full text-slate-700"/>
                </div>
                <h4 className="text-slate-700 font-bold mt-2 text-lg">Cepat Dalam Pengiriman</h4>
                <h4 className="text-slate-400 text-base mt-2">Pengiriman cepat dan tepat waktu,  Anda dapat menikmati produk pilihan Anda tanpa penundaan.</h4>
              </div>
              <div className="w-full flex flex-col">
                <div className="w-12 h-12 bg-slate-300 rounded-full flex items-center justify-center">
                  <FaMoneyBill className="w-full text-slate-700"/>
                </div>
                <h4 className="text-slate-700 font-bold mt-2 text-lg">Harga Terjangkau</h4>
                <h4 className="text-slate-400 text-base mt-2">Produk berkualitas tinggi harga ramah di kantong, Mendapatkan nilai terbaik untuk setiap pembelian.</h4>
              </div>
              <div className="w-full flex flex-col mt-6">
                <div className="w-12 h-12 bg-slate-300 rounded-full flex items-center justify-center">
                  <FaCheck className="w-full text-slate-700"/>
                </div>
                <h4 className="text-slate-700 font-bold mt-2 text-lg">Kualitas Terjamin</h4>
                <h4 className="text-slate-400 text-base mt-2">Bahan baku dan proses pembuatan yang teliti untuk memastikan produk tahan lama, kokoh, dan tampil menawan.</h4>
              </div>
              <div className="w-full flex flex-col mt-6">
                <div className="w-12 h-12 bg-slate-300 rounded-full flex items-center justify-center">
                  <FaShieldAlt className="w-full text-slate-700"/>
                </div>
                <h4 className="text-slate-700 font-bold mt-2 text-lg">Menyediakan Garansi</h4>
                <h4 className="text-slate-400 text-base mt-2">Memberikan garansi pada setiap produk mebel kami, menjamin kualitas dan kepuasan bagi semua pelanggan.</h4>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-5/12 relative h-[200px] lg:h-[500px] mb-9 lg:mb-0">
            <Image src={"/assets/dot3.png"} height={500} loading="lazy" width={500} alt="sofa" quality={100} className="absolute h-56 w-56 top-0 -left-5 lg:-left-0"/>
            <Image src={"/assets/dot4.png"} height={500} loading="lazy" width={500} alt="sofa" quality={100} className="absolute h-56 w-56 bottom-0 -right-5 lg:-right-0"/>
            <div className="h-[190px] lg:h-[498px] w-full lg:w-10/12 mx-auto bg-slate-400 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-xl overflow-hidden">
              <Image src={"/assets/about.jpg"} alt="living room" height={1000} width={1000} quality={100} className="object-cover w-full h-full"/>
            </div>
          </div>
        </div>
      </section>
      {/* end section */}
      {/* product */}
      <section className="w-full bg-slate-100 mt-4">
        <div className="max-w-screen-lg mx-auto px-6 md:px-8 lg:px-6 py-20 grid grid-cols-4 gap-6">
          <div className="h-full flex flex-col me-4 justify-between">
            <div className="w-full">
              <h2 className="text-4xl font-extrabold text-slate-700 leading-tight">
                Apa Yang Sedang Kamu Cari?
              </h2>
              <h4 className="text-slate-400 mt-5 text-xl">
                Dapatkan barang terbaru segera dengan harga promo
              </h4>
            </div>
            <div className="flex items-center mb-6 cursor-pointer text-slate-600 hover:text-slate-700">
              <h4 className="font-bold text-xl underline">Selengkapnya</h4>
              <FaArrowRightLong className="text-xl ms-2" />
            </div>
          </div>
          <div className="bg-slate-400 rounded-[4px] flex items-end justify-center relative overflow-hidden group">
            <Image src={"/assets/product/sofa.jpg"} alt="meja makan" height={500} loading="lazy" width={500} quality={80} className="object-cover w-full h-full scale-100 group-hover:scale-110 transition-all ease-in-out duration-500"/>
            <div className="absolute left-0 right-0 top-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 rounded-t-sm">
              <h3 className="text-2xl font-bold mb-5 text-white">Sofa</h3>
            </div>
          </div>
          <div className="bg-slate-400 rounded-[4px] flex items-end justify-center relative overflow-hidden group">
            <Image src={"/assets/product/mejamakan.jpg"} alt="meja makan" height={500} loading="lazy" width={500} quality={80} className="object-cover w-full h-full scale-100 group-hover:scale-110 transition-all ease-in-out duration-500"/>
            <div className="absolute left-0 right-0 top-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 rounded-t-sm">
              <h3 className="text-2xl font-bold mb-5 text-white">Meja</h3>
            </div>
          </div>
          <div className="bg-slate-400 rounded-[4px] flex items-end justify-center relative overflow-hidden group">
            <Image src={"/assets/product/lemari.jpg"} alt="meja makan" height={500} loading="lazy" width={500} quality={80} className="object-cover w-full h-full scale-100 group-hover:scale-110 transition-all ease-in-out duration-500"/>
            <div className="absolute left-0 right-0 top-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 rounded-t-sm">
              <h3 className="text-2xl font-bold mb-5 text-white">Lemari</h3>
            </div>
          </div>
        </div>
      </section>
      {/* end section */}
      {/* gallery */}
      <section className="w-full bg-white mt-4">
        <div className="max-w-screen-lg mx-auto px-6 md:px-8 lg:px-6 py-10">
          <h2 className="text-4xl font-extrabold text-center text-slate-700">
            Galeri Kami
          </h2>
          <h4 className="text-slate-400 text-lg text-center mt-3">
            Beberapa referensi yang bisa kamu lihat untuk mempercantik setiap
            sudut rumahmu
          </h4>
          <div className="grid grid-cols-3 gap-9 mt-12">
            <div className="grid grid-rows-3 gap-9 mt-9">
              <div className="h-[400px] bg-slate-200 overflow-hidden rounded-tl-[66px] group">
                <Image src={"/assets/gallery/image1.jpg"} alt="meja makan" height={500} loading="lazy" width={500} quality={80} className="object-cover w-full h-full scale-100 group-hover:scale-110 transition-all ease-in-out duration-500"/>
              </div>
              <div className="h-[400px] bg-slate-200 overflow-hidden rounded-tl-[66px] group">
                <Image src={"/assets/gallery/image4.jpg"} alt="meja makan" height={500} loading="lazy" width={500} quality={80} className="object-cover w-full h-full scale-100 group-hover:scale-110 transition-all ease-in-out duration-500"/></div>
              <div className="h-[400px] bg-slate-200 overflow-hidden rounded-tl-[66px] group">
                <Image src={"/assets/gallery/image7.jpg"} alt="meja makan" height={500} loading="lazy" width={500} quality={80} className="object-cover w-full h-full scale-100 group-hover:scale-110 transition-all ease-in-out duration-500"/></div>
            </div>
            <div className="grid grid-rows-3">
              <div className="h-[400px] bg-slate-200 overflow-hidden group">
                <Image src={"/assets/gallery/image2.jpg"} alt="meja makan" height={500} loading="lazy" width={500} quality={80} className="object-cover w-full h-full scale-100 group-hover:scale-110 transition-all ease-in-out duration-500"/>  
              </div>
              <div className="h-[400px] bg-slate-200 overflow-hidden group">
                <Image src={"/assets/gallery/image5.jpg"} alt="meja makan" height={500} loading="lazy" width={500} quality={80} className="object-cover w-full h-full scale-100 group-hover:scale-110 transition-all ease-in-out duration-500"/>  
              </div>
              <div className="h-[400px] bg-slate-200 overflow-hidden group">
                <Image src={"/assets/gallery/image8.jpg"} alt="meja makan" height={500} loading="lazy" width={500} quality={80} className="object-cover w-full h-full scale-100 group-hover:scale-110 transition-all ease-in-out duration-500"/>  
              </div>
            </div>
            <div className="grid grid-rows-3 gap-9 mt-9">
              <div className="h-[400px] bg-slate-200 overflow-hidden group rounded-br-[66px]">
                  <Image src={"/assets/gallery/image3.jpg"} alt="meja makan" height={500} loading="lazy" width={500} quality={80} className="object-cover w-full h-full scale-100 group-hover:scale-110 transition-all ease-in-out duration-500"/>  
              </div>
              <div className="h-[400px] bg-slate-200 overflow-hidden group rounded-br-[66px]">
                  <Image src={"/assets/gallery/image6.jpg"} alt="meja makan" height={500} loading="lazy" width={500} quality={80} className="object-cover w-full h-full scale-100 group-hover:scale-110 transition-all ease-in-out duration-500"/>  
              </div>
              <div className="h-[400px] bg-slate-200 overflow-hidden group rounded-br-[66px]">
                  <Image src={"/assets/gallery/image9.jpg"} alt="meja makan" height={500} loading="lazy" width={500} quality={80} className="object-cover w-full h-full scale-100 group-hover:scale-110 transition-all ease-in-out duration-500"/>  
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end section */}
      {/* maps */}
      <section className="w-full bg-primary-green mt-4">
        <div className="max-w-screen-lg mx-auto px-6 md:px-8 lg:px-6 py-20 h-[500px] overflow-hidden">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1980.1804652108451!2d109.0453554!3d-6.9666785!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fbc627b19d213%3A0xb609be60caf06ec8!2sJp%20Jati%20Unggul%20Meubel!5e0!3m2!1sen!2sid!4v1723366950714!5m2!1sen!2sid" width="600" height="450" className="w-full h-full rounded-xl" allowFullScreen={true}  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
      {/* end section */}
      <Footer />
    </div>
  );
}

export default page;
