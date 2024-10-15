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
