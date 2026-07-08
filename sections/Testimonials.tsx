import { useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      stars: 5,
      text: 'وصلوا خلال 20 دقيقة، حلوا المشكلة بدون ما يكسروا حاجة. أنصح فيهم بقوة.',
      name: 'محمد العتيبي',
      area: 'العليا',
      initial: 'م',
    },
    {
      stars: 5,
      text: 'خدمة ممتازة وسعر مناسب. الكومبروسور فعلاً يفرق عن الطرق التقليدية.',
      name: 'فهد السلمي',
      area: 'الروضة',
      initial: 'ف',
    },
    {
      stars: 5,
      text: 'اتصلت الساعة 2 بالليل وكانوا جاهزين. شكراً على الاحترافية.',
      name: 'سارة القحطاني',
      area: 'الياسمين',
      initial: 'س',
    },
  ];

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prev = () => {
    setActive((p) => (p - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [isPaused, next]);

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-text mb-12 reveal">
          آراء عملائنا
        </h2>

        <div
          className="relative max-w-2xl mx-auto reveal"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Cards Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(${active * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="w-full flex-shrink-0 px-2"
                  style={{ transform: `translateX(-${active * 100}%)` }}
                >
                  <div className="bg-white rounded-2xl shadow-card p-6 md:p-8 text-center">
                    {/* Quote Icon */}
                    <Quote className="w-10 h-10 text-secondary mx-auto mb-4 rotate-180" />

                    {/* Stars */}
                    <div className="flex justify-center gap-1 mb-4">
                      {Array.from({ length: t.stars }).map((_, si) => (
                        <Star
                          key={si}
                          className="w-5 h-5 text-warning fill-warning"
                        />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-text-muted leading-relaxed mb-6 text-lg">
                      "{t.text}"
                    </p>

                    {/* Avatar & Name */}
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-bold text-lg">
                          {t.initial}
                        </span>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-text">{t.name}</p>
                        <p className="text-sm text-text-muted">— {t.area}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prev}
            className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-4 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow"
            aria-label="السابق"
          >
            <ChevronRight className="w-5 h-5 text-text" />
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-4 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow"
            aria-label="التالي"
          >
            <ChevronLeft className="w-5 h-5 text-text" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === active
                    ? 'bg-primary w-6'
                    : 'bg-border hover:bg-text-muted'
                }`}
                aria-label={`الشهادة ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
