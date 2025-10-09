import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, FileText, Lock, AlertTriangle, CheckCircle } from 'lucide-react';

export default function KVKK() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-6 shadow-lg">
              <Shield size={16} className="mr-2" />
              Yasal Bilgiler
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                KVKK ve Yasal Uyarılar
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kişisel verilerinizin korunması ve yasal haklarınız hakkında bilgilendirme
            </p>
          </div>
        </section>

        {/* KVKK Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">KVKK Aydınlatma Metni</h2>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Veri Sorumlusu</h3>
                <p className="text-gray-700 mb-6">
                  Kişisel verilerinizin işlenmesi konusunda veri sorumlusu: Sefa Yılmaz<br/>
                                     İletişim: fizyoterapistsefa4@gmail.com<br/>
                                     Telefon: 0552 893 93 86
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Toplanan Veriler</h3>
                <p className="text-gray-700 mb-6">
                  Bu web sitesi üzerinden sadece iletişim amaçlı aşağıdaki veriler toplanmaktadır:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>Ad ve soyad</li>
                  <li>E-posta adresi</li>
                  <li>Telefon numarası</li>
                  <li>İletişim mesajı</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Veri İşleme Amacı</h3>
                <p className="text-gray-700 mb-6">
                  Toplanan veriler sadece iletişim kurmak ve bilgilendirme yapmak amacıyla kullanılmaktadır. 
                  Sağlık verisi toplanmamaktadır.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">4. Veri Güvenliği</h3>
                <p className="text-gray-700 mb-6">
                  Kişisel verileriniz SSL şifreleme ile korunmakta ve güvenli sunucularda saklanmaktadır.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">5. Haklarınız</h3>
                <p className="text-gray-700 mb-6">
                  KVKK kapsamında aşağıdaki haklara sahipsiniz:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>Verilerinizin işlenip işlenmediğini öğrenme</li>
                  <li>Verilerinizin işlenme amacını öğrenme</li>
                  <li>Verilerinizin silinmesini isteme</li>
                  <li>Verilerinizin düzeltilmesini isteme</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer Section */}
        <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-4">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Yasal Uyarı (Disclaimer)</h2>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-orange-200">
                <div className="prose prose-lg max-w-none">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Önemli Uyarı</h3>
                  <p className="text-gray-700 mb-6">
                    Sitemizin içeriği konuyla ilgili bilgi sahibi olmak isteyenlere yönelik hazırlanmıştır. 
                    Sitede bulunan yazılar herhangi bir teşhis veya tedavi önerisi amacı taşımaz. Sadece sitedeki 
                    bilgilerden yola çıkarak tedavi veya teşhis yapılmamalıdır. Hiçbir yazı, online görüşme veya 
                    konuşma, birebir muayene ve detaylı hikaye ile birlikte kararlaştırılan tedavi ve teşhisten 
                    güçlü değildir.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Tedavi Uyarısı</h3>
                  <p className="text-gray-700 mb-6">
                    Sitede yer alan egzersiz önerileri ve bilgiler genel niteliktedir.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Sorumluluk Reddi</h3>
                  <p className="text-gray-700 mb-6">
                    Bu sitedeki bilgilerin kullanımından doğabilecek herhangi bir zarardan 
                    sorumluluk kabul edilmemektedir.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4">İletişim Amaçlı</h3>
                  <p className="text-gray-700 mb-6">
                    Site üzerinden yapılan iletişim sadece bilgi alışverişi amaçlıdır. 
                    Tedavi hizmeti bu site üzerinden verilmemektedir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Policy Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Gizlilik Politikası</h2>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Çerezler (Cookies)</h3>
                <p className="text-gray-700 mb-6">
                  Bu site, kullanıcı deneyimini iyileştirmek için çerezler kullanmaktadır. 
                  Çerezler kişisel veri toplamaz, sadece site performansını artırır.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Üçüncü Taraf Hizmetler</h3>
                <p className="text-gray-700 mb-6">
                  Site, Google Analytics gibi üçüncü taraf hizmetler kullanabilir. 
                  Bu hizmetler anonim veri toplar.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Veri Saklama</h3>
                <p className="text-gray-700 mb-6">
                  İletişim formu verileri maksimum 2 yıl saklanır. 
                  Bu süre sonunda veriler güvenli şekilde silinir.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">İletişim</h3>
                <p className="text-gray-700 mb-6">
                                     Gizlilik politikası hakkında sorularınız için: fizyoterapistsefa4@gmail.com
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/20 backdrop-blur-sm text-white mb-6">
              <CheckCircle size={16} className="mr-2" />
              Sorularınız İçin
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Yasal Konularda Yardım
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              KVKK, gizlilik politikası veya yasal uyarılar hakkında sorularınız varsa bizimle iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                                 href="mailto:fizyoterapistsefa4@gmail.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-lg transform hover:scale-105"
              >
                E-posta Gönder
              </a>
              <a
                                  href="tel:+905528939386"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white border-2 border-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-all transform hover:scale-105"
              >
                Telefon Et
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 