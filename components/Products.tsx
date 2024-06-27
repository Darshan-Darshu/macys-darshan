import ProductList from "./ProductList";

async function Products() {
  const response = await fetch(
    `${process.env.SERVICE_URL}/product`,
    {
      next: { revalidate: 3600 },
    },
  );

  const products = await response.json();
  return <ProductList products={products} />;
}

export default Products;
