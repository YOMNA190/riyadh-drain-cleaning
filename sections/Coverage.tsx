import { MapPin } from 'lucide-react';

export default function Coverage() {
  const areas = [
    'العليا', 'الروضة', 'الياسمين', 'النرجس', 'قرطبة',
    'اليرموك', 'الشفا', 'العزيزية', 'السليمانية', 'الروابي',
  ];

  return (
    <section id="coverage" className="py-16 md:py-24 bg-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-text mb-4 reveal">
          نخدم جميع أحياء الرياض
        </h2>
        <p className="text-center text-text-muted mb-12 reveal">
          نصلك أينما كنت في العاصمة
        </p>

        {/* Decorative Map */}
        <div className="flex justify-center mb-10 reveal">
          <div className="relative w-48 h-48 md:w-64 md:h-64">
            {/* Dotted circle representing Riyadh */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30" />
            <div className="absolute inset-4 rounded-full border border-dashed border-primary/20" />
            {/* Center pin */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            {/* Area pins */}
            {areas.slice(0, 6).map((_, i) => {
              const angle = (i * 60 * Math.PI) / 180;
              const radius = 35;
              const x = 50 + radius * Math.cos(angle);
              const y = 50 + radius * Math.sin(angle);
              return (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-primary rounded-full"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                />
              );
            })}
          </div>
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 reveal-stagger">
          {areas.map((area) => (
            <div
              key={area}
              className="bg-white rounded-xl px-4 py-3 text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-default"
            >
              <span className="text-sm font-medium text-text">{area}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-text-muted mt-8 reveal">
          ونخدم جميع أحياء الرياض وضواحيها
        </p>
      </div>
    </section>
  );
}
