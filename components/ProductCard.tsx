'use client';
import { useRouter } from 'next/navigation';

export default function ProductCard({ product }) {
  const router = useRouter();
  return (
    <div onClick={() => router.push(`/product/${product.slug}`)} className="cursor-pointer p-4 border rounded-xl hover:shadow-md">
      <img src={product.image} className="w-full h-40 object-cover" />
      <h3 className="mt-2 text-lg font-semibold">{product.title}</h3>
      <p>${product.price}</p>
    </div>
  );
}
