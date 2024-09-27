"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import ProductCard from "@/app/component/ProductCard";
import { useRouter } from "next/navigation";
import Pagination from "@/app/component/Pagination";

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

function SearchProduct(props: { searchParams: { product: string } }) {
  const { searchParams } = props;
  const searchProduct = searchParams.product;
  const router = useRouter();

  const [category, setCategory] = useState<string>("Semua");
  const [search, setSearch] = useState<string>("");

  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage = 10;

  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [isLoadingCategory, setLoadingCategory] = useState(true);

  useEffect(() => {
    fetch("/api/product", {
      cache: "force-cache",
      next: {
        revalidate: 10,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch("/api/category", {
      cache: "force-cache",
      next: {
        revalidate: 10,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoadingCategory(false);
      });
  }, []);

  const filteredProducts = products?.filter((product) => {
    // Filter by search term
    const matchesSearch = product.name.toLocaleLowerCase().includes(searchProduct.toLocaleLowerCase());

    // Filter by category
    const matchesCategory = category === "Semua" || product?.category?.name === category;

    // Return true if both search and category match
    return matchesSearch && matchesCategory;
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Change page
  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

  const handleCategoryChange = (e: any) => {
    setCategory(e.target.value);
    const filterButton = document.getElementById("filterButton") as HTMLDialogElement;
    filterButton?.close();
    setCurrentPage(1);
  };

  const handleSearch = (e: any) => {
    e.preventDefault();
    router.push(`/product/search?product=${search}`);
    setSearch("");
    setCategory("Semua");
    setCurrentPage(1);
  };

  return (
    <div className="w-full font-urbanist" id="home">
      {/* product */}
      <section className="w-full bg-white py-4" id="about">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-6 py-10 md:py-20 flex flex-col gap-4 items-center mt-8">
          {/* populer */}
          <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div className="w-fit text-slate-500">
              {searchProduct.length == 0 ? (
                <h2 className="text-[32px] text-slate-700 font-bold">Produk</h2>
              ) : (
                <>
                  <h4 className="text-slate-700">Hasil Pencarian</h4>
                  <h2 className="text-2xl text-slate-700 font-bold">{searchProduct}</h2>
                  {category && <div className="w-fit px-4 py-1 mt-1 rounded-lg text-sm bg-slate-200">{category}</div>}
                </>
              )}
            </div>
            <div className="flex items-center justify-between w-full md:w-fit md:justify-start mt-6 md:mt-0">
              <div className={`relative w-full md:w-[235px]`}>
                <form onSubmit={handleSearch}>
                  <input
                    type="search"
                    className="mx-auto w-full bg-white-bone rounded-full px-[20px] py-[13px] placeholder:text-rock-blue-500 placeholder:font-medium font-bold text-slate-500"
                    placeholder="Cari produk..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </form>
                <FaSearch
                  className="absolute right-6 top-1/2 -translate-y-1/2 cursor-pointer text-slate-400 hover:text-slate-700 text-[23px]"
                  onClick={handleSearch}
                />
              </div>
              <div
                className="h-[47px] w-[47px] p-3 bg-white-bone rounded-full ms-2 cursor-pointer hover:bg-white-bone-100 flex items-center justify-center"
                onClick={() => {
                  const filterButton = document.getElementById("filterButton") as HTMLDialogElement;
                  filterButton?.showModal();
                }}
              >
                <Image
                  width={24}
                  height={24}
                  alt="filter"
                  src={"/assets/icons/filter.png"}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <dialog id="filterButton" className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">Filter Kategori</h3>
                  <select
                    className="select select-bordered w-full mt-4"
                    value={category}
                    onChange={handleCategoryChange}
                  >
                    <option disabled value={""}>
                      Pilih Kategori
                    </option>
                    <option value={"Semua"}>Semua</option>
                    {categories?.map((element: any, index: number) => {
                      return (
                        <option key={index} value={`${element?.name}`}>
                          {element?.name}
                        </option>
                      );
                    })}
                    {/* <option value={"Lemari"}>Lemari</option>
                    <option value={"Kursi"}>Kursi</option>
                    <option value={"Sofa"}>Sofa</option>
                    <option value={"Buffet"}>Buffet</option>
                    <option value={"Meja"}>Meja</option> */}
                  </select>
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
            </div>
          </div>
          {isLoading ? (
            <div className="w-full h-20 flex items-center justify-center">
              <span className="loading loading-dots loading-lg"></span>
            </div>
          ) : currentProducts.length === 0 ? (
            <div className="w-full flex flex-col items-center justify-center">
              <Image
                src={"/assets/productNotfound.png"}
                alt="Not found"
                width={1000}
                height={1000}
                quality={100}
                className="w-64"
              />
              <h2 className="text-slate-700 font-medium text-2xl mt-6">Maaf, produk yang kamu cari tidak tersedia</h2>
              <h3 className="text-slate-400 font-normal text-xl mt-2">
                Coba gunakan kata kunci lain atau ubah filter pencarianmu
              </h3>
            </div>
          ) : (
            <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {currentProducts.map((element, index) => (
                <ProductCard
                  key={index}
                  id={element?.id}
                  name={element?.name}
                  category={element?.category?.name}
                  price={element?.price}
                  picture={element?.pictures[0]}
                />
              ))}
            </div>
          )}

          <div className="w-full mt-4-">
            <Pagination currentPage={currentPage} totalPages={totalPages} paginate={paginate} />
          </div>
        </div>
      </section>
      {/* end product */}
    </div>
  );
}

export default SearchProduct;
