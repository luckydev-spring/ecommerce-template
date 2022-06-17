import { fakeProducts } from "@/lib/fakeProducts";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="grid grid-cols-2 gap-4 p-4">
        {fakeProducts.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </main>
  );
}
