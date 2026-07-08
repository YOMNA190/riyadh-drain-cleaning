import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'كم سعر خدمة تسليك مجاري بالكومبروسور؟',
      answer:
        'السعر يعتمد على نوع وشدة الانسداد. نقدم تقييم مجاني عبر الهاتف ونحدد السعر قبل المباشرة بالعمل — لا يوجد أي رسوم خفية.',
    },
    {
      question: 'هل الكومبروسور يضر المواسير؟',
      answer:
        'لا، الكومبروسور يستخدم هواء مضغوط بضغط مناسب وآمن على جميع أنواع المواسير. هو الطريقة الأكثر أماناً مقارنة بالمواد الكيماوية أو التكسير.',
    },
    {
      question: 'هل تحتاجون تكسير في الحمام أو المطبخ؟',
      answer:
        'لا نحتاج أي تكسير على الإطلاق. الكومبروسور يقوم بتسليك المجاري من خلال الفتحات الموجودة بدون أي أضرار بالجدران أو الأرضيات.',
    },
    {
      question: 'هل تعملون 24 ساعة حتى في العطلات؟',
      answer:
        'نعم، نعمل 24 ساعة طوال أيام الأسبوع بما في ذلك العطلات الرسمية. فريقنا جاهز للاستجابة في أي وقت.',
    },
    {
      question: 'هل تغطون شمال الرياض وجنوبها؟',
      answer:
        'نعم، نغطي جميع أحياء الرياض من الشمال إلى الجنوب ومن الشرق إلى الغرب بما في ذلك الضواحي.',
    },
    {
      question: 'كيف أحجز الخدمة وكم وقت الانتظار؟',
      answer:
        'يمكنك الحجز بالاتصال بنا أو عبر واتساب. متوسط وقت الوصول 30 دقيقة حسب منطقتك في الرياض.',
    },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-text mb-12 reveal">
          الأسئلة الشائعة
        </h2>

        {/* ملاحظة: FAQPage schema بقى ثابت في index.html عشان يظهر لأي زاحف
            حتى لو مش بينفذ JavaScript (زي محركات البحث بالذكاء الاصطناعي).
            لو غيّرتي الأسئلة هنا، لازم تحدّثي index.html بنفس التغيير. */}

        <div className="reveal-stagger">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-border last:border-0"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between py-5 text-right group"
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-text group-hover:text-primary transition-colors">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-text-muted flex-shrink-0 mr-3 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  openIndex === index ? 'max-h-48 pb-5' : 'max-h-0'
                }`}
              >
                <p className="text-text-muted leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
