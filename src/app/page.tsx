import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { Heart, Activity, Users, Award, Clock, Shield, Star, Sparkles, CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <Hero />
        

        
        {/* Features Section */}
        <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-4 shadow-lg">
                <Star size={16} className="mr-2" />
                Neden Bizi Tercih Etmelisiniz?
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Neden Bizi Tercih Etmelisiniz?
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Profesyonel yaklaşımımla ve hasta odaklı hizmetimle sağlığınızı iyileştirmek için buradayım.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-white to-purple-50 p-8 rounded-xl shadow-lg border border-purple-100 hover:shadow-xl transition-all transform hover:scale-105 hover:border-purple-200">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Hasta Odaklı Yaklaşım</h3>
                <p className="text-gray-600">
                  Her hastanın ihtiyaçlarını anlayarak kişiselleştirilmiş tedavi planları hazırlıyorum.
                </p>
              </div>

              <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-all transform hover:scale-105 hover:border-blue-200">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Kişisel Yaklaşım</h3>
                <p className="text-gray-600">
                  En güncel fizyoterapi teknikleri ile size en iyi hizmeti sunuyorum.
                </p>
              </div>

              <div className="bg-gradient-to-br from-white to-green-50 p-8 rounded-xl shadow-lg border border-green-100 hover:shadow-xl transition-all transform hover:scale-105 hover:border-green-200">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Esnek Çalışma Saatleri</h3>
                <p className="text-gray-600">
                  Size uygun zamanlarda randevu alabilir, yoğun programınıza uyum sağlayabilirim.
                </p>
              </div>

              <div className="bg-gradient-to-br from-white to-orange-50 p-8 rounded-xl shadow-lg border border-orange-100 hover:shadow-xl transition-all transform hover:scale-105 hover:border-orange-200">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <Activity className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Modern Teknikler</h3>
                <p className="text-gray-600">
                  En güncel fizyoterapi teknikleri ve ekipmanları ile hizmet veriyorum.
                </p>
              </div>

              <div className="bg-gradient-to-br from-white to-indigo-50 p-8 rounded-xl shadow-lg border border-indigo-100 hover:shadow-xl transition-all transform hover:scale-105 hover:border-indigo-200">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Profesyonel Yaklaşım</h3>
                <p className="text-gray-600">
                  Sürekli eğitim ve güncel teknikler ile en iyi hizmeti sunmaya odaklanıyorum.
                </p>
              </div>

              <div className="bg-gradient-to-br from-white to-teal-50 p-8 rounded-xl shadow-lg border border-teal-100 hover:shadow-xl transition-all transform hover:scale-105 hover:border-teal-200">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Güvenli Ortam</h3>
                <p className="text-gray-600">
                  Hijyenik ve güvenli bir ortamda profesyonel hizmet sunuyorum.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-white mb-2">Uzman</div>
                <div className="text-white/90">Fizyoterapist</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-white mb-2">Profesyonel</div>
                <div className="text-white/90">Hizmet</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-white mb-2">Kaliteli</div>
                <div className="text-white/90">Hizmet</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-16 h-16 bg-white rounded-full animate-bounce"></div>
            <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white rounded-full animate-spin"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/20 backdrop-blur-sm text-white mb-6">
                <Sparkles size={16} className="mr-2" />
                Hemen İletişime Geçin
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Sağlığınız İçin Hemen İletişime Geçin
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Profesyonel fizyoterapi hizmetleri için randevu alın ve sağlığınızı iyileştirmeye başlayın.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+905528939386"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-lg transform hover:scale-105"
                >
                  <CheckCircle size={20} className="mr-2" />
                  Hemen Ara
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
