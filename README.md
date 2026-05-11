# Selim Kaan Topaç - Personal Blog

Modern, minimalist kişisel blog sitesi. Next.js 14 ve WordPress Headless CMS kullanılarak geliştirilmiştir.

## 🚀 Teknolojiler

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **CMS:** WordPress (Headless)
- **Deployment:** Vercel
- **Fonts:** Inter + Playfair Display

## 📁 Proje Yapısı

```
├── app/
│   ├── components/      # React componentleri
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── BlogCard.tsx
│   │   ├── BlogList.tsx
│   │   ├── CategoryFilter.tsx
│   │   └── Footer.tsx
│   ├── blog/
│   │   └── [slug]/      # Dinamik blog sayfaları
│   │       └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx         # Ana sayfa
│   ├── loading.tsx
│   ├── not-found.tsx
│   ├── sitemap.ts
│   └── robots.ts
├── lib/
│   ├── types.ts         # TypeScript type tanımları
│   └── wordpress.ts     # WordPress API fonksiyonları
├── public/
├── next.config.js
├── tailwind.config.js
└── package.json
```

## 🛠️ Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Production build
npm run build

# Production sunucusunu başlat
npm start
```

## 🔌 WordPress API Entegrasyonu

Proje şu anda WordPress.com REST API kullanmaktadır:

```
https://public-api.wordpress.com/rest/v1.1/sites/selimkaantpc.wordpress.com/posts
```

İleride self-hosted WordPress'e geçiş için `lib/wordpress.ts` dosyasındaki endpoint'i güncelleyin:

```typescript
const SELF_HOSTED_API = 'https://wp.selimkaantopac.com/wp-json/wp/v2';
```

## 🌐 Deployment (Vercel)

1. GitHub'a push yapın
2. Vercel'de yeni proje oluşturun
3. GitHub reposunu bağlayın
4. Deploy edin

### Domain Ayarları

Vercel'de domain ekledikten sonra DNS ayarları:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## 📝 Özellikler

- ✅ Server-Side Rendering (SSR)
- ✅ Static Site Generation (SSG) - Blog yazıları
- ✅ SEO Optimizasyonu (Meta tags, Open Graph, Twitter Cards)
- ✅ Otomatik Sitemap oluşturma
- ✅ Responsive tasarım
- ✅ Image Optimization (next/image)
- ✅ Kategori filtreleme
- ✅ Türkçe tarih formatı
- ✅ 404 sayfası
- ✅ Loading durumları

## 🎨 Tasarım

- Minimalist ve temiz arayüz
- Playfair Display (serif) + Inter (sans-serif) font kombinasyonu
- Monokromatik renk paleti
- Hover efektleri ve animasyonlar
- Responsive grid sistemi

## 📄 Lisans

MIT License - Selim Kaan Topaç
