import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Heart, 
  Activity, 
  Users, 
  Award, 
  Clock, 
  Shield, 
  Star, 
  Sparkles, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Calendar,
  MapPin,
  Target,
  Zap,
  Brain,
  Bone,
  Dumbbell,
  Thermometer,
  Waves,
  Lightbulb,
  HandHeart
} from 'lucide-react';
import Link from 'next/link';

export default function Hizmetler() {
  const services = [
    {
      icon: <HandHeart className="w-8 h-8 text-white" />,
      title: "Manuel Terapi",
      description: "Kas ve eklem problemlerinizi çözmek için özel manuel terapi teknikleri uyguluyorum.",
      features: ["Kas gevşetme", "Eklem mobilizasyonu", "Doku manipülasyonu", "Ağrı azaltma"],
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      borderColor: "border-purple-200"
    },
    {
      icon: <Dumbbell className="w-8 h-8 text-white" />,
      title: "Rehabilitasyon",
      description: "Cerrahi sonrası veya yaralanma sonrası rehabilitasyon programları hazırlıyorum.",
      features: ["Fonksiyonel egzersizler", "Güçlendirme programları", "Denge ve koordinasyon", "Günlük aktivite eğitimi"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200"
    },
    {
      icon: <Brain className="w-8 h-8 text-white" />,
      title: "Nörolojik Rehabilitasyon",
      description: "Sinir sistemi problemlerinde özel rehabilitasyon teknikleri uyguluyorum.",
      features: ["Nöromüsküler eğitim", "Koordinasyon egzersizleri", "Denge rehabilitasyonu", "Yürüme eğitimi"],
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      borderColor: "border-green-200"
    },
    {
      icon: <Bone className="w-8 h-8 text-white" />,
      title: "Ortopedik Rehabilitasyon",
      description: "Kemik ve eklem problemlerinde kapsamlı rehabilitasyon hizmetleri.",
      features: ["Postür düzeltme", "Kas güçlendirme", "Esneklik artırma", "Ağrı yönetimi"],
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
      borderColor: "border-orange-200"
    },
    {
      icon: <Thermometer className="w-8 h-8 text-white" />,
      title: "Fizik Tedavi",
      description: "Modern fizik tedavi cihazları ile etkili tedavi seansları.",
      features: ["Ultrason tedavisi", "Elektroterapi", "Sıcak-soğuk uygulamalar", "Lazer tedavisi"],
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-50 to-purple-50",
      borderColor: "border-indigo-200"
    },
    {
      icon: <Waves className="w-8 h-8 text-white" />,
      title: "Su Terapisi",
      description: "Su ortamında yapılan özel rehabilitasyon programları.",
      features: ["Hidroterapi", "Su egzersizleri", "Yüzme rehabilitasyonu", "Düşük etkili egzersizler"],
      color: "from-teal-500 to-cyan-500",
      bgColor: "from-teal-50 to-cyan-50",
      borderColor: "border-teal-200"
    }
  ];

  const testimonials = [
    {
      name: "Ayşe K.",
      text: "Bel ağrılarım için manuel terapi aldım, çok memnun kaldım. Artık ağrısız yaşıyorum.",
      rating: 5
    },
    {
      name: "Mehmet S.",
      text: "Cerrahi sonrası rehabilitasyon sürecimde çok destek oldu. Teşekkürler!",
      rating: 5
    },
    {
      name: "Fatma A.",
      text: "Profesyonel yaklaşımı ve güler yüzü ile tedavi sürecimi çok kolaylaştırdı.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-bounce"></div>
            <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-30 animate-spin"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-6 shadow-lg">
              <Sparkles size={16} className="mr-2" />
              Profesyonel Hizmetlerimiz
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Fizyoterapi Hizmetlerimiz
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Uzman fizyoterapist olarak size en güncel ve etkili tedavi yöntemlerini sunuyorum. 
              Her hasta için kişiselleştirilmiş tedavi planları hazırlıyorum.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Calendar size={20} className="mr-2" />
                Randevu Al
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <a
                href="tel:+905551234567"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all transform hover:scale-105"
              >
                <Phone size={20} className="mr-2" />
                Hemen Ara
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Hizmetlerimiz
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Size sunduğum kapsamlı fizyoterapi hizmetleri ile sağlığınızı iyileştirmek için buradayım.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className={`bg-gradient-to-br ${service.bgColor} p-8 rounded-xl shadow-lg border ${service.borderColor} hover:shadow-xl transition-all transform hover:scale-105`}>
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center mb-6 shadow-lg`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <CheckCircle size={16} className={`mr-2 text-${service.color.split('-')[1]}-500`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Tedavi Sürecimiz
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Size en iyi hizmeti sunmak için takip ettiğimiz adımlar
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Değerlendirme</h3>
                <p className="text-gray-600">Detaylı fiziksel değerlendirme ve anamnez alma</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Planlama</h3>
                <p className="text-gray-600">Kişiselleştirilmiş tedavi planı hazırlama</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Uygulama</h3>
                <p className="text-gray-600">Modern tekniklerle tedavi uygulama</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Takip</h3>
                <p className="text-gray-600">Düzenli kontroller ve ilerleme değerlendirmesi</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Hasta Yorumları
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Hizmetlerimizden memnun kalan hastalarımızın yorumları
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200 shadow-lg">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <p className="text-sm font-semibold text-purple-600">{testimonial.name}</p>
                </div>
              ))}
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
                <Link
                  href="/iletisim"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-lg transform hover:scale-105"
                >
                  <CheckCircle size={20} className="mr-2" />
                  Randevu Al
                </Link>
                <a
                  href="tel:+905551234567"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white border-2 border-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-all transform hover:scale-105"
                >
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