import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

function ProductDetail() {
  return (
    <div className="w-full font-urbanist" id="home">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-6 pt-36 pb-10 flex justify-center gap-16">
        <div className="w-1/2">
          <div className="w-full">
            <div className="w-full h-[403px] rounded-[20px] bg-slate-100 overflow-hidden">
              <Image
                src={"/assets/product/small-cabinet.png"}
                width={500}
                height={500}
                alt="small-cabinet"
                quality={80}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="w-full overflow-x-auto whitespace-nowrap gap-[33px] space-x-8 mt-8 scroll-smooth scrollbar-thumb-slate-400 scrollbar-track-transparent scrollbar-thin">
              <div className="inline-block w-[160px] h-[160px] bg-slate-100 rounded-[20px] overflow-hidden">
                <Image
                  src={"/assets/product/small-cabinet.png"}
                  width={500}
                  height={500}
                  alt="small-cabinet"
                  quality={80}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="inline-block w-[160px] h-[160px] bg-slate-100 rounded-[20px] overflow-hidden">
                <Image
                  src={"/assets/product/small-cabinet.png"}
                  width={500}
                  height={500}
                  alt="small-cabinet"
                  quality={80}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="inline-block w-[160px] h-[160px] bg-slate-100 rounded-[20px] overflow-hidden">
                <Image
                  src={"/assets/product/small-cabinet.png"}
                  width={500}
                  height={500}
                  alt="small-cabinet"
                  quality={80}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="inline-block w-[160px] h-[160px] bg-slate-100 rounded-[20px] overflow-hidden">
                <Image
                  src={"/assets/product/small-cabinet.png"}
                  width={500}
                  height={500}
                  alt="small-cabinet"
                  quality={80}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div className="w-full">
            <h2 className="text-4xl text-slate-500 font-bold">Small Cabinet - Brown</h2>
            <div className="text-aluminium-500 text-[18px] mt-3">Meja dan Lemari</div>
            {/* <div className="w-[194px] h-[49px] bg-athens-gray-100 rounded-lg mt-6 flex items-center justify-center">
              <text className="text-slate-500 text-2xl font-bold">Rp500.000,00</text>
            </div> */}
            <div className="w-full">
              <h4 className="text-jumbo-700 mt-6">
                Lemari mungil dengan desain minimalis berwarna cokelat, cocok untuk menyimpan barang-barang kecil sambil
                mempercantik ruangan.
              </h4>
            </div>
            <Link
              href={"#"}
              className="bg-slate-600 hover:bg-slate-700 px-[47px] py-3 block w-fit text-white font-semibold rounded-[10px] mt-12"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-6 pt-10 pb-10">
        <div className="w-full flex justify-between items-center mb-4">
          <h2 className="text-[32px] text-slate-700 font-bold">Produk Terkait</h2>
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
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
