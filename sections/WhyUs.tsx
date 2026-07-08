import { Zap, Wrench, Hammer, Banknote, BadgeCheck, Moon } from 'lucide-react';

export default function WhyUs() {
  const features = [
    { icon: Zap, title: 'وصول خلال 30 دقيقة' },
    { icon: Wrench, title: 'فنيون محترفون ومعتمدون' },
    { icon: Hammer, title: 'بدون تكسير أو تلف' },
    { icon: Banknote, title: 'أسعار واضحة بدون Hidden fees' },
    { icon: BadgeCheck, title: 'ضمان الخدمة 100%' },
    { icon: Moon, title: 'خدمة 24 ساعة — 7 أيام' },
  ];

  return (
    <section id="why-us" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-text mb-12 reveal">
          لماذا نحن الخيار الأفضل؟
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 reveal-stagger">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group flex flex-col items-center text-center p-4"
            >
              <div className="w-12 h-12 flex items-center justify-center mb-3">
                <feature.icon className="w-12 h-12 text-primary icon-hover" />
              </div>
              <h3 className="font-bold text-text text-sm md:text-base">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
