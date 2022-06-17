'use client';
import { useEffect, useState } from 'react';

export default function CartModal() {
  const [cart, setCart] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('cart');
    if (stored) setCart(JSON.parse(stored));
  }, []);

  const closeModal = () => setOpen(false);

  return open ? (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
      <div className="w-80 bg-white p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Cart</h2>
          <button onClick={closeModal}>✕</button>
        </div>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul className="space-y-2">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between">
                <span>{item.title}</span>
                <span>${item.price}</span>
              </li>
            ))}
          </ul>
        )}
        <button
          className="mt-4 w-full bg-black text-white py-2 rounded"
          onClick={() => alert('Checkout')}
        >
          Checkout
        </button>
      </div>
    </div>
  ) : null;
}
