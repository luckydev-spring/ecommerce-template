import { fakeProducts } from "@/lib/fakeProducts";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <main className="grid grid-cols-2 gap-4 p-4">
      {fakeProducts.map((p) => <ProductCard key={p.id} product={p} />)}
    </main>
  );
}
