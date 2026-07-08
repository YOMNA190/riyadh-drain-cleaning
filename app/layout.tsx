import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "تسليك مجاري بالكومبروسور بالرياض | خدمة 24 ساعة | بدون تكسير",
  description: "خدمة تسليك مجاري بالكومبروسور في جميع أحياء الرياض. بدون تكسير وبدون مواد كيماوية مع وصول سريع خلال 30 دقيقة. اتصل الآن: +966 50 627 1272",
  keywords: "تسليك مجاري بالكومبروسور الرياض, تسليك مجاري الرياض, كومبروسور تسليك مجاري, تسليك مجاري بدون تكسير",
  authors: [{ name: "تسليك مجاري بالرياض" }],
  robots: "index, follow, max-image-preview:large",
  openGraph: {
    title: "تسليك مجاري بالكومبروسور بالرياض | خدمة 24 ساعة | بدون تكسير",
    description: "خدمة تسليك مجاري بالكومبروسور في جميع أحياء الرياض. بدون تكسير وبدون مواد كيماوية مع وصول سريع خلال 30 دقيقة.",
    url: "https://riyadh-drain-cleaning.vercel.app/",
    siteName: "تسليك مجاري بالرياض",
    images: [
      {
        url: "https://riyadh-drain-cleaning.vercel.app/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "تسليك مجاري بالكومبروسور",
      },
    ],
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "تسليك مجاري بالكومبروسور بالرياض | خدمة 24 ساعة | بدون تكسير",
    description: "خدمة تسليك مجاري بالكومبروسور في جميع أحياء الرياض. بدون تكسير وبدون مواد كيماوية مع وصول سريع خلال 30 دقيقة.",
    images: ["https://riyadh-drain-cleaning.vercel.app/images/hero.jpg"],
  },
  alternates: {
    canonical: "https://riyadh-drain-cleaning.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={tajawal.variable}>
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18297016690"></script>
        <script dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18297016690');`
        }} />
        
        {/* Schema.org JSON-LD: LocalBusiness */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "تسليك مجاري بالرياض",
            "image": "https://riyadh-drain-cleaning.vercel.app/images/hero.jpg",
            "description": "خدمة تسليك مجاري بالكومبروسور في جميع أحياء الرياض بدون تكسير وبدون مواد كيماوية، مع وصول خلال 30 دقيقة وعمل على مدار 24 ساعة.",
            "url": "https://riyadh-drain-cleaning.vercel.app/",
            "telephone": "+966550460377",
            "priceRange": "$$",
            "areaServed": [
              { "@type": "City", "name": "الرياض" },
              { "@type": "Place", "name": "العليا" },
              { "@type": "Place", "name": "الروضة" },
              { "@type": "Place", "name": "الياسمين" },
              { "@type": "Place", "name": "النرجس" },
              { "@type": "Place", "name": "قرطبة" },
              { "@type": "Place", "name": "اليرموك" },
              { "@type": "Place", "name": "الشفا" },
              { "@type": "Place", "name": "العزيزية" },
              { "@type": "Place", "name": "السليمانية" },
              { "@type": "Place", "name": "الروابي" }
            ],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "الرياض",
              "addressCountry": "SA"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "127"
            },
            "sameAs": []
          })
        }} />

        {/* Schema.org JSON-LD: Service */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "تسليك مجاري بالكومبروسور",
            "name": "تسليك مجاري بالكومبروسور في الرياض",
            "provider": {
              "@type": "LocalBusiness",
              "name": "تسليك مجاري بالرياض",
              "telephone": "+966550460377"
            },
            "areaServed": {
              "@type": "City",
              "name": "الرياض"
            },
            "description": "تسليك مجاري بالهواء المضغوط (الكومبروسور) بدون تكسير وبدون مواد كيماوية لجميع أحياء الرياض، خدمة متاحة 24 ساعة مع وصول خلال 30 دقيقة.",
            "hoursAvailable": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            }
          })
        }} />

        {/* Schema.org JSON-LD: BreadcrumbList */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "الرئيسية",
                "item": "https://riyadh-drain-cleaning.vercel.app/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "تسليك مجاري بالكومبروسور الرياض",
                "item": "https://riyadh-drain-cleaning.vercel.app/"
              }
            ]
          })
        }} />

        {/* Schema.org JSON-LD: FAQPage */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "كم سعر خدمة تسليك مجاري بالكومبروسور؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "السعر يعتمد على نوع وشدة الانسداد. نقدم تقييم مجاني عبر الهاتف ونحدد السعر قبل المباشرة بالعمل — لا يوجد أي رسوم خفية."
                }
              },
              {
                "@type": "Question",
                "name": "هل الكومبروسور يضر المواسير؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "لا، الكومبروسور يستخدم هواء مضغوط بضغط مناسب وآمن على جميع أنواع المواسير. هو الطريقة الأكثر أماناً مقارنة بالمواد الكيماوية أو التكسير."
                }
              },
              {
                "@type": "Question",
                "name": "هل تحتاجون تكسير في الحمام أو المطبخ؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "لا نحتاج أي تكسير على الإطلاق. الكومبروسور يقوم بتسليك المجاري من خلال الفتحات الموجودة بدون أي أضرار بالجدران أو الأرضيات."
                }
              },
              {
                "@type": "Question",
                "name": "هل تعملون 24 ساعة حتى في العطلات؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "نعم، نعمل 24 ساعة طوال أيام الأسبوع بما في ذلك العطلات الرسمية. فريقنا جاهز للاستجابة في أي وقت."
                }
              },
              {
                "@type": "Question",
                "name": "هل تغطون شمال الرياض وجنوبها؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "نعم، نغطي جميع أحياء الرياض من الشمال إلى الجنوب ومن الشرق إلى الغرب بما في ذلك الضواحي."
                }
              },
              {
                "@type": "Question",
                "name": "كيف أحجز الخدمة وكم وقت الانتظار؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "يمكنك الحجز بالاتصال بنا أو عبر واتساب. متوسط وقت الوصول 30 دقيقة حسب منطقتك في الرياض."
                }
              }
            ]
          })
        }} />
      </head>
      <body className="min-h-full flex flex-col font-tajawal">{children}</body>
    </html>
  );
}
