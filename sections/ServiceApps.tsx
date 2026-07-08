import { UtensilsCrossed, ShowerHead, Home, Building2 } from 'lucide-react';

export default function ServiceApps() {
  const services = [
    {
      icon: UtensilsCrossed,
      title: 'انسداد المطابخ',
      image: '/images/kitchen_drain_new.jpg',
      alt: 'حوض مطبخ حديث',
    },
    {
      icon: ShowerHead,
      title: 'انسداد الحمامات',
      image: '/images/bathroom_drain_new.jpg',
      alt: 'حمام حديث نظيف',
    },
    {
      icon: Home,
      title: 'انسداد الفلل',
      image: '/images/villa_service_new.jpg',
      alt: 'فيلا فاخرة في السعودية',
    },
    {
      icon: Building2,
      title: 'المباني التجارية',
      image: '/images/commercial_service_new.jpg',
      alt: 'مبنى تجاري حديث',
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-text mb-12 reveal">
          نغطي جميع أنواع الانسداد
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal-stagger">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-card card-hover"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover img-zoom"
                  loading="lazy"
                />
              </div>
              <div className="p-4 flex items-center gap-3">
                <service.icon className="w-6 h-6 text-primary icon-hover" />
                <h3 className="font-bold text-text">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
