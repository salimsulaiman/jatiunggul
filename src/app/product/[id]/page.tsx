"use client";
import ProductCard from "@/app/component/ProductCard";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import ProgressiveImage from "@/app/component/ProgressiveImage";

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

function ProductDetail(props: { params: { id: string } }) {
  const { params } = props;
  const id = params.id;

  const [currentPicture, setCurrentPicture] = useState<string>("");
  const [isLoading, setLoading] = useState(true);
  const [isLoadingProducts, setLoadingProducts] = useState(true);
  const [data, setData] = useState<Product | null>(null);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch(`/api/product/${id}`, {
      cache: "force-cache",
      next: {
        revalidate: 10,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        if (data && data?.pictures.length > 0) {
          setCurrentPicture(data.pictures[0]);
        }
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    fetch(`/api/product/`, {
      cache: "force-cache",
      next: {
        revalidate: 10,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoadingProducts(false);
      });
  }, []);

  const changePicture = (element: string) => {
    setCurrentPicture(element);
  };

  const [product, setProduct] = useState<any>(null);

  const priceIDR = (price: number) => {
    return price.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  };

  const handleChat = () => {
    fetch(`/api/product/popular`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // mengatur header untuk JSON
      },
      body: JSON.stringify({
        productId: id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {});
  };

  return (
    <div className="w-full font-urbanist" id="home">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-6 pt-36 pb-10 flex flex-col lg:flex-row justify-center gap-16">
        {isLoading ? (
          <div className="w-full h-20 flex items-center justify-center">
            <span className="loading loading-dots loading-lg"></span>
          </div>
        ) : (
          <>
            <div className="w-full lg:w-1/2">
              <div className="w-full">
                <div className="w-full h-[403px] rounded-[20px] bg-slate-100 overflow-hidden relative">
                  {data?.pictures && currentPicture ? (
                    <ProgressiveImage
                      src={currentPicture}
                      alt={data?.name || "Product Image"}
                      width={500}
                      height={500}
                      quality={80}
                      className={"h-full w-full object-contain"}
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center animate-pulse">
                      {/* <p className="text-gray-600">No image available</p> */}
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full mt-6">
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  freeMode={true}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[FreeMode, Pagination]}
                >
                  {data?.pictures.map((element: any, index: number) => {
                    return (
                      <SwiperSlide
                        className={`bg-slate-100 rounded-xl aspect-square relative overflow-hidden cursor-pointer  ${
                          element == currentPicture && "border-4 border-aluminium-500"
                        }`}
                        key={index}
                        onClick={() => changePicture(element)}
                      >
                        {element ? (
                          <ProgressiveImage
                            src={element}
                            alt={element}
                            width={500}
                            height={500}
                            quality={20}
                            className={"h-full w-full absolute object-cover object-center mx-auto"}
                            loading="lazy"
                          />
                        ) : (
                          <div className="h-full w-full flex items-center justify-center animate-pulse">
                            {/* <p className="text-gray-600">No image available</p> */}
                          </div>
                        )}
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="w-full">
                <h2 className="text-4xl text-slate-500 font-bold">{data?.name}</h2>
                <h4 className="text-aluminium-500 text-[18px] mt-3">{data?.category?.name}</h4>
                {data?.price && <h3 className="text-slate-700 mt-2 font-bold text-2xl">{priceIDR(data?.price)}</h3>}
                <h4 className="text-jumbo-700 mt-2 leading-loose">{data?.desc}</h4>

                <Link
                  target="_blank"
                  href={`//api.whatsapp.com/send?phone=081910596773&text=Permisi, saya ingin menanyakan produk *${data?.name}*`}
                  className="bg-slate-600 hover:bg-slate-700 px-8 py-3 flex w-fit text-white font-semibold rounded-full mt-6 items-center"
                  onClick={handleChat}
                >
                  <span className="me-2 text-xl">
                    <FaWhatsapp />
                  </span>
                  Hubungi Kami
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-6 pt-10 pb-10">
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <h2 className="text-[32px] text-slate-700 font-bold">Produk Terkait</h2>
          <div className="flex items-center group mt-4 md:mt-0">
            <Link href={"/product/search?product"} className="text-slate-500 group-hover:text-slate-700 font-semibold">
              Lihat lebih banyak
            </Link>
            <FaArrowRight className="text-slate-500 group-hover:text-slate-700 text-lg ms-2" />
          </div>
        </div>
        {isLoadingProducts ? (
          <div className="w-full h-20 flex items-center justify-center">
            <span className="loading loading-dots loading-lg"></span>
          </div>
        ) : (
          <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {products
              .filter((element) => element?.categoryId === data?.categoryId && element?.id !== data?.id)
              .map((element, index) => {
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
        )}
      </div>
    </div>
  );
}

export default ProductDetail;
