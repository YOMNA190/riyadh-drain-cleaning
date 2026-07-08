import { XCircle, CheckCircle2 } from 'lucide-react';

export default function WhyCompressor() {
  const traditional = [
    'تكسير',
    'مواد كيماوية',
    'وقت طويل',
    'تكلفة مرتفعة',
  ];

  const modern = [
    'بدون تكسير',
    'هواء مضغوط آمن',
    'نتيجة فورية',
    'تكلفة مناسبة',
  ];

  return (
    <section id="why-compressor" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-text mb-12 reveal">
          لماذا الكومبروسور؟
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 relative reveal-stagger">
          {/* Traditional */}
          <div className="md:border-l border-border md:pl-8">
            <div className="flex items-center gap-2 mb-6">
              <XCircle className="w-6 h-6 text-danger" />
              <h3 className="text-lg font-bold text-danger">الطريقة التقليدية</h3>
            </div>
            <ul className="space-y-4">
              {traditional.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <XCircle className="w-5 h-5 text-danger flex-shrink-0" />
                  <span className="text-text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Modern */}
          <div className="md:pr-8">
            <div className="flex items-center gap-2 mb-6">
              <CheckCircle2 className="w-6 h-6 text-success" />
              <h3 className="text-lg font-bold text-success">تقنيتنا</h3>
            </div>
            <ul className="space-y-4">
              {modern.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-text font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
