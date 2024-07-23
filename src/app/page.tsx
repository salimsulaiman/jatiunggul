import React from "react";
import Navbar from "./component/Navbar";
import { FaCheckCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

function page() {
  return (
    <div className="w-full font-urbanist">
      <Navbar />
      {/* hero */}
      <section className="w-full h-[1100px] bg-hero bg-cover bg-no-repeat bg-center">
        <div className="bg-black/60 w-full h-full flex items-center justify-center flex-col">
          <h1 className="text-white text-6xl max-w-2xl text-center leading-tight">
            Rumah Idaman Dengan Perabotan Pilihan
          </h1>
          <h4 className="text-xl text-white max-w-3xl text-center mt-8">
            Mebel berkualitas tinggi yang memadukan keindahan alami dengan
            desain elegan, memberikan nuansa hangat dan estetik untuk setiap
            ruang.
          </h4>
          <button className="bg-white/40 rounded-lg px-12 py-4 text-white text-xl mt-8 hover:bg-white/50">
            Jelajahi
          </button>
        </div>
      </section>
      {/* end section */}
      {/* feature */}
      <section className="w-full bg-white mt-4">
        <div className="max-w-screen-xl mx-auto p-4 py-20 flex  justify-center">
          <div className="w-1/2 h-full flex mt-6">
            <div className="bg-slate-200 h-[410px] w-6/12 mt-20 rounded-2xl"></div>
            <div className="bg-slate-200 h-[410px] w-3/12 ms-8 rounded-2xl"></div>
          </div>
          <div className="w-1/2 h-full flex flex-col justify-center ms-4">
            <div className="w-full">
              <h1 className="text-slate-800 text-[40px] font-bold">
                Kenapa Harus Kami
              </h1>
              <h4 className="text-slate-400 text-xl text-justify">
                Kami menawarkan mebel kayu berkualitas tinggi dengan desain unik
                dan elegan. Dibuat dengan teliti dari bahan terbaik menjamin
                keindahan alami, daya tahan, dan kenyamanan maksimal.
              </h4>
              <div className="flex mt-4">
                <FaCheckCircle className="text-4xl me-4 -mt-1" />
                <div className="grow">
                  <h4 className="font-bold text-slate-800 text-xl">
                    Kualitas Terjamin
                  </h4>
                  <h4 className="text-slate-400 text-xl text-justify">
                    Bahan baku dan proses pembuatan yang teliti untuk memastikan
                    produk tahan lama, kokoh, dan tampil menawan.
                  </h4>
                </div>
              </div>
              <div className="flex mt-4">
                <FaCheckCircle className="text-4xl me-4 -mt-1" />
                <div className="grow">
                  <h4 className="font-bold text-slate-800 text-xl">
                    Harga Terjangkau
                  </h4>
                  <h4 className="text-slate-400 text-xl text-justify">
                    Produk berkualitas tinggi harga ramah di kantong,
                    Mendapatkan nilai terbaik untuk setiap pembelian.
                  </h4>
                </div>
              </div>
              <div className="flex mt-4">
                <FaCheckCircle className="text-4xl me-4 -mt-1" />
                <div className="grow">
                  <h4 className="font-bold text-slate-800 text-xl">
                    Garansi Terpercaya
                  </h4>
                  <h4 className="text-slate-400 text-xl text-justify">
                    Memberikan garansi pada setiap produk mebel kami, menjamin
                    kualitas dan kepuasan bagi semua pelanggan.
                  </h4>
                </div>
              </div>
              <div className="flex mt-4">
                <FaCheckCircle className="text-4xl me-4 -mt-1" />
                <div className="grow">
                  <h4 className="font-bold text-slate-800 text-xl">
                    Pengiriman Tepat Waktu
                  </h4>
                  <h4 className="text-slate-400 text-xl text-justify">
                    Pengiriman cepat, aman, dan tepat waktu, Anda dapat
                    menikmati produk pilihan Anda tanpa penundaan.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end section */}
      {/* product */}
      <section className="w-full bg-white mt-4">
        <div className="max-w-screen-xl mx-auto p-4 py-20 grid grid-cols-4 gap-6 h-[570px]">
          <div className="h-full flex flex-col me-4 justify-between">
            <div className="w-full">
              <h2 className="text-5xl font-bold text-slate-800 leading-tight">
                Apa Yang Sedang Kamu Cari?
              </h2>
              <h4 className="text-slate-400 mt-5 text-xl">
                Dapatkan barang terbaru segera dengan harga promo
              </h4>
            </div>
            <div className="flex items-center mb-6 cursor-pointer text-slate-700 hover:text-slate-800">
              <h4 className="font-bold text-xl underline">Selengkapnya</h4>
              <FaArrowRightLong className="text-xl ms-2" />
            </div>
          </div>
          <div className="bg-slate-400 rounded-[4px] flex items-end justify-center">
            <h3 className="text-3xl mb-5 font-bold text-white">Sofa</h3>
          </div>
          <div className="bg-slate-400 rounded-[4px] flex items-end justify-center">
            <h3 className="text-3xl mb-5 font-bold text-white">Meja</h3>
          </div>
          <div className="bg-slate-400 rounded-[4px] flex items-end justify-center">
            <h3 className="text-3xl mb-5 font-bold text-white">Lemari</h3>
          </div>
        </div>
      </section>
      {/* end section */}
    </div>
  );
}

export default page;
