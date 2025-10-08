'use client';

import Link from 'next/link';
import { Phone, ArrowRight, Heart, Activity, Users, Star, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-gradient-to-r from-orange-400 to-red-400 rounded-full animate-spin"></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-30 animate-pulse"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 animate-float">
          <Sparkles className="w-6 h-6 text-purple-500" />
        </div>
        <div className="absolute top-20 right-20 animate-float-delayed">
          <Star className="w-5 h-5 text-pink-500" />
        </div>
        <div className="absolute bottom-20 left-20 animate-float">
          <Heart className="w-6 h-6 text-red-500" />
        </div>
        <div className="absolute bottom-10 right-10 animate-float-delayed">
          <Activity className="w-5 h-5 text-blue-500" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-4 shadow-lg animate-pulse">
                <Heart size={16} className="mr-2" />
                Ağrı Merkez&apos;de Fizik Tedavi
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Sağlığınız İçin
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent block">Evde Fizik</span>
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Tedavi</span>
            </h1>

                          <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
                Ağrı Merkez&apos;de fizik tedavi hizmetleri. Fizyoterapist Sefa Yılmaz ile manuel terapi, 
                rehabilitasyon ve egzersiz danışmanlığı hizmetleri. Sağlığınızı iyileştirmek için buradayım.
              </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/hizmetler"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Activity size={20} className="mr-2" />
                Hizmetlerim
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>

            <div className="mt-8 flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-600">
              <div className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <Users size={16} className="mr-2 text-purple-500" />
                <span>500+ Mutlu Hasta</span>
              </div>
              <div className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <Activity size={16} className="mr-2 text-pink-500" />
                <span>Kaliteli Tedavi</span>
              </div>
            </div>
          </div>

          {/* Right Content - Image/Illustration */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl p-8 max-w-md mx-auto border border-gray-100">
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                <Star className="w-4 h-4 text-white" />
              </div>
              <div className="w-48 h-48 mx-auto mb-6 flex items-center justify-center shadow-lg relative rounded-full overflow-hidden">
                <img 
                  src="/sefa.JPG" 
                  alt="FIZYO SEFA Logo" 
                  className="w-full h-full object-center rounded-full border-4 border-white shadow-xl"
                />
              </div>
              <p className="text-center text-gray-600 mb-2 text-sm">
                evde fizik tedavi ve danışmalık
              </p>
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-2">
                Fizyoterapist Sefa Yılmaz
              </h3>
              <p className="text-center text-gray-600 mb-6">
                Fizik Tedavi
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100">
                  <span className="text-sm text-gray-700">Manuel Terapi</span>
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-100">
                  <span className="text-sm text-gray-700">Rehabilitasyon</span>
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-100">
                  <span className="text-sm text-gray-700">Egzersiz Danışmanlığı</span>
                  <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse"></div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <a
                  href="tel:+905528939386"
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold transition-colors"
                >
                  <Phone size={16} className="mr-2" />
                  Hemen Ara
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 