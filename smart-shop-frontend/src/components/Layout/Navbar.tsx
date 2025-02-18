"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline';
import CartDrawer from '../Cart/CartDrawer';
import { useCart } from '@/hooks/useCart';

export default function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { items } = useCart();
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-gray-800">
                Smart Shop
              </Link>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link 
                  href="/products" 
                  className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md transition-colors"
                >
                  Produtos
                </Link>
                <Link 
                  href="/categories" 
                  className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md transition-colors"
                >
                  Categorias
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setIsCartOpen(true)} 
                className="p-2 text-gray-400 hover:text-gray-500 relative group"
              >
                <ShoppingCartIcon className="h-6 w-6 transition-colors" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                    {itemCount}
                  </span>
                )}
              </button>
              <Link 
                href="/profile" 
                className="p-2 text-gray-400 hover:text-gray-500 transition-colors"
              >
                <UserIcon className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
      />
    </>
  );
}
