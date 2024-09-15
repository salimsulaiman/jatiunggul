import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

interface ProductDetail {
  name: string;
  category: string;
  price: number;
}
function ProductCard({ name, category, price }: ProductDetail) {
  let priceIDR = (price: number) => {
    return price.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  };
  return (
    <div className=" bg-alabaster-50 rounded-xl border-2 shadow-md border-seashell-100 transition-all ease-in-out duration-500 flex flex-col justify-between">
      <div className="w-full p-2">
        <div className="w-full h-[215px] bg-seashell-200 rounded-t-xl overflow-hidden">
          <Image
            src={"/assets/product/set-meja-makan.jpg"}
            alt="set-meja-makan.jpg"
            width={500}
            height={500}
            quality={50}
            className="object-cover w-full h-full object-center"
          />
        </div>
        <h3 className="text-slate-500 mt-4 text-lg line-clamp-1 font-bold px-5">
          {name}
        </h3>
        <h3 className="text-heather-300 mt-1 text mx-5 text-sm">{category}</h3>
        <h3 className="text-slate-500 mt-1 text px-5 font-extrabold">
          {priceIDR(price)}
        </h3>
      </div>
      <Link
        href={"#"}
        className="py-[7px] px-5 bg-slate-600 hover:bg-slate-700 text-white text-[14px] rounded-[10px] mt-1 z-10 text-center mb-5 mx-5"
      >
        Selengkapnya
      </Link>
    </div>
  );
}

export default ProductCard;
