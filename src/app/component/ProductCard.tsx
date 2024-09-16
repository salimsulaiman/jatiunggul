import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

interface ProductDetail {
  id: number;
  name: string;
  category: string;
  price: number;
  picture: string;
}
function ProductCard({ id, name, category, price, picture }: ProductDetail) {
  const priceIDR = (price: number) => {
    return price.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  };
  return (
    <div className=" bg-white rounded-xl border-seashell-100 transition-all ease-in-out duration-500 flex flex-col justify-between">
      <div className="w-full p-2">
        <div className="w-full h-[215px] rounded-t-xl overflow-hidden">
          <Image
            src={`/assets/product/${picture}`}
            alt="set-meja-makan.jpg"
            width={500}
            height={500}
            quality={50}
            className="h-full w-auto mx-auto"
          />
        </div>
        <h3 className="text-slate-500 mt-4 text-base line-clamp-1 px-5">{name}</h3>
        <h3 className="text-heather-300 mt-1 text mx-5 text-sm">{category}</h3>
        <h3 className="text-slate-500 mt-1 px-5 font-bold line-clamp-1">{priceIDR(price)}</h3>
      </div>
      <Link
        href={`/product/${id}`}
        className="py-[7px] px-5 bg-slate-600 hover:bg-slate-700 text-white text-[14px] rounded-[10px] mt-1 z-10 text-center mb-5 mx-5"
      >
        Selengkapnya
      </Link>
    </div>
  );
}

export default ProductCard;
