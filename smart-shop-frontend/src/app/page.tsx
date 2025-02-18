'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FiTruck, FiCreditCard, FiLock, FiHeadphones } from 'react-icons/fi';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <div className="space-y-16 overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="h-full"
        >
          <SwiperSlide>
            <div className="relative h-full flex items-center justify-center bg-[url('/images/hero1.jpg')] bg-cover bg-center">
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <motion.div 
                className="relative text-center space-y-6 px-4 max-w-4xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Smart Shop</h1>
                <p className="text-xl md:text-2xl text-gray-200">Sua loja online inteligente com as melhores ofertas</p>
                <div className="flex gap-4 justify-center">
                  <Link
                    href="/products"
                    className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Explorar Produtos
                  </Link>
                  <Link
                    href="/categories"
                    className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Ver Categorias
                  </Link>
                </div>
              </motion.div>
            </div>
          </SwiperSlide>
          {/* Adicione mais slides conforme necessário */}
        </Swiper>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex items-center space-x-4 p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
              variants={fadeInUp}
            >
              <FiTruck className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="font-semibold text-gray-900">Entrega Grátis</h3>
                <p className="text-sm text-gray-600">Em compras acima de R$100</p>
              </div>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-4 p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
              variants={fadeInUp}
            >
              <FiCreditCard className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="font-semibold text-gray-900">Pagamento Seguro</h3>
                <p className="text-sm text-gray-600">Diversas formas de pagamento</p>
              </div>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-4 p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
              variants={fadeInUp}
            >
              <FiLock className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="font-semibold text-gray-900">Compra Protegida</h3>
                <p className="text-sm text-gray-600">Garantia de satisfação</p>
              </div>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-4 p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
              variants={fadeInUp}
            >
              <FiHeadphones className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="font-semibold text-gray-900">Suporte 24/7</h3>
                <p className="text-sm text-gray-600">Atendimento especializado</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Categorias em Destaque</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Explore nossa seleção de produtos em diversas categorias</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { name: 'Eletrônicos', image: '/images/categories/electronics.jpg', items: '150+ items' },
              { name: 'Moda', image: '/images/categories/fashion.jpg', items: '200+ items' },
              { name: 'Casa', image: '/images/categories/home.jpg', items: '180+ items' },
              { name: 'Esportes', image: '/images/categories/sports.jpg', items: '120+ items' },
            ].map((category) => (
              <motion.div
                key={category.name}
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="aspect-w-1 aspect-h-1 w-full">
                  <Image
                    src="/images/placeholder-product.jpg"
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0 p-6 flex flex-col justify-end text-white">
                  <h3 className="text-xl font-semibold mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-300">{category.items}</p>
                </div>
                <Link href={`/categories/${category.name.toLowerCase()}`} className="absolute inset-0">
                  <span className="sr-only">Ver {category.name}</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Produtos em Destaque</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Descubra nossa seleção especial de produtos em destaque</p>
          </motion.div>

          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            navigation={true}
            modules={[Navigation]}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="pb-12"
          >
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <SwiperSlide key={i}>
                <motion.div 
                  className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-64 bg-gray-100">
                    <Image
                      src="/images/placeholder-product.jpg"
                      alt={`Produto ${i}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-blue-600 text-white text-sm font-medium px-2 py-1 rounded-full">
                      Novo
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Produto {i}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">Uma descrição incrível do produto {i} com detalhes importantes.</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm text-gray-500 line-through">R$ 129,99</span>
                        <span className="block text-xl font-bold text-gray-900">R$ 99,99</span>
                      </div>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Comprar
                      </button>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <motion.div 
          className="max-w-4xl mx-auto text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Fique por dentro das novidades</h2>
          <p className="text-gray-200 mb-8 text-lg">Inscreva-se para receber ofertas exclusivas e novidades em primeira mão</p>
          <form className="flex flex-col sm:flex-row gap-3 justify-center max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="px-6 py-3 rounded-lg border-2 border-white/20 bg-white/10 text-white placeholder-white/70 flex-grow focus:outline-none focus:border-white/40 transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3 rounded-lg font-semibold bg-white text-blue-600 hover:bg-gray-100 transition-colors"
            >
              Inscrever-se
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-200">Ao se inscrever, você concorda com nossa política de privacidade</p>
        </motion.div>
      </section>
    </div>
  );
}
