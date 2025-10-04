import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, Heart, Sparkles, Shield, FileText } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-pink-500 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-blue-500 rounded-full opacity-30 animate-spin"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-12 h-12 flex items-center justify-center shadow-lg overflow-hidden">
                <img 
                  src="/fizyo-sefa-logo.jpg" 
                  alt="FIZYO SEFA Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  FizyoSefa
                </h3>
                <p className="text-sm text-gray-400 font-medium">Evde Fizik Tedavi</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Profesyonel fizyoterapi hizmetleri ile sağlığınızı iyileştirmek için buradayım. 
              Manuel terapi, rehabilitasyon ve egzersiz danışmanlığı konularında uzmanlığımı sizlerle paylaşıyorum.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors bg-gray-800 p-2 rounded-full hover:bg-purple-800">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors bg-gray-800 p-2 rounded-full hover:bg-pink-800">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors bg-gray-800 p-2 rounded-full hover:bg-blue-800">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors bg-gray-800 p-2 rounded-full hover:bg-cyan-800">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Hızlı Linkler
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-purple-400 transition-colors flex items-center group">
                  <Sparkles size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/hakkimda" className="text-gray-300 hover:text-purple-400 transition-colors flex items-center group">
                  <Sparkles size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Hakkımda
                </Link>
              </li>
              <li>
                <Link href="/hizmetler" className="text-gray-300 hover:text-purple-400 transition-colors flex items-center group">
                  <Sparkles size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Hizmetler
                </Link>
              </li>

              <li>
                <Link href="/iletisim" className="text-gray-300 hover:text-purple-400 transition-colors flex items-center group">
                  <Sparkles size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              İletişim
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 group">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Phone size={16} className="text-white" />
                </div>
                <a href="tel:+905528939386" className="text-gray-300 hover:text-purple-400 transition-colors">
                  0552 893 93 86
                </a>
              </li>
              <li className="flex items-center space-x-2 group">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <Mail size={16} className="text-white" />
                </div>
                <a 
                  href="mailto:fizyoterapistsefa4@gmail.com?subject=Fizik Tedavi Randevu Talebi&body=Merhaba, fizik tedavi hizmetleriniz hakkında bilgi almak istiyorum."
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  fizyoterapistsefa4@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-2 group">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mt-1">
                  <MapPin size={16} className="text-white" />
                </div>
                <span className="text-gray-300">
                  Ağrı Merkez<br />
                  Çalışma Günleri:<br />
                  Hafta içi: Ağrı Merkez
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm flex items-center">
              © 2024 Sefa Yılmaz. Tüm hakları saklıdır.
              <Heart size={12} className="mx-1 text-pink-500 animate-pulse" />
            </p>
            <div className="flex flex-wrap gap-6 mt-4 md:mt-0">
              <Link href="/kvkk" className="text-gray-400 hover:text-purple-400 text-sm transition-colors flex items-center">
                <Shield size={12} className="mr-1" />
                KVKK
              </Link>
              <Link href="/gizlilik" className="text-gray-400 hover:text-purple-400 text-sm transition-colors flex items-center">
                <FileText size={12} className="mr-1" />
                Gizlilik Politikası
              </Link>
              <Link href="/kullanim-kosullari" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                Kullanım Koşulları
              </Link>
              <Link href="/yasal-uyarilar" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                Yasal Uyarılar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 