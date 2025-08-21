# Fizyoterapist Sefa Yılmaz - Kişisel Web Sitesi

Modern, profesyonel ve yasal uyumlu bir fizyoterapist kişisel web sitesi. Next.js, TypeScript ve Tailwind CSS kullanılarak geliştirilmiştir.

## 🎯 Proje Amacı

Bu web sitesi, fizyoterapist Sefa Yılmaz'ın profesyonel hizmetlerini tanıtmak, potansiyel hastalarla iletişim kurmak ve güven veren bir imaj oluşturmak amacıyla tasarlanmıştır.

## ✨ Özellikler

### 🏠 Ana Sayfa
- Etkileyici hero section
- Hizmet özeti
- Güven oluşturan özellikler
- Call-to-action butonları

### 👨‍⚕️ Hakkımda Sayfası
- Detaylı özgeçmiş
- Eğitim ve deneyim bilgileri
- Misyon ve vizyon
- Kişisel değerler

### 🏥 Hizmetler Sayfası
- Manuel terapi
- Rehabilitasyon
- Egzersiz danışmanlığı
- Sporcu fizyoterapisi
- Bel-boyun ağrıları
- Postür analizi

### 📞 İletişim Sayfası
- İletişim formu (form validasyonu ile)
- İletişim bilgileri
- Harita entegrasyonu
- Sık sorulan sorular

### 📝 Blog Sayfası
- Fizyoterapi makaleleri
- Kategori filtreleme
- Newsletter aboneliği
- SEO dostu içerik

## 🛠️ Teknolojiler

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **Animasyonlar**: Framer Motion
- **İkonlar**: Lucide React
- **Form Yönetimi**: React Hook Form, Yup
- **Deployment**: Vercel (önerilen)

## 🚀 Kurulum

1. Projeyi klonlayın:
```bash
git clone [repository-url]
cd fizyoterapi-sitesi
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

4. Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

## 📁 Proje Yapısı

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global stiller
│   ├── layout.tsx         # Ana layout
│   ├── page.tsx           # Ana sayfa
│   ├── hakkimda/          # Hakkımda sayfası
│   ├── hizmetler/         # Hizmetler sayfası
│   ├── iletisim/          # İletişim sayfası
│   └── blog/              # Blog sayfası
├── components/            # React bileşenleri
│   ├── Header.tsx         # Navigasyon
│   ├── Footer.tsx         # Footer
│   ├── Hero.tsx           # Ana sayfa hero
│   └── ContactForm.tsx    # İletişim formu
```

## 🎨 Tasarım Sistemi

### Renk Paleti
- **Ana Renk**: #3B82F6 (Mavi)
- **İkincil Renk**: #22C55E (Yeşil)
- **Vurgu Renk**: #F59E0B (Turuncu)
- **Nötr Renkler**: Gri tonları

### Tipografi
- **Başlıklar**: Poppins (Google Fonts)
- **Metin**: Inter (Google Fonts)

## ⚖️ Yasal Uyumluluk

Bu web sitesi Türkiye'deki fizyoterapist reklam yönetmeliklerine uygun olarak tasarlanmıştır:

- ✅ Bilgilendirme amaçlı içerik
- ✅ Reklam niteliğinde iddialardan kaçınma
- ✅ KVKK uyumlu form
- ✅ Şeffaf iletişim bilgileri

## 🔧 Özelleştirme

### İçerik Güncelleme
1. `src/app/layout.tsx` dosyasında metadata bilgilerini güncelleyin
2. Component dosyalarında kişisel bilgileri değiştirin
3. İletişim bilgilerini güncelleyin

### Renk Değiştirme
1. `src/app/globals.css` dosyasında CSS değişkenlerini güncelleyin
2. Tailwind config dosyasında renk paletini özelleştirin

### Yeni Sayfa Ekleme
1. `src/app/` altında yeni klasör oluşturun
2. `page.tsx` dosyası ekleyin
3. Header component'inde navigasyon linkini güncelleyin

## 📱 Responsive Tasarım

Site tüm cihazlarda mükemmel görünüm sağlar:
- 📱 Mobil (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1280px+)

## 🚀 Deployment

### Vercel (Önerilen)
1. GitHub'a projeyi push edin
2. Vercel'de yeni proje oluşturun
3. GitHub repository'nizi bağlayın
4. Otomatik deployment başlayacaktır

### Diğer Platformlar
- Netlify
- Railway
- DigitalOcean App Platform

## 📈 SEO Optimizasyonu

- ✅ Meta etiketleri
- ✅ Open Graph
- ✅ Semantic HTML
- ✅ Hızlı yükleme
- ✅ Mobile-first tasarım
- ✅ Structured data (schema.org)

## 🔒 Güvenlik

- ✅ Form validasyonu
- ✅ XSS koruması
- ✅ CSRF koruması
- ✅ HTTPS zorunluluğu

## 📞 Destek

Herhangi bir sorunuz için:
- 📧 Email: info@sefayilmaz.com
- 📱 Telefon: 0555 123 45 67

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

---

**Not**: Bu web sitesi örnek amaçlı oluşturulmuştur. Gerçek kullanım için kişisel bilgileri ve içerikleri güncelleyiniz.
