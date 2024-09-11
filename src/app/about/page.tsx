import React from "react";

function About() {
  return (
    <div className="w-full font-urbanist" id="home">
      {/* product */}
      {/* hero */}
      <section className="w-full bg-about bg-cover bg-no-repeat bg-center">
        <div className="w-full h-full bg-black/70">
          <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-6 pt-20 pb-10 h-fit lg:h-[500px] flex flex-col items-center justify-center">
            <h1 className="text-5xl text-white font-bold">Tentang Kami</h1>
            <h3 className="text-xl text-white text-center max-w-[883px] mt-8 leading-loose">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.
              Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
              tellus..
            </h3>
          </div>
        </div>
      </section>
      {/* end section */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-6 pt-10 pb-10 flex gap-20 mt-20 items-center">
        <div className="w-5/12 grid grid-cols-2 gap-6">
          <div className="h-[238px] bg-slate-200 mt-[44px] rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[10px]"></div>
          <div className="h-[238px] bg-slate-200 rounded-tl-[10px] rounded-tr-[50px] rounded-br-[10px]"></div>
          <div className="h-[238px] bg-slate-200 rounded-tl-[10px] rounded-br-[10px] rounded-bl-[50px]"></div>
          <div className="h-[238px] bg-slate-200 -mt-[44px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[10px]"></div>
        </div>
        <div className="w-7/12">
          <h3 className="text-heather-300 font-bold text-xl">Sejak 2002</h3>
          <h2 className="text-outer-space-950 font-bold text-[40px]">PT Jati Unggul Perkasa</h2>
          <h4 className="text-boulder-500 mt-4 leading-loose">
            Perusahaan yang bergerak di bidang pembuatan dan penjualan barang furniture berkualitas tinggi, dengan
            spesialisasi pada penggunaan kayu pilihan, terutama kayu jati. Jati Unggul telah menjadi salah satu pemain
            terdepan dalam industri furniture di Indonesia, dikenal karena komitmennya terhadap kualitas, keindahan, dan
            ketahanan produk.
          </h4>
          <h4 className="text-boulder-500 mt-8 leading-loose">
            <span className="text-outer-space-950 font-semibold">
              Kami terus berinovasi untuk menghadirkan produk-produk yang tidak hanya memenuhi standar estetika, tetapi
              juga memiliki nilai fungsional tinggi.
            </span>{" "}
            Setiap furnitur yang dihasilkan melalui proses produksi yang teliti dan pengawasan kualitas yang ketat,
            memastikan bahwa hanya produk terbaik yang sampai ke tangan pelanggan.
          </h4>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-6 pt-10 pb-10 flex gap-20 items-center">
        <div className="w-full grid grid-cols-3 gap-[44px]">
          <div className="flex flex-col justify-between">
            <div className="w-full">
              <h1 className="text-[40px] text-outer-space-950 font-bold">Perusahaan Apakah Kami?</h1>
              <h4 className="text-base text-boulder-500 leading-loose mt-4">
                Perusahaan kami berfokus pada industri mebel, menghadirkan furnitur berkualitas tinggi dengan desain
                inovatif yang mempercantik ruangan dan mencerminkan gaya hidup elegan Anda.
              </h4>
            </div>
            <div className="w-full">
              <h3 className="text-xl font-bold text-outer-space-950">PT Jati Unggul Perkasa</h3>
              <h4 className="text-base text-boulder-500 leading-loose">Furniture Industry</h4>
            </div>
          </div>
          <div className="h-auto p-4 bg-zinc-100 rounded-lg">
            <div className="w-full h-[217px] bg-slate-300 rounded-t-lg overflow-hidden relative">
              <div className="w-full bg-gradient-to-t from-zinc-100 to-transparent h-10 absolute bottom-0"></div>
            </div>
            <h3 className="text-xl font-bold text-outer-space-950 mt-2">Bahan Baku Pilihan</h3>
            <h4 className="text-boulder-500 mt-2">
              Kami hanya menggunakan bahan baku berkualitas tinggi yang dipilih secara selektif dalam setiap tahap
              proses produksi.
            </h4>
          </div>
          <div className="h-auto p-4 bg-zinc-100 rounded-lg">
            <div className="w-full h-[217px] bg-slate-300 rounded-t-lg overflow-hidden relative">
              <div className="w-full bg-gradient-to-t from-zinc-100 to-transparent h-10 absolute bottom-0"></div>
            </div>
            <h3 className="text-xl font-bold text-outer-space-950 mt-2">Kualitas Produk Terjaga </h3>
            <h4 className="text-boulder-500 mt-2">
              Kualitas produk kami selalu terjaga melalui pengawasan ketat dan proses kontrol mutu yang dilakukan di
              setiap tahap produksi.
            </h4>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-6 mb-28">
        <div className="w-full relative h-[262px] rounded-tl-[50px] rounded-br-[50px] bg-quotes bg-center bg-cover overflow-hidden mt-24">
          <div className="w-full h-full bg-black/50 flex justify-center items-center">
            <h4 className="text-white text-xl text-center max-w-[770px] font-light italic leading-loose">
              <q>
                Furniture pilihan bukan hanya tentang gaya, tapi juga tentang kenyamanan dan kualitas yang menemani
                setiap momen berharga di rumah Anda.
              </q>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
