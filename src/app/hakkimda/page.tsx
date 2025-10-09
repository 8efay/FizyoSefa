import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, Heart, Target, BookOpen } from 'lucide-react';

export default function Hakkimda() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Hakkımda
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Fizyoterapist olarak sağlığınızı iyileştirmek için buradayım. 
                Uzmanlığımla ve profesyonel yaklaşımımla size en iyi hizmeti sunmaya odaklanıyorum.
              </p>
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Sefa Yılmaz
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Merhaba! Ben Sefa Yılmaz, fizyoterapist olarak çalışmaktayım. Sağlık alanında aldığım eğitimler ve sürekli kendimi geliştirme 
                  çabalarımla hastalarıma en iyi hizmeti sunmaya odaklanıyorum.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Manuel terapi, rehabilitasyon ve egzersiz danışmanlığı konularında uzmanlığım 
                  bulunmaktadır. Her hastanın ihtiyaçlarını anlayarak kişiselleştirilmiş tedavi 
                  planları hazırlıyorum.
                </p>
                <p className="text-lg text-gray-600">
                  Misyonum, hastalarımın yaşam kalitesini artırmak ve onları sağlıklı bir yaşama 
                  kavuşturmaktır. Bu doğrultuda sürekli kendimi geliştiriyor ve en güncel 
                  teknikleri uyguluyorum.
                </p>
              </div>

              {/* Right Content - Profile Card */}
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                  <div className="w-40 h-40 mx-auto mb-6 flex items-center justify-center relative rounded-full overflow-hidden shadow-lg">
                    <img 
                      src="/sefa.JPG" 
                      alt="Sefa Yılmaz - Fizyoterapist" 
                      className="w-full h-full object-cover rounded-full border-4 border-white shadow-xl"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-center text-gray-900 mb-2">
                    Sefa Yılmaz
                  </h3>
                  <p className="text-center text-gray-600 mb-6">
                    Fizyoterapist
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-600">Uzmanlık</span>
                      <span className="font-semibold text-primary">Manuel Terapi</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-600">Hizmet Kalitesi</span>
                      <span className="font-semibold text-secondary">Yüksek</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-600">Uzmanlık Alanları</span>
                      <span className="font-semibold text-accent">3</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Mission & Vision */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="text-center md:text-left">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Misyonum</h3>
                <p className="text-lg text-gray-600">
                  Hastalarımın yaşam kalitesini artırmak ve onları sağlıklı bir yaşama kavuşturmak 
                  için en güncel fizyoterapi tekniklerini uygulayarak, kişiselleştirilmiş tedavi 
                  planları hazırlamak.
                </p>
              </div>

              <div className="text-center md:text-left">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-6">
                  <BookOpen className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Vizyonum</h3>
                <p className="text-lg text-gray-600">
                  Fizyoterapi alanında öncü bir fizyoterapist olarak, sürekli kendimi geliştirerek 
                  hastalarıma en iyi hizmeti sunmak ve toplumun sağlık bilincini artırmaya 
                  katkıda bulunmak.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Değerlerim
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Çalışma prensiplerim ve değerlerim.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Hasta Odaklılık</h3>
                <p className="text-gray-600">
                  Her hastanın ihtiyaçlarını anlayarak kişiselleştirilmiş tedavi planları hazırlıyorum.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Güven</h3>
                <p className="text-gray-600">
                  Hastalarımla güvene dayalı bir ilişki kurarak en iyi sonuçları elde etmeye odaklanıyorum.
                </p>
              </div>


            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 