import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function page() {
  return (
    <div className="w-full font-urbanist" id="home">
      {/* product */}
      {/* hero */}
      <section className="w-full bg-hero bg-cover bg-no-repeat bg-center">
        <div className="w-full h-full bg-black/70">
          <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-6 pt-20 pb-10 h-fit lg:h-[500px] flex flex-col items-center justify-center">
            <h1 className="text-5xl text-white font-bold">Kontak Kami</h1>
            <h3 className="text-xl text-white text-center max-w-[883px] mt-8">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
              mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus..
            </h3>
          </div>
        </div>
      </section>
      {/* end section */}
      {/* product */}
      <section className="w-full bg-white mt-4" id="about">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-6 py-10 md:py-20 flex flex-col lg:flex-row gap-10 items-center">
          <div className="w-1/2">
            <h1 className="text-4xl text-slate-700 font-bold">
              Hubungi Kami Segera
            </h1>
            <h4 className="text-slate-500 mt-4">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
              mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus..
            </h4>
            <h3 className="text-lg text-slate-700 font-bold mt-14">Kontak</h3>
            <div className="w-full flex-col">
              <div className="w-full flex gap-3 items-center mt-4">
                <FaLocationDot className="text-[25px] text-slate-700" />
                <h4 className="text-base text-slate-500">
                  Jalan Raya Jatibarang, Dukuhmaja, Songgom, Brebes, Jawa Tengah
                </h4>
              </div>
              <div className="w-full flex gap-3 items-center mt-4">
                <MdEmail className="text-[25px] text-slate-700" />
                <h4 className="text-base text-slate-500">
                  contact@jatiunggul.com
                </h4>
              </div>
              <div className="w-full flex gap-3 items-center mt-4">
                <FaPhoneAlt className="text-[25px] text-slate-700" />
                <h4 className="text-base text-slate-500">+62 877 7642 1079</h4>
              </div>
            </div>
            <h3 className="text-lg text-slate-700 font-bold mt-14">
              Sosial Media
            </h3>
            <div className="w-full flex flex-row gap-7">
              <div className="flex gap-3 items-center mt-4">
                <FaLocationDot className="text-[25px] text-slate-700" />
                <h4 className="text-base text-slate-500">Jati Unggul</h4>
              </div>
              <div className="flex gap-3 items-center mt-4">
                <MdEmail className="text-[25px] text-slate-700" />
                <h4 className="text-base text-slate-500">jatiunggul_perkasa</h4>
              </div>
              <div className="flex gap-3 items-center mt-4">
                <FaPhoneAlt className="text-[25px] text-slate-700" />
                <h4 className="text-base text-slate-500">Jati Unggul</h4>
              </div>
            </div>
          </div>
          <div className="w-1/2 bg-white-lilac-50 p-7">
            <h2 className="text-slate-700 font-bold text-xl">Kirimkan Pesan</h2>
            <form action="" className="w-full">
              <input
                type="text"
                name=""
                id=""
                className="w-full rounded-md text-base px-[21px] py-[12px] mt-5 placeholder:text-slate-400"
                placeholder="Nama"
              />
              <input
                type="email"
                name=""
                id=""
                className="w-full rounded-md text-base px-[21px] py-[12px] mt-5 placeholder:text-slate-400"
                placeholder="Email"
              />
              <textarea
                rows={6}
                name=""
                id=""
                className="w-full rounded-md text-base px-[21px] py-[12px] mt-5 placeholder:text-slate-400"
                placeholder="Pesan"
              />
              <div className="w-full flex justify-end mt-4">
                <button className="bg-slate-700 text-white rounded-lg px-[39px] py-[12px]">
                  Kirim
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-6 pb-20 flex flex-col lg:flex-row gap-10 items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1980.1804652108451!2d109.0453554!3d-6.9666785!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fbc627b19d213%3A0xb609be60caf06ec8!2sJp%20Jati%20Unggul%20Meubel!5e0!3m2!1sen!2sid!4v1723366950714!5m2!1sen!2sid"
            width="600"
            height="450"
            className="w-full h-[560px] rounded-xl"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      {/* end product */}
    </div>
  );
}

export default page;
