import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";
import Loading from "./Loading";
import { useProductsContext } from "../context/products_context";

const ProductList = () => {
  const { filterdProducts: products, gridView } = useFilterContext();
  const { productsLoading } = useProductsContext();
  if (productsLoading) return <Loading />;
  if (products.length === 0) return <h4>Sorry no products found...</h4>;
  return (
    <>
      {gridView ? (
        <GridView products={products} />
      ) : (
        <ListView products={products} />
      )}
    </>
  );
};

export default ProductList;
