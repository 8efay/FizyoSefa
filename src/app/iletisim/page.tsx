import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function Iletisim() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                İletişim
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Sağlığınız için buradayım. Sorularınız ve randevu talepleriniz için 
                benimle iletişime geçebilirsiniz.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <ContactForm />
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">İletişim Bilgileri</h3>
                  <p className="text-lg text-gray-600 mb-8">
                    Size en iyi hizmeti sunabilmek için buradayım. 
                    Aşağıdaki kanallardan benimle iletişime geçebilirsiniz.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">Telefon</h4>
                      <a href="tel:+905551234567" className="text-gray-600 hover:text-primary transition-colors">
                        0555 123 45 67
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">E-posta</h4>
                      <a href="mailto:info@sefayilmaz.com" className="text-gray-600 hover:text-secondary transition-colors">
                        info@sefayilmaz.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">Adres</h4>
                      <p className="text-gray-600">
                        İstanbul, Türkiye<br />
                        Detaylı adres bilgisi için lütfen iletişime geçin.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">Çalışma Saatleri</h4>
                      <div className="text-gray-600">
                        <p>Pazartesi - Cuma: 09:00 - 18:00</p>
                        <p>Cumartesi: 09:00 - 14:00</p>
                        <p>Pazar: Kapalı</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Contact Buttons */}
                <div className="pt-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Hızlı İletişim</h4>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://wa.me/905551234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      WhatsApp
                    </a>
                    <a
                      href="tel:+905551234567"
                      className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Hemen Ara
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Konum
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Klinik konumumuz ve ulaşım bilgileri.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Harita entegrasyonu buraya eklenecek</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Google Maps veya başka bir harita servisi entegre edilebilir
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Sık Sorulan Sorular
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Hasta deneyimini kolaylaştırmak için sık sorulan soruları yanıtlıyorum.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  İlk randevu için ne yapmam gerekiyor?
                </h3>
                <p className="text-gray-600">
                  İlk randevunuz için telefon veya e-posta ile iletişime geçebilirsiniz. 
                  Size uygun bir zaman belirleyeceğiz.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Tedavi süresi ne kadar?
                </h3>
                <p className="text-gray-600">
                  Tedavi süresi probleminize göre değişmektedir. İlk değerlendirmede 
                  size detaylı bilgi vereceğim.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Hangi ödeme yöntemlerini kabul ediyorsunuz?
                </h3>
                <p className="text-gray-600">
                  Nakit, kredi kartı ve banka havalesi ile ödeme yapabilirsiniz. 
                  Detaylar için iletişime geçebilirsiniz.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Ev ziyareti yapıyor musunuz?
                </h3>
                <p className="text-gray-600">
                  Ev ziyareti hizmeti de sunmaktayım. Detaylar için lütfen 
                  iletişime geçin.
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