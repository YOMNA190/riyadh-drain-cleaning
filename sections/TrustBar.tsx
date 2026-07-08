import { Star, Award, Lock, Truck } from 'lucide-react';

export default function TrustBar() {
  const items = [
    { icon: Star, text: '4.9 تقييم من 127 عميل' },
    { icon: Award, text: 'خدمة موثقة' },
    { icon: Lock, text: 'دفع آمن' },
    { icon: Truck, text: 'وصول سريع' },
  ];

  return (
    <section className="bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 reveal-stagger">
          {items.map((item) => (
            <div
              key={item.text}
              className="flex items-center justify-center gap-2 text-text-muted hover:scale-105 transition-transform cursor-default"
            >
              <item.icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
