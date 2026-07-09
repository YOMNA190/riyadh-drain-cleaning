import { useEffect, useState } from 'react';
import { trackPhoneCall, trackContact } from '@/lib/gtag';
import { Phone, MessageCircle } from 'lucide-react';

export default function StickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Mobile Sticky Bar - Visible only on mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-[60] md:hidden safe-area-bottom animate-slide-up">
        <div className="bg-white/98 backdrop-blur-md border-t-2 border-secondary shadow-[0_-6px_30px_rgba(0,0,0,0.15)] px-4 py-3 flex items-center gap-3">
          {/* Phone Button */}
          <a
            href="tel:+966550460377"
            data-event="phone_call"
            className="flex-1 flex items-center justify-center gap-2 bg-secondary text-white rounded-xl py-4 font-bold text-base shadow-lg hover:shadow-xl active:scale-95 transition-all relative overflow-hidden border-2 border-secondary/50"
            aria-label="اتصل الآن"
            onClick={() => trackPhoneCall()}
          >
            <span className="relative">
              <Phone className="w-5 h-5" />
              <span className="absolute inset-0 rounded-full bg-white/30 animate-pulse-ring" />
            </span>
            اتصل الآن
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/966550460377"
            target="_blank"
            rel="noopener noreferrer"
            data-event="whatsapp_click"
            className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white rounded-xl py-4 font-bold text-base shadow-lg hover:shadow-xl active:scale-95 transition-all border-2 border-[#25D366]/50"
            aria-label="واتساب"
            onClick={() => trackContact()}
          >
            <MessageCircle className="w-5 h-5" />
            واتساب
          </a>
        </div>
      </div>

      {/* Desktop Floating Buttons - Visible only on desktop */}
      <div className="hidden md:flex fixed bottom-8 left-8 z-[60] flex-col gap-4 animate-slide-up">
        {/* Desktop Phone */}
        <a
          href="tel:+966550460377"
          className="group flex items-center gap-3 bg-secondary text-white p-5 rounded-full shadow-2xl hover:scale-115 hover:shadow-3xl hover:bg-secondary/90 transition-all duration-300 border-2 border-secondary/50"
          onClick={() => trackPhoneCall()}
          title="اتصل بنا"
        >
          <div className="relative">
            <Phone className="w-7 h-7" />
            <span className="absolute inset-0 rounded-full bg-white/40 animate-pulse-ring" />
          </div>
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold whitespace-nowrap text-base">
            0550460377
          </span>
        </a>

        {/* Desktop WhatsApp */}
        <a
          href="https://wa.me/966550460377"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 bg-[#25D366] text-white p-5 rounded-full shadow-2xl hover:scale-115 hover:shadow-3xl hover:bg-[#20bd5a] transition-all duration-300 border-2 border-[#25D366]/50"
          onClick={() => trackContact()}
          title="تواصل عبر واتساب"
        >
          <MessageCircle className="w-7 h-7" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold whitespace-nowrap text-base">
            واتساب فوري
          </span>
        </a>
      </div>
    </>
  );
}
