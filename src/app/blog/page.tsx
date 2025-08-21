import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  Heart, 
  Activity, 
  Brain, 
  Bone, 
  Dumbbell,
  Target,
  Lightbulb,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';
import Link from 'next/link';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Bel Ağrısı İçin Ev Egzersizleri",
      excerpt: "Günlük hayatta sık karşılaşılan bel ağrısı için uygulayabileceğiniz güvenli egzersizler...",
      content: "Bel ağrısı, modern yaşamın en yaygın sorunlarından biridir. Uzun süre oturma, yanlış duruş ve hareketsizlik bel ağrısına neden olabilir. Bu yazıda, bel ağrısı için uygulayabileceğiniz güvenli egzersizler hakkında bilgi vereceğiz.",
      author: "Sefa Yılmaz",
      date: "15 Mart 2024",
      readTime: "5 dk",
      category: "Egzersiz",
      image: "/api/placeholder/400/250",
      tags: ["Bel ağrısı", "Egzersiz", "Sağlık"]
    },
    {
      id: 2,
      title: "Duruş Bozuklukları ve Düzeltme Yöntemleri",
      excerpt: "Günlük hayatta fark etmeden yaptığımız duruş hataları ve bunları düzeltme yöntemleri...",
      content: "Duruş bozuklukları, uzun vadede ciddi sağlık sorunlarına yol açabilir. Bu yazıda, yaygın duruş hataları ve bunları düzeltme yöntemleri hakkında bilgi vereceğiz.",
      author: "Sefa Yılmaz",
      date: "12 Mart 2024",
      readTime: "7 dk",
      category: "Duruş",
      image: "/api/placeholder/400/250",
      tags: ["Duruş", "Postür", "Sağlık"]
    },
    {
      id: 3,
      title: "Ofis Çalışanları İçin Egzersiz Önerileri",
      excerpt: "Günün büyük kısmını masa başında geçirenler için özel egzersiz programları...",
      content: "Ofis çalışanları, uzun süre hareketsiz kalmanın getirdiği sağlık sorunlarıyla karşı karşıya kalabilir. Bu yazıda, ofis çalışanları için özel egzersiz önerileri sunacağız.",
      author: "Sefa Yılmaz",
      date: "10 Mart 2024",
      readTime: "6 dk",
      category: "Ofis Egzersizleri",
      image: "/api/placeholder/400/250",
      tags: ["Ofis", "Egzersiz", "Hareket"]
    },
    {
      id: 4,
      title: "Fizyoterapi Nedir ve Ne Zaman Gerekli?",
      excerpt: "Fizyoterapinin ne olduğu, hangi durumlarda gerekli olduğu ve tedavi süreçleri...",
      content: "Fizyoterapi, hareket ve fonksiyon bozukluklarının tedavisinde kullanılan bir sağlık disiplinidir. Bu yazıda, fizyoterapinin ne olduğu ve ne zaman gerekli olduğu hakkında bilgi vereceğiz.",
      author: "Sefa Yılmaz",
      date: "8 Mart 2024",
      readTime: "8 dk",
      category: "Bilgilendirme",
      image: "/api/placeholder/400/250",
      tags: ["Fizyoterapi", "Tedavi", "Sağlık"]
    },
    {
      id: 5,
      title: "Spor Yaralanmaları ve İlk Müdahale",
      excerpt: "Spor yaparken oluşabilecek yaralanmalar ve ilk müdahale yöntemleri...",
      content: "Spor yaparken yaralanma riski her zaman vardır. Bu yazıda, yaygın spor yaralanmaları ve ilk müdahale yöntemleri hakkında bilgi vereceğiz.",
      author: "Sefa Yılmaz",
      date: "5 Mart 2024",
      readTime: "9 dk",
      category: "Spor",
      image: "/api/placeholder/400/250",
      tags: ["Spor", "Yaralanma", "İlk müdahale"]
    },
    {
      id: 6,
      title: "Yaşlılıkta Hareket ve Egzersiz",
      excerpt: "Yaşlılık döneminde hareket etmenin önemi ve güvenli egzersiz önerileri...",
      content: "Yaşlılıkta hareket etmek, sağlıklı bir yaşam için çok önemlidir. Bu yazıda, yaşlılık döneminde yapılabilecek güvenli egzersizler hakkında bilgi vereceğiz.",
      author: "Sefa Yılmaz",
      date: "3 Mart 2024",
      readTime: "6 dk",
      category: "Yaşlılık",
      image: "/api/placeholder/400/250",
      tags: ["Yaşlılık", "Egzersiz", "Hareket"]
    }
  ];

  const categories = [
    { name: "Egzersiz", icon: <Dumbbell className="w-5 h-5" />, count: 2 },
    { name: "Duruş", icon: <Target className="w-5 h-5" />, count: 1 },
    { name: "Ofis Egzersizleri", icon: <Activity className="w-5 h-5" />, count: 1 },
    { name: "Bilgilendirme", icon: <Lightbulb className="w-5 h-5" />, count: 1 },
    { name: "Spor", icon: <Heart className="w-5 h-5" />, count: 1 },
    { name: "Yaşlılık", icon: <Brain className="w-5 h-5" />, count: 1 }
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
              <BookOpen size={16} className="mr-2" />
              Bilgilendirme İçerikleri
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Fizyoterapi Blog
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Sağlığınız hakkında bilgilendirici içerikler, egzersiz önerileri ve fizyoterapi ile ilgili 
              güncel bilgiler burada. Sadece bilgilendirme amaçlıdır.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <CheckCircle size={20} className="mr-2" />
                Soru Sor
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {blogPosts.map((post) => (
                    <article key={post.id} className="bg-gradient-to-br from-white to-purple-50 rounded-xl shadow-lg border border-purple-100 hover:shadow-xl transition-all transform hover:scale-105">
                      <div className="p-6">
                        <div className="flex items-center mb-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                            {post.category}
                          </span>
                          <span className="ml-2 text-sm text-gray-500 flex items-center">
                            <Clock size={14} className="mr-1" />
                            {post.readTime}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-500">
                            <User size={14} className="mr-1" />
                            {post.author}
                          </div>
                          <div className="text-sm text-gray-500">
                            <Calendar size={14} className="inline mr-1" />
                            {post.date}
                          </div>
                        </div>
                        
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag, index) => (
                              <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  {/* Categories */}
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 mb-8 border border-purple-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Kategoriler</h3>
                    <div className="space-y-2">
                      {categories.map((category, index) => (
                        <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-white/50 transition-colors">
                          <div className="flex items-center">
                            <span className="text-purple-600 mr-2">{category.icon}</span>
                            <span className="text-gray-700">{category.name}</span>
                          </div>
                          <span className="text-sm text-gray-500 bg-white px-2 py-1 rounded-full">
                            {category.count}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Disclaimer */}
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
                    <div className="flex items-center mb-3">
                      <AlertTriangle className="w-5 h-5 text-orange-600 mr-2" />
                      <h3 className="text-sm font-semibold text-orange-800">Önemli Uyarı</h3>
                    </div>
                    <p className="text-xs text-orange-700">
                      Bu sitedeki tüm bilgiler sadece bilgilendirme amaçlıdır. 
                      Tedavi için mutlaka uzman bir fizyoterapiste danışınız.
                    </p>
                  </div>
                </div>
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
                <Lightbulb size={16} className="mr-2" />
                Daha Fazla Bilgi
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Sorularınız İçin İletişime Geçin
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Blog yazılarımız hakkında sorularınız varsa veya daha detaylı bilgi almak istiyorsanız 
                bizimle iletişime geçebilirsiniz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-lg transform hover:scale-105"
                >
                  <CheckCircle size={20} className="mr-2" />
                  İletişime Geç
                </Link>
                <a
                  href="https://wa.me/905551234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white border-2 border-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-all transform hover:scale-105"
                >
                  WhatsApp
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