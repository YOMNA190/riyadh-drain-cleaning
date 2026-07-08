import { Phone, Search, Car, Settings, CheckCircle } from 'lucide-react';

export default function WorkProcess() {
  const steps = [
    { icon: Phone, label: 'اتصالك بنا' },
    { icon: Search, label: 'تقييم مجاني عبر الهاتف' },
    { icon: Car, label: 'الوصول خلال 30 دقيقة' },
    { icon: Settings, label: 'التسليك بالكومبروسور' },
    { icon: CheckCircle, label: 'اختبار وضمان الخدمة' },
  ];

  return (
    <section id="process" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-text mb-12 reveal">
          خطوات الخدمة
        </h2>

        <div className="relative reveal-stagger">
          {/* Connecting Line - Desktop */}
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-border" />

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <div key={step.label} className="flex md:flex-col items-center gap-4 md:gap-3 relative">
                {/* Step Circle */}
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0 z-10 shadow-soft">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>

                {/* Step Label */}
                <div className="md:text-center">
                  <step.icon className="w-5 h-5 text-primary mb-1 md:mx-auto" />
                  <p className="text-sm font-medium text-text">{step.label}</p>
                </div>

                {/* Connecting Line - Mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden absolute -bottom-4 right-8 w-0.5 h-4 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
