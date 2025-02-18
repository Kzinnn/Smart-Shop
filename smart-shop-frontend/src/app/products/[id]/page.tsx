'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { ShoppingCartIcon, HeartIcon } from '@heroicons/react/24/outline';
import { useCart } from '@/hooks/useCart';
import { toast } from 'react-hot-toast';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  specifications: Record<string, string>;
  stockQuantity: number;
  tags: string[];
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addItem } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/products/${params.id}`);
        setProduct(response.data);
      } catch (err) {
        setError('Erro ao carregar produto');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-red-600 mb-4">{error}</h2>
        <p className="text-gray-600">Produto não encontrado ou erro ao carregar.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src="/images/placeholder-product.jpg"
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
          
          {/* Thumbnail Images */}
          {product.images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-20 h-20 flex-shrink-0 rounded-md overflow-hidden border-2 transition-colors ${selectedImage === index ? 'border-blue-600' : 'border-transparent'}`}
                >
                  <Image
                    src="/images/placeholder-product.jpg"
                    alt={`${product.name} - Imagem ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <div className="mt-4">
            <span className="text-3xl font-bold text-gray-900">
              R$ {Number(product.price).toFixed(2)}
            </span>
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-900">Descrição</h3>
            <p className="mt-2 text-gray-600">{product.description}</p>
          </div>

          {/* Stock Status */}
          <div className="mt-6">
            <p className="text-sm text-gray-500">
              {product.stockQuantity > 0 ? (
                <span className="text-green-600">
                  ✓ {product.stockQuantity} unidades em estoque
                </span>
              ) : (
                <span className="text-red-600">✕ Fora de estoque</span>
              )}
            </p>
          </div>

          {/* Quantity Selector */}
          <div className="mt-6">
            <label htmlFor="quantity" className="text-sm font-medium text-gray-900">
              Quantidade
            </label>
            <div className="mt-2 flex items-center space-x-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
                disabled={product.stockQuantity === 0}
              >
                -
              </button>
              <span className="text-gray-900 w-8 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(Math.min(product.stockQuantity, quantity + 1))}
                className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
                disabled={product.stockQuantity === 0}
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={() => {
              if (product.stockQuantity === 0) return;
              addItem({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.images[0],
              });
              toast.success('Produto adicionado ao carrinho!');
            }}
            className={`mt-8 w-full px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all ${
              product.stockQuantity === 0 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
            disabled={product.stockQuantity === 0}
          >
            <ShoppingCartIcon className="h-5 w-5" />
            <span>
              {product.stockQuantity === 0 ? 'Fora de Estoque' : 'Adicionar ao Carrinho'}
            </span>
          </button>

          {/* Specifications */}
          {Object.keys(product.specifications).length > 0 && (
            <div className="mt-8 border-t border-gray-200 pt-8">
              <h3 className="text-sm font-medium text-gray-900">Especificações</h3>
              <div className="mt-4 space-y-2">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between text-sm">
                    <span className="text-gray-500">{key}</span>
                    <span className="text-gray-900">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          {product.tags.length > 0 && (
            <div className="mt-8 border-t border-gray-200 pt-8">
              <h3 className="text-sm font-medium text-gray-900 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
