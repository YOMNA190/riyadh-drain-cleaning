import { useState, useEffect } from 'react';
import { trackPhoneCall } from '@/lib/gtag';
import { Phone, Menu, X } from 'lucide-react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'الخدمة', href: '#why-compressor' },
    { label: 'لماذا نحن', href: '#why-us' },
    { label: 'تغطيتنا', href: '#coverage' },
    { label: 'الأسئلة', href: '#faq' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 nav-transition ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-nav'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            className={`font-bold text-lg transition-transform hover:scale-[1.02] ${
              scrolled ? 'text-text' : 'text-white'
            }`}
          >
            تسليك مجاري بالرياض
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:opacity-80 ${
                  scrolled ? 'text-text-muted' : 'text-white/80'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+966550460377"
              data-event="phone_call"
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all btn-hover ${
                scrolled
                  ? 'bg-primary text-white'
                  : 'bg-white text-primary'
              }`}
              onClick={() => trackPhoneCall()}
            >
              <Phone className="w-4 h-4" />
              اتصل الآن
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="القائمة"
          >
            {menuOpen ? (
              <X className={`w-6 h-6 ${scrolled ? 'text-text' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled ? 'text-text' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-border">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-text-muted hover:text-primary py-2 text-sm font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+966550460377"
              data-event="phone_call"
              className="flex items-center justify-center gap-2 bg-primary text-white rounded-full px-4 py-3 text-sm font-medium w-full"
              onClick={() => {
                setMenuOpen(false);
                trackPhoneCall();
              }}
            >
              <Phone className="w-4 h-4" />
              اتصل الآن
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
