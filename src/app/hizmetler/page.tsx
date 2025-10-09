import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import { 
  Heart, 
  Users, 
  Clock, 
  Shield, 
  Sparkles, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Target,
  Zap,
  Brain,
  Bone,
  Dumbbell,
  Thermometer,
  Lightbulb,
  HandHeart
} from 'lucide-react';

export default function Hizmetler() {
  const services = [
    {
      icon: <HandHeart className="w-8 h-8 text-white" />,
      title: "Manuel Terapi",
      description: "Kas ve eklem problemlerinizi çözmek için özel manuel terapi teknikleri uyguluyorum.",
      features: ["Kas gevşetme", "Eklem mobilizasyonu", "Doku manipülasyonu", "Ağrı azaltma", "Myofascial release", "Soft tissue mobilizasyonu"],
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      borderColor: "border-purple-200"
    },
    {
      icon: <Dumbbell className="w-8 h-8 text-white" />,
      title: "Rehabilitasyon",
      description: "Cerrahi sonrası veya yaralanma sonrası rehabilitasyon programları hazırlıyorum.",
      features: ["Fonksiyonel egzersizler", "Güçlendirme programları", "Denge ve koordinasyon", "Günlük aktivite eğitimi", "İş ve spor rehabilitasyonu", "Ağrı yönetimi"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200"
    },
    {
      icon: <Brain className="w-8 h-8 text-white" />,
      title: "Nörolojik Rehabilitasyon",
      description: "Sinir sistemi problemlerinde özel rehabilitasyon teknikleri uyguluyorum.",
      features: ["Nöromüsküler eğitim", "Koordinasyon egzersizleri", "Denge rehabilitasyonu", "Yürüme eğitimi", "Bobath tekniği", "PNF egzersizleri"],
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      borderColor: "border-green-200"
    },
    {
      icon: <Bone className="w-8 h-8 text-white" />,
      title: "Ortopedik Rehabilitasyon",
      description: "Kemik ve eklem problemlerinde kapsamlı rehabilitasyon hizmetleri.",
      features: ["Postür düzeltme", "Kas güçlendirme", "Esneklik artırma", "Ağrı yönetimi", "Kırık sonrası rehabilitasyon", "Spor yaralanması tedavisi"],
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
      borderColor: "border-orange-200"
    },
    {
      icon: <Thermometer className="w-8 h-8 text-white" />,
      title: "Fizik Tedavi",
      description: "Modern fizik tedavi cihazları ile etkili tedavi seansları.",
      features: ["Elektroterapi", "Sıcak-soğuk uygulamalar", "TENS tedavisi", "Manuel teknikler", "Egzersiz programları", "Postür eğitimi"],
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-50 to-purple-50",
      borderColor: "border-indigo-200"
    },
    {
      icon: <HandHeart className="w-8 h-8 text-white" />,
      title: "Masaj Terapisi",
      description: "Kas gevşetme ve ağrı azaltma için özel masaj teknikleri.",
      features: ["Kas gevşetme", "Ağrı azaltma", "Kan dolaşımı artırma", "Stres azaltma", "Derin doku masajı", "Refleksoloji"],
      color: "from-teal-500 to-cyan-500",
      bgColor: "from-teal-50 to-cyan-50",
      borderColor: "border-teal-200"
    },
    {
      icon: <Target className="w-8 h-8 text-white" />,
      title: "Spor Fizyoterapisi",
      description: "Sporcu yaralanmalarında ve performans artırımında uzmanlaşmış tedavi.",
      features: ["Spor yaralanması tedavisi", "Performans artırımı", "Esneklik ve mobilite", "Güç ve dayanıklılık", "Yaralanma önleme", "Sporcu rehabilitasyonu"],
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-50 to-orange-50",
      borderColor: "border-yellow-200"
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Pediatrik Fizyoterapi",
      description: "Çocuklarda gelişimsel problemlerde özel rehabilitasyon yaklaşımları.",
      features: ["Gelişimsel gecikme", "Serebral palsi", "Down sendromu", "Kas hastalıkları", "Solunum problemleri", "Aile eğitimi"],
      color: "from-pink-500 to-rose-500",
      bgColor: "from-pink-50 to-rose-50",
      borderColor: "border-pink-200"
    },
    {
      icon: <Bone className="w-8 h-8 text-white" />,
      title: "Boyun, Bel ve Eklem Ağrıları",
      description: "Boyun, bel ve eklem ağrılarında özel tedavi teknikleri ile ağrısız yaşam.",
      features: ["Boyun fıtığı tedavisi", "Bel fıtığı rehabilitasyonu", "Sırt ağrısı tedavisi", "Omuz ağrıları", "Diz ve kalça problemleri", "Ağrı yönetimi"],
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-50 to-pink-50",
      borderColor: "border-red-200"
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
              Ağrı Merkez&apos;de Fizik Tedavi
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Evde Fizik Tedavi Hizmetlerimiz
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">
              Ağrı Merkez&apos;de fizik tedavi hizmetleri sunuyorum. Size en güncel ve etkili tedavi yöntemlerini 
              sunarak, her hasta için kişiselleştirilmiş tedavi planları hazırlıyorum.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+905528939386"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Phone size={20} className="mr-2" />
                Hemen Ara
                <ArrowRight size={20} className="ml-2" />
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

        {/* Image Gallery */}
        <Gallery
          title="Hizmet Görselleri"
          items={[
            { 
              src: '/egzersiz.jpg', 
              alt: 'Evde fizik tedavi egzersiz uygulaması', 
              title: 'Evde Manuel Terapi ve Egzersiz', 
              descriptionItems: [
                'Ağrıyı azaltır ve kas spazmını çözer',
                'Eklem hareket açıklığını ve esnekliği artırır',
                'Kas gücünü ve dayanıklılığı geliştirir',
                'Duruş (postür) kontrolünü iyileştirir',
                'Günlük yaşam aktivitelerinde bağımsızlığı artırır'
              ]
            },
            { 
              src: '/kupaterapisi.jpg', 
              alt: 'Kupa terapisi uygulaması sırt bölgesi', 
              title: 'Kupa Terapi', 
              descriptionItems: [
                'Bölgesel kan dolaşımını hızlandırır',
                'Kas ve fasya gerginliğini azaltır',
                'Ödemin ve toksinlerin uzaklaştırılmasına yardımcı olur',
                'Ağrıyı hafifletir, hareketi kolaylaştırır',
                'Dinlendirici etki ile stres seviyesini düşürür'
              ]
            },
            { 
              src: '/masaj.jpg', 
              alt: 'Masaj terapisi sırt kasları için uygulama', 
              title: 'Masaj Terapisi', 
              descriptionItems: [
                'Kas liflerindeki gerginliği ve tetik noktalarını çözer',
                'Kan ve lenf dolaşımını destekleyerek iyileşmeyi hızlandırır',
                'Stres, anksiyete ve yorgunluk hissini azaltır',
                'Uyku kalitesini ve genel rahatlamayı artırır',
                'Spor/aktivite sonrası toparlanmayı hızlandırır'
              ]
            },
            { 
              src: '/tens.jpg', 
              alt: 'TENS elektroterapi uygulaması', 
              title: 'Elektroterapi (TENS)', 
              descriptionItems: [
                'Sinir yolaklarını modüle ederek ağrı algısını düşürür',
                'Akut ve kronik ağrıların yönetiminde etkilidir',
                'İlaç kullanım ihtiyacını azaltmaya yardımcı olabilir',
                'Egzersiz ve manüel terapi sonrası analjeziyi destekler',
                'Ev programlarına uygun taşınabilir seçenekler sunar'
              ]
            }
          ]}
        />

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

        {/* Treatment Areas Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Tedavi Edilen Problemler
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Uzmanlık alanlarımda tedavi ettiğim yaygın problemler
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Boyun ve Bel Problemleri</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Boyun fıtığı ve ağrıları</li>
                  <li>• Bel fıtığı rehabilitasyonu</li>
                  <li>• Sırt ağrısı tedavisi</li>
                  <li>• Omurga eğrilikleri (Skolyoz)</li>
                  <li>• Boyun düzleşmesi</li>
                  <li>• Bel tutulması</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Nörolojik Problemler</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• İnme sonrası rehabilitasyon</li>
                  <li>• Parkinson hastalığı</li>
                  <li>• MS (Multipl Skleroz)</li>
                  <li>• Periferik sinir yaralanmaları</li>
                  <li>• Denge problemleri</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Eklem Ağrıları ve Problemleri</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Omuz ağrıları ve donuk omuz</li>
                  <li>• Diz ağrıları ve menisküs</li>
                  <li>• Kalça ağrıları ve kireçlenme</li>
                  <li>• Dirsek ağrıları (tenisçi dirseği)</li>
                  <li>• El ve bilek problemleri</li>
                  <li>• Ayak ve ayak bileği ağrıları</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Cerrahi Sonrası</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Ortopedik ameliyatlar</li>
                  <li>• Kırık sonrası rehabilitasyon</li>
                  <li>• Protez rehabilitasyonu</li>
                  <li>• Artroskopi sonrası</li>
                  <li>• Omurga ameliyatları</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Solunum Problemleri</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• KOAH</li>
                  <li>• Astım</li>
                  <li>• Bronşektazi</li>
                  <li>• Pnömoni sonrası</li>
                  <li>• Solunum kas güçsüzlüğü</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Spor Yaralanmaları ve Diğer</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Kas yırtıkları ve zorlanmalar</li>
                  <li>• Bağ yaralanmaları</li>
                  <li>• Burkulmalar ve incinmeler</li>
                  <li>• Tendon problemleri</li>
                  <li>• Spor sonrası ağrılar</li>
                  <li>• Karpal tünel sendromu</li>
                </ul>
              </div>
            </div>
            
            {/* Additional Treatment Areas */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Pediatrik Problemler</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Gelişimsel gecikme</li>
                  <li>• Serebral palsi</li>
                  <li>• Down sendromu</li>
                  <li>• Kas hastalıkları</li>
                  <li>• Skolyoz</li>
                  <li>• Duruş bozuklukları</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-xl border border-teal-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Yaşlılık Problemleri</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Kireçlenme (Osteoartrit)</li>
                  <li>• Kemik erimesi</li>
                  <li>• Denge problemleri</li>
                  <li>• Yürüme zorlukları</li>
                  <li>• Kas güçsüzlüğü</li>
                  <li>• Postür bozuklukları</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-xl border border-rose-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">İş ve Meslek Hastalıkları</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Bilgisayar kullanımına bağlı ağrılar</li>
                  <li>• Tekrarlayan hareket yaralanmaları</li>
                  <li>• Ofis çalışanı problemleri</li>
                  <li>• Ağır kaldırma yaralanmaları</li>
                  <li>• Postür bozuklukları</li>
                  <li>• Stres kaynaklı kas gerginlikleri</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Home Visit Benefits */}
        <section className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Evde Fizik Tedavi Avantajları
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Ağrı Merkez&apos;de fizik tedavi hizmetlerimizin sunduğu avantajlar
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center bg-white p-6 rounded-xl shadow-lg border border-green-200">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Konfor</h3>
                <p className="text-gray-600 text-sm">Kendi evinizde rahat bir ortamda tedavi</p>
              </div>

              <div className="text-center bg-white p-6 rounded-xl shadow-lg border border-blue-200">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Zaman Tasarrufu</h3>
                <p className="text-gray-600 text-sm">Yol ve bekleme süresi olmadan</p>
              </div>

              <div className="text-center bg-white p-6 rounded-xl shadow-lg border border-purple-200">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Aile Desteği</h3>
                <p className="text-gray-600 text-sm">Aile üyeleriyle birlikte tedavi</p>
              </div>

              <div className="text-center bg-white p-6 rounded-xl shadow-lg border border-orange-200">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Güvenlik</h3>
                <p className="text-gray-600 text-sm">Hijyenik ve güvenli ortam</p>
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