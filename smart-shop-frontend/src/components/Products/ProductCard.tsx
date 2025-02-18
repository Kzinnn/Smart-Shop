"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { FiStar, FiTruck, FiPackage } from 'react-icons/fi';
import { useCart } from '@/hooks/useCart';
import { toast } from 'react-hot-toast';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    images: string[];
    category?: string;
    rating?: number;
    stock?: number;
  };
  viewMode?: 'grid' | 'list';
}

export default function ProductCard({ product, viewMode = 'grid' }: ProductCardProps) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
    });
    toast.success('Produto adicionado ao carrinho!');
  };

  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
        <div className="flex">
          <div className="relative h-48 w-48 flex-shrink-0 overflow-hidden">
            <Image
              src="/images/placeholder-product.jpg"
              alt={product.name}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex-1 p-6">
            <div className="flex justify-between items-start">
              <div>
                <Link href={`/products/${product.id}`}>
                  <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors mb-2">
                    {product.name}
                  </h3>
                </Link>
                {product.category && (
                  <span className="text-sm text-gray-500 mb-2 block">{product.category}</span>
                )}
                <div className="flex items-center space-x-1 mb-4">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <FiStar
                      key={index}
                      className={`w-4 h-4 ${index < (product.rating || 0) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                  <span className="text-sm text-gray-500 ml-2">{product.rating}/5</span>
                </div>
              </div>
              <span className="text-2xl font-bold text-gray-900">
                R$ {Number(product.price).toFixed(2)}
              </span>
            </div>
            <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <FiPackage className="w-4 h-4 mr-1" />
                  <span>Estoque: {product.stock || 'Indisponível'}</span>
                </div>
                <div className="flex items-center">
                  <FiTruck className="w-4 h-4 mr-1" />
                  <span>Frete Grátis</span>
                </div>
              </div>
              <button
                onClick={handleAddToCart}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
              >
                <ShoppingCartIcon className="h-5 w-5" />
                <span>Adicionar</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src="/images/placeholder-product.jpg"
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.stock === 0 && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            Esgotado
          </div>
        )}
      </div>
      <div className="p-4">
        <Link href={`/products/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors mb-1">
            {product.name}
          </h3>
        </Link>
        {product.category && (
          <span className="text-sm text-gray-500 mb-2 block">{product.category}</span>
        )}
        <div className="flex items-center space-x-1 mb-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <FiStar
              key={index}
              className={`w-4 h-4 ${index < (product.rating || 0) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
            />
          ))}
        </div>
        <p className="text-gray-600 text-sm line-clamp-2 mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">
            R$ {Number(product.price).toFixed(2)}
          </span>
          <button
            onClick={handleAddToCart}
            className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transform hover:scale-105 transition-all"
            disabled={product.stock === 0}
          >
            <ShoppingCartIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
