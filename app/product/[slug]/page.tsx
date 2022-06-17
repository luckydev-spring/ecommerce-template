'use client';
import { fakeProducts } from "@/lib/fakeProducts";

export default function ProductPage({ params }) {
  const product = fakeProducts.find(p => p.slug === params.slug);
  const addToCart = () => {
    const stored = localStorage.getItem('cart');
    const cart = stored ? JSON.parse(stored) : [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Added to cart!');
  };

  if (!product) return <p>Product not found</p>;

  return (
    <div className="p-4">
      <img src={product.image} className="w-full h-60 object-cover mb-4" />
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <p className="text-lg">${product.price}</p>
      <button onClick={addToCart} className="mt-4 bg-black text-white py-2 px-4 rounded">
        Add to Cart
      </button>
    </div>
  );
}
