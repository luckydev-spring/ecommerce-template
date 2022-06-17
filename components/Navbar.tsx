'use client';
import { useEffect, useState } from 'react';
import CartModal from './CartModal';

export default function Navbar() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem('cart');
    if (stored) setCount(JSON.parse(stored).length);
  }, []);

  return (
    <header className="w-full bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Shop</h1>
      <div className="relative">
        <button onClick={() => document.querySelector('#cart-modal').click()}>
          🛒
        </button>
        {count > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
            {count}
          </span>
        )}
      </div>
      <CartModal />
    </header>
  );
}
