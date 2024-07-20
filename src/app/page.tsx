import React from "react";
import Navbar from "./component/Navbar";

function page() {
  return (
    <div className="w-full">
      <Navbar />
      {/* hero */}
      <section className="w-full h-[1200px] bg-hero bg-cover bg-no-repeat bg-center">
        <div className="bg-black/50 w-full h-full flex items-center justify-center flex-col">
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
    </div>
  );
}

export default page;
