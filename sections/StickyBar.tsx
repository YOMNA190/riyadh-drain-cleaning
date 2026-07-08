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
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden safe-area-bottom animate-slide-up">
      <div className="bg-primary rounded-t-2xl shadow-sticky px-4 py-3 flex items-center gap-3">
        {/* Phone Button */}
        <a
          href="tel:+966550460377"
          data-event="phone_call"
          className="flex-1 flex items-center justify-center gap-2 bg-white/10 text-white rounded-xl py-3 font-bold text-sm hover:bg-white/20 transition-colors relative overflow-hidden"
          aria-label="اتصل الآن"
          onClick={() => trackPhoneCall()}
        >
          <span className="relative">
            <Phone className="w-5 h-5" />
            <span className="absolute inset-0 rounded-full bg-secondary/50 animate-pulse-ring" />
          </span>
          <span className="tabular-nums" dir="ltr">0550460377</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/966550460377"
          target="_blank"
          rel="noopener noreferrer"
          data-event="whatsapp_click"
          className="flex-1 flex items-center justify-center gap-2 bg-cta-green text-white rounded-xl py-3 font-bold text-sm hover:bg-cta-green-hover transition-colors"
          aria-label="واتساب"
          onClick={() => trackContact()}
        >
          <MessageCircle className="w-5 h-5" />
          واتساب
        </a>
      </div>
    </div>
  );
}
