import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Award, GraduationCap, Users, Heart, Target, BookOpen } from 'lucide-react';

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
                Uzman fizyoterapist olarak sağlığınızı iyileştirmek için buradayım. 
                Deneyimim ve uzmanlığımla size en iyi hizmeti sunmaya odaklanıyorum.
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
                  Merhaba! Ben Sefa Yılmaz, 5 yılı aşkın deneyimimle uzman fizyoterapist olarak 
                  çalışmaktayım. Sağlık alanında aldığım eğitimler ve sürekli kendimi geliştirme 
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
                  <div className="w-40 h-40 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-white text-6xl font-bold">S</span>
                  </div>
                  <h3 className="text-2xl font-bold text-center text-gray-900 mb-2">
                    Sefa Yılmaz
                  </h3>
                  <p className="text-center text-gray-600 mb-6">
                    Uzman Fizyoterapist
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-600">Deneyim</span>
                      <span className="font-semibold text-primary">5+ Yıl</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-600">Tedavi Edilen Hasta</span>
                      <span className="font-semibold text-secondary">500+</span>
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

        {/* Education & Experience */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Eğitim ve Deneyim
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Sürekli kendimi geliştiriyor ve en güncel teknikleri öğreniyorum.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Education */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Eğitim</h3>
                </div>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-gray-900">Fizyoterapi ve Rehabilitasyon</h4>
                    <p className="text-gray-600">İstanbul Üniversitesi</p>
                    <p className="text-sm text-gray-500">2015 - 2019</p>
                  </div>
                  <div className="border-l-4 border-secondary pl-4">
                    <h4 className="font-semibold text-gray-900">Manuel Terapi Sertifikası</h4>
                    <p className="text-gray-600">Uluslararası Manuel Terapi Derneği</p>
                    <p className="text-sm text-gray-500">2020</p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-semibold text-gray-900">Spor Fizyoterapisi</h4>
                    <p className="text-gray-600">Türkiye Fizyoterapistler Derneği</p>
                    <p className="text-sm text-gray-500">2021</p>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mr-4">
                    <Award className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Deneyim</h3>
                </div>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-gray-900">Uzman Fizyoterapist</h4>
                    <p className="text-gray-600">Özel Fizyoterapi Merkezi</p>
                    <p className="text-sm text-gray-500">2021 - Günümüz</p>
                  </div>
                  <div className="border-l-4 border-secondary pl-4">
                    <h4 className="font-semibold text-gray-900">Fizyoterapist</h4>
                    <p className="text-gray-600">Devlet Hastanesi</p>
                    <p className="text-sm text-gray-500">2019 - 2021</p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-semibold text-gray-900">Stajyer Fizyoterapist</h4>
                    <p className="text-gray-600">Çeşitli Hastaneler</p>
                    <p className="text-sm text-gray-500">2018 - 2019</p>
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
                  Fizyoterapi alanında öncü bir uzman olarak, sürekli kendimi geliştirerek 
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Kalite</h3>
                <p className="text-gray-600">
                  En güncel teknikleri kullanarak yüksek kaliteli hizmet sunmaya odaklanıyorum.
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