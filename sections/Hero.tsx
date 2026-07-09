import { useEffect, useRef } from 'react';
import { trackPhoneCall, trackContact } from '@/lib/gtag';
import { Phone, MessageCircle, Shield, Clock, MapPin, Zap } from 'lucide-react';

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const badges = [
    { icon: Zap, text: 'وصول خلال 30 دقيقة' },
    { icon: Shield, text: 'ضمان الخدمة' },
    { icon: Clock, text: 'خدمة 24 ساعة' },
    { icon: MapPin, text: 'تغطية كاملة للرياض' },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] max-h-[900px] overflow-hidden flex items-end"
      role="banner"
    >
      {/* Background Image with Parallax */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 w-full h-[130%] -top-[15%]"
        style={{ willChange: 'transform' }}
      >
        <img
          src="/images/hero_new.jpg"
          alt="شاحنة خدمة تسليك مجاري أمام فيلا حديثة في الرياض"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(11, 79, 122, 0.85) 0%, rgba(11, 79, 122, 0.50) 40%, transparent 80%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="text-center">
          {/* Title */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight opacity-0"
            style={{
              textShadow: '0 2px 20px rgba(0,0,0,0.3)',
              animation: 'heroFadeUp 0.8s ease-out 0.2s forwards',
            }}
          >
            تسليك مجاري بالكومبروسور في الرياض
          </h1>

          {/* Subtitle */}
          <p
            className="text-base sm:text-lg text-white/90 mb-8 opacity-0"
            style={{
              animation: 'heroFadeUp 0.8s ease-out 0.4s forwards',
            }}
          >
            بدون تكسير • بدون مواد كيماوية • خدمة سريعة في جميع أحياء الرياض
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {badges.map((badge, index) => (
              <div
                key={badge.text}
                className="flex items-center gap-2 text-white/90 opacity-0"
                style={{
                  animation: `heroFadeUp 0.6s ease-out ${0.6 + index * 0.1}s forwards`,
                }}
              >
                <badge.icon className="w-5 h-5 text-secondary" />
                <span className="text-sm font-medium">{badge.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0"
            style={{
              animation: 'heroFadeUp 0.8s ease-out 1.0s forwards',
            }}
          >
            <a
              href="tel:+966550460377"
              data-event="phone_call"
              className="flex items-center gap-3 bg-secondary text-white rounded-full px-8 py-4 font-bold text-lg btn-hover shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/30"
              aria-label="اتصل بنا على 0550460377"
              onClick={() => trackPhoneCall()}
            >
              <span className="relative">
                <Phone className="w-6 h-6" />
                <span className="absolute inset-0 rounded-full bg-white/40 animate-pulse-ring" />
              </span>
              <span className="flex flex-col items-start">
                <span className="text-xs font-medium opacity-90">اتصل الآن</span>
                <span className="text-sm font-bold">0550460377</span>
              </span>
            </a>
            <a
              href="https://wa.me/966550460377"
              target="_blank"
              rel="noopener noreferrer"
              data-event="whatsapp_click"
              className="flex items-center gap-3 bg-cta-green text-white rounded-full px-8 py-4 font-bold text-lg whatsapp-btn shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/30"
              aria-label="تواصل معنا عبر واتساب"
              onClick={() => trackContact()}
            >
              <MessageCircle className="w-6 h-6" />
              <span className="flex flex-col items-start">
                <span className="text-xs font-medium opacity-90">تواصل عبر</span>
                <span className="text-sm font-bold">واتساب</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
