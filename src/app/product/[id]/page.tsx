"use client";
import ProductCard from "@/app/component/ProductCard";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

function ProductDetail(props: { params: { id: string } }) {
  const { params } = props;
  const id = parseInt(params.id);
  const products = [
    {
      id: 1,
      name: "Modern Arm Chair",
      category: "Kursi",
      price: 1600000,
      picture: "modern-arm-chair.png",
      desc: "Kursi lengan modern yang dirancang dengan bentuk yang ergonomis dan estetika kontemporer. Terbuat dari bahan berkualitas tinggi, kursi ini menawarkan kenyamanan maksimal dengan bantalan empuk yang mendukung postur tubuh dengan baik. Ideal untuk ruang tamu, ruang kerja, atau area lounge.",
    },
    {
      id: 2,
      name: "Brown Chair",
      category: "Kursi",
      price: 1600000,
      picture: "brown-chair.png",
      desc: "Kursi berwarna cokelat dengan desain klasik yang menggabungkan estetika tradisional dan kenyamanan modern. Dibalut dengan bahan yang tahan lama, kursi ini cocok untuk penggunaan sehari-hari dan dapat melengkapi berbagai gaya interior, dari minimalis hingga klasik.",
    },
    {
      id: 3,
      name: "Clasic Chair",
      category: "Kursi",
      price: 1600000,
      picture: "clasic.png",
      desc: "Kursi klasik dengan desain elegan yang menonjolkan sentuhan vintage namun tetap nyaman untuk digunakan. Terbuat dari bahan berkualitas tinggi dengan detail yang rapi, kursi ini cocok untuk ruang makan, ruang kerja, atau ruang tamu yang membutuhkan sentuhan klasik.",
    },
    {
      id: 4,
      name: "Modern Chair",
      category: "Kursi",
      price: 3800000,
      picture: "modern.png",
      desc: "Kursi modern dengan desain kontemporer yang dilengkapi dengan fitur penyesuaian untuk meningkatkan kenyamanan. Didesain dengan garis-garis bersih dan bahan premium, kursi ini sangat cocok untuk lingkungan kantor, ruang rapat, atau ruang tamu yang mengutamakan gaya dan fungsi.",
    },
    {
      id: 5,
      name: "Luxury Blue Sofa",
      category: "Sofa",
      price: 4000000,
      picture: "luxury-blue-sofa.png",
      desc: "Sofa mewah berwarna biru yang memberikan sentuhan elegan pada ruang tamu Anda. Terbuat dari bahan berkualitas tinggi dengan busa memori yang empuk, sofa ini menawarkan kenyamanan ekstra dan desain yang menawan. Ideal untuk bersantai atau sebagai pusat perhatian di ruang tamu modern.",
    },
    {
      id: 6,
      name: "Cabinet",
      category: "Lemari",
      price: 1700000,
      picture: "cabinet.png",
      desc: "Lemari serbaguna dengan desain yang sederhana namun fungsional. Memiliki ruang penyimpanan yang luas dengan rak yang dapat disesuaikan, lemari ini ideal untuk menyimpan berbagai barang dengan rapi. Cocok untuk digunakan di ruang tamu, kamar tidur, atau ruang kerja.",
    },
    {
      id: 7,
      name: "Black Chair",
      category: "Kursi",
      price: 1700000,
      picture: "black-chair.png",
      desc: "Kursi hitam yang menawarkan desain modern dan stylish dengan bahan berkualitas tinggi. Didesain untuk memberikan kenyamanan yang optimal dengan fitur yang mendukung postur tubuh, kursi ini cocok untuk berbagai ruang, termasuk kantor, ruang tamu, atau ruang kerja.",
    },
    {
      id: 8,
      name: "Kitchen Set",
      category: "Lemari",
      price: 1700000,
      picture: "kitchen-set.png",
      desc: "Set dapur lengkap yang dirancang untuk memenuhi kebutuhan memasak dan penyimpanan Anda. Dengan desain yang praktis dan fungsional, set dapur ini menyediakan berbagai ruang penyimpanan untuk peralatan memasak dan bahan makanan, menjadikannya pilihan ideal untuk dapur rumah.",
    },
    {
      id: 9,
      name: "Wooden Buffet",
      category: "Buffet",
      price: 1700000,
      picture: "wooden-buffet.png",
      desc: "Buffet kayu dengan desain tradisional yang menghadirkan kehangatan dan keindahan pada ruang makan Anda. Dikenal karena kekuatan dan daya tahannya, buffet ini menyediakan ruang penyimpanan yang luas untuk peralatan makan dan barang-barang lainnya, sambil menambahkan sentuhan estetika yang elegan.",
    },
    {
      id: 10,
      name: "Small Cabinet",
      category: "Lemari",
      price: 1700000,
      picture: "small-cabinet.png",
      desc: "Lemari kecil dengan desain minimalis yang ideal untuk menyimpan barang-barang kecil. Dilengkapi dengan rak dan laci untuk memudahkan organisasi, lemari ini sangat cocok untuk digunakan di ruang tamu, kamar tidur, atau ruang kerja, memberikan solusi penyimpanan yang rapi dan bergaya.",
    },
  ];

  const [product, setProduct] = useState<any>(null);

  const priceIDR = (price: number) => {
    return price.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  };

  useEffect(() => {
    const res = products.find((items) => items.id == id);
    setProduct(res);
  }, []);

  return (
    <div className="w-full font-urbanist" id="home">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-6 pt-36 pb-10 flex flex-col lg:flex-row justify-center gap-16">
        <div className="w-full lg:w-1/2">
          <div className="w-full">
            <div className="w-full h-[403px] rounded-[20px] bg-slate-100 overflow-hidden p-4">
              {product?.picture ? (
                <Image
                  src={`/assets/product/${product.picture}`}
                  width={500}
                  height={500}
                  alt="small-cabinet"
                  quality={80}
                  priority
                  className="h-full w-auto mx-auto"
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center bg-gray-200">
                  <p className="text-gray-600">No image available</p>
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
              <SwiperSlide className="bg-slate-100 rounded-xl aspect-square">
                {product?.picture ? (
                  <Image
                    src={`/assets/product/${product.picture}`}
                    width={500}
                    height={500}
                    alt="small-cabinet"
                    quality={80}
                    className="h-full w-auto mx-auto"
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center bg-gray-200">
                    <p className="text-gray-600">No image available</p>
                  </div>
                )}
              </SwiperSlide>
              <SwiperSlide className="bg-slate-100 rounded-xl aspect-square">
                {product?.picture ? (
                  <Image
                    src={`/assets/product/${product.picture}`}
                    width={500}
                    height={500}
                    alt="small-cabinet"
                    quality={80}
                    className="h-full w-auto mx-auto"
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center bg-gray-200">
                    <p className="text-gray-600">No image available</p>
                  </div>
                )}
              </SwiperSlide>
              <SwiperSlide className="bg-slate-100 rounded-xl aspect-square">
                {product?.picture ? (
                  <Image
                    src={`/assets/product/${product.picture}`}
                    width={500}
                    height={500}
                    alt="small-cabinet"
                    quality={80}
                    className="h-full w-auto mx-auto"
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center bg-gray-200">
                    <p className="text-gray-600">No image available</p>
                  </div>
                )}
              </SwiperSlide>
              <SwiperSlide className="bg-slate-100 rounded-xl aspect-square">
                {product?.picture ? (
                  <Image
                    src={`/assets/product/${product.picture}`}
                    width={500}
                    height={500}
                    alt="small-cabinet"
                    quality={80}
                    className="h-full w-auto mx-auto"
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center bg-gray-200">
                    <p className="text-gray-600">No image available</p>
                  </div>
                )}
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="w-full">
            <h2 className="text-4xl text-slate-500 font-bold">{product?.name}</h2>
            <h4 className="text-aluminium-500 text-[18px] mt-3">{product?.category}</h4>
            {product?.category && <h3 className="text-slate-700 mt-2 font-bold text-2xl">{priceIDR(product.price)}</h3>}
            <h4 className="text-jumbo-700 mt-2 leading-loose">{product?.desc}</h4>

            <Link
              href={"#"}
              className="bg-slate-600 hover:bg-slate-700 px-8 py-3 flex w-fit text-white font-semibold rounded-full mt-6 items-center"
            >
              <span className="me-2 text-xl">
                <FaWhatsapp />
              </span>
              Hubungi Kami
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-6 pt-10 pb-10">
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <h2 className="text-[32px] text-slate-700 font-bold">Produk Terkait</h2>
          <div className="flex items-center group mt-4 md:mt-0">
            <Link href={"#"} className="text-slate-500 group-hover:text-slate-700 font-semibold">
              Lihat lebih banyak
            </Link>
            <FaArrowRight className="text-slate-500 group-hover:text-slate-700 text-lg ms-2" />
          </div>
        </div>
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          <ProductCard
            id={1}
            name={"Modern Arm Chair"}
            category={"Kursi"}
            price={1600000}
            picture={"modern-arm-chair.png"}
          />
          <ProductCard id={2} name={"Brown Chair"} category={"Kursi"} price={1600000} picture={"brown-chair.png"} />
          <ProductCard id={3} name={"Clasic Chair"} category={"Kursi"} price={1600000} picture={"clasic.png"} />
          <ProductCard id={4} name={"Modern Chair"} category={"Kursi"} price={3800000} picture={"modern.png"} />
          <ProductCard
            id={5}
            name={"Luxury Blue Sofa"}
            category={"Sofa"}
            price={4000000}
            picture={"luxury-blue-sofa.png"}
          />
          <ProductCard id={6} name={"Cabinet"} category={"Lemari"} price={1700000} picture={"cabinet.png"} />
          <ProductCard id={7} name={"Black Chair"} category={"Kursi"} price={1700000} picture={"black-chair.png"} />
          <ProductCard id={8} name={"Kitchen Set"} category={"Lemari"} price={1700000} picture={"kitchen-set.png"} />
          <ProductCard
            id={9}
            name={"Wooden Buffet"}
            category={"buffet"}
            price={1700000}
            picture={"wooden-buffet.png"}
          />
          <ProductCard
            id={10}
            name={"Small Cabinet"}
            category={"Lemari"}
            price={1700000}
            picture={"small-cabinet.png"}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
