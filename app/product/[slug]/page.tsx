import { fakeProducts } from "@/lib/fakeProducts";

export default function ProductPage({ params }) {
  const product = fakeProducts.find(p => p.slug === params.slug);
  if (!product) return <p>Product not found</p>;
  return (
    <div className="p-4">
      <img src={product.image} className="w-full h-60 object-cover mb-4" />
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <p className="text-lg">${product.price}</p>
    </div>
  );
}
