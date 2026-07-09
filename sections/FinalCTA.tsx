import { Phone, MessageCircle } from 'lucide-react';
import { trackPhoneCall, trackContact } from '@/lib/gtag';

export default function FinalCTA() {
  return (
    <section className="py-16 md:py-24 bg-primary relative overflow-hidden reveal">
      {/* Subtle noise pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          جاهز تحل مشكلة الانسداد؟
        </h2>
        <p className="text-lg text-white/80 mb-10">
          اتصل الآن ونوصلك خلال 30 دقيقة
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href="tel:+966550460377"
            data-event="phone_call"
            className="flex items-center gap-3 bg-secondary text-white rounded-full px-10 py-5 font-bold text-lg btn-hover w-full sm:w-auto justify-center shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/20"
            aria-label="اتصل بنا على 0550460377"
            onClick={() => trackPhoneCall()}
          >
            <span className="relative">
              <Phone className="w-6 h-6" />
              <span className="absolute inset-0 rounded-full bg-white/30 animate-pulse-ring" />
            </span>
            <span className="flex flex-col items-start">
              <span className="text-xs font-medium opacity-95">اتصل بنا الآن</span>
              <span className="text-base font-bold">0550460377</span>
            </span>
          </a>
          <a
            href="https://wa.me/966550460377"
            target="_blank"
            rel="noopener noreferrer"
            data-event="whatsapp_click"
            className="flex items-center gap-3 bg-cta-green text-white rounded-full px-10 py-5 font-bold text-lg whatsapp-btn w-full sm:w-auto justify-center shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/20"
            aria-label="تواصل معنا عبر واتساب"
            onClick={() => trackContact()}
          >
            <MessageCircle className="w-6 h-6" />
            <span className="flex flex-col items-start">
              <span className="text-xs font-medium opacity-95">تواصل عبر</span>
              <span className="text-base font-bold">واتساب فوري</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
