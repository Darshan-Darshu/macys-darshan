import ProductList from "./ProductList";

async function Products() {
  const response = await fetch(
    `${process.env.SERVICE_URL}/product`,
    {
      cache: "no-cache",
      next: { tags: ["product"] },
    },
  );

  const products = await response.json();
  return <ProductList products={products} />;
}

export default Products;
