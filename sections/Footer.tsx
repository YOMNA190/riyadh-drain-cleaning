import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { trackPhoneCall, trackContact } from '@/lib/gtag';

export default function Footer() {
  return (
    <footer className="bg-footer py-12 pb-24 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              تسليك مجاري بالرياض
            </h3>
            <p className="text-text-light text-sm leading-relaxed">
              خدمة تسليك مجاري بالكومبروسور في جميع أحياء الرياض. بدون تكسير،
              بدون مواد كيماوية، وصول سريع خلال 30 دقيقة.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">تواصل معنا</h4>
            <div className="space-y-3">
              <a
                href="tel:+966550460377"
                className="flex items-center gap-2 text-text-light hover:text-white transition-colors"
                onClick={() => trackPhoneCall()}
              >
                <Phone className="w-4 h-4" />
                <span className="tabular-nums" dir="ltr">0550460377</span>
              </a>
              <a
                href="https://wa.me/966550460377"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-text-light hover:text-white transition-colors"
                onClick={() => trackContact()}
              >
                <MessageCircle className="w-4 h-4" />
                راسلنا على واتساب
              </a>
            </div>
          </div>

          {/* Coverage */}
          <div>
            <h4 className="text-white font-bold mb-4">تغطيتنا</h4>
            <div className="flex items-start gap-2 text-text-light">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>نخدم جميع أحياء الرياض وضواحيها</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-light text-sm">
            &copy; 2026 تسليك مجاري بالرياض. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="text-text-light hover:text-white transition-colors">
              سياسة الخصوصية
            </a>
            <a href="#" className="text-text-light hover:text-white transition-colors">
              شروط الخدمة
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
