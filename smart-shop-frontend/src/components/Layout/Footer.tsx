import Link from 'next/link';
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Smart Shop</h3>
            <p className="text-gray-400 leading-relaxed">
              Sua loja online inteligente com os melhores produtos e preços. Encontre tudo o que precisa em um só lugar.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-colors">
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-400 hover:bg-blue-500 flex items-center justify-center transition-colors">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-pink-600 hover:bg-pink-700 flex items-center justify-center transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-700 hover:bg-blue-800 flex items-center justify-center transition-colors">
                <FaLinkedinIn className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                  <span className="border-b border-transparent hover:border-white">Produtos</span>
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                  <span className="border-b border-transparent hover:border-white">Categorias</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                  <span className="border-b border-transparent hover:border-white">Sobre Nós</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                  <span className="border-b border-transparent hover:border-white">Contato</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-xl font-bold mb-6">Ajuda</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                  <span className="border-b border-transparent hover:border-white">FAQ</span>
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                  <span className="border-b border-transparent hover:border-white">Envio</span>
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                  <span className="border-b border-transparent hover:border-white">Devoluções</span>
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                  <span className="border-b border-transparent hover:border-white">Privacidade</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-400">
                <FiMail className="w-5 h-5 text-blue-500" />
                <span>contato@smartshop.com</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <FiPhone className="w-5 h-5 text-blue-500" />
                <span>(11) 1234-5678</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <FiMapPin className="w-5 h-5 text-blue-500" />
                <span>Rua Example, 123 - São Paulo, SP</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <FiClock className="w-5 h-5 text-blue-500" />
                <span>Seg - Sex: 9h às 18h</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Smart Shop. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Termos de Uso
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Política de Privacidade
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
