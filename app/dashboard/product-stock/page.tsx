// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import ProductTable from "@/components/product/ProductTable";
// import { useGetProductsQuery } from "@/lib/redux/services/jsonServerApi";

// const ProductStock = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const {
//     data: products = [],
//     isLoading,
//     isError,
//     error,
//   } = useGetProductsQuery();

//   const filteredProducts = products.filter((product) =>
//     product.productName.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   if (isLoading) return <p>Loading...</p>;
//   if (isError) {
//     console.log(error);
//     return <p>There was an error</p>;
//   }
//   return (

//     </div>//     <div className="h-[100%] overflow-y-auto pb-8">
//       <div className="flex justify-between items-center pt-6">
//         <h1 className=" text-dark-text text-3xl font-bold">Product Stock</h1>
//         <div className="bg-white flex gap-2 px-4 py-2 items-center border rounded-[25px] w-[300px]">
//           <Image src="/images/search.svg" alt="search" width={20} height={20} />
//           <input
//             type="text"
//             value={searchTerm}
//             placeholder="Search product name"
//             className="w-full bg-transparent text-dark-text opacity-80 text-base focus:outline-none"
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>
//       </div>
//       <section className="mt-6">
//         <ProductTable products={filteredProducts} />
//       </section>
//   );
// };

// export default ProductStock;

"use client";
import React from "react";
import ProductsTable from "@/components/productTable/ProductsTable";
import { useGetProductsQuery } from "@/lib/redux/services/jsonServerApi";
import { columnsProducts } from "@/components/productTable/columns";

const ProductStock = () => {
  const {
    data: products = [],
    isLoading,
    isError,
    error,
  } = useGetProductsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (isError) {
    console.log(error);
    return <p>There was an error</p>;
  }
  return (
    <>
      <ProductsTable columns={columnsProducts} data={products} />
    </>
  );
};

export default ProductStock;
