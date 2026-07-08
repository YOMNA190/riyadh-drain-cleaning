export default function BeforeAfter() {
  return (
    <section id="before-after" className="py-16 md:py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-text mb-12 reveal">
          نتائج حقيقية من عملنا
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal-stagger">
          {/* Before Card */}
          <div className="group relative rounded-2xl overflow-hidden shadow-card card-hover bg-white">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/images/drain_before_new.jpg"
                alt="حوض مطبخ مسدود قبل التسليك"
                className="w-full h-full object-cover img-zoom"
                loading="lazy"
              />
            </div>
            <span className="absolute top-4 right-4 bg-danger text-white rounded-full px-3 py-1 text-sm font-medium z-10">
              قبل
            </span>
            <div className="p-4">
              <p className="text-text-muted text-sm">
                انسداد شديد في مجاري المطبخ
              </p>
            </div>
          </div>

          {/* After Card */}
          <div className="group relative rounded-2xl overflow-hidden shadow-card card-hover bg-white">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/images/drain_after_new.jpg"
                alt="حوض مطبخ نظيف بعد التسليك بالكومبروسور"
                className="w-full h-full object-cover img-zoom"
                loading="lazy"
              />
            </div>
            <span className="absolute top-4 right-4 bg-success text-white rounded-full px-3 py-1 text-sm font-medium z-10">
              بعد
            </span>
            <div className="p-4">
              <p className="text-text-muted text-sm">
                تسليك كامل بالكومبروسور — بدون تكسير
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
