import { useState } from 'react';

const ITEMS = [
  {
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    name: 'David Miller',
    role: 'Principal',
    quote: 'Our school operations have become so much more efficient since adopting this ERP software.',
  },
  {
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
    name: 'Sarah Thompson',
    role: 'Vice Principal',
    quote: 'Managing attendance, fees, and communication is now a breeze. Fantastic tool.',
  },
  {
    img: 'https://randomuser.me/api/portraits/men/50.jpg',
    name: 'Michael Chen',
    role: 'Administrator',
    quote: 'This ERP system has revolutionized how we manage our school.',
  },
  {
    img: 'https://randomuser.me/api/portraits/women/65.jpg',
    name: 'Priya Singh',
    role: 'Headmistress',
    quote: "I can't imagine managing our institution without this software.",
  },
];

const STATS = [
  { icon: 'domain', title: '500+ Organizations', desc: 'Transformed by our ERP' },
  { icon: 'thumb_up', title: '95% Satisfaction', desc: 'Positive feedback from users' },
  { icon: 'support_agent', title: '24/7 Support', desc: 'Always here when you need us' },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const goPrev = () => setIndex((i) => (i <= 0 ? ITEMS.length - 1 : i - 1));
  const goNext = () => setIndex((i) => (i >= ITEMS.length - 1 ? 0 : i + 1));
  const t = ITEMS[index];

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-surface-container-low px-4 sm:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <p className="font-label text-xs uppercase tracking-widest text-outline mb-3">Testimonials</p>
          <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-on-surface mb-3">
            Trusted by Hundreds of Modern Organizations
          </h2>
          <p className="font-body text-on-surface-variant text-sm sm:text-base max-w-xl mx-auto">
            Hear from administrators who have transformed day-to-day operations with our platform.
          </p>
        </div>

        {/* Carousel — arrows outside card on sm+, inside on xs */}
        <div className="relative max-w-2xl mx-auto mb-6 sm:mb-8 px-8 sm:px-12">
          <div className="bg-surface-container-lowest p-6 sm:p-10 lg:p-12 rounded-[2rem] shadow-sm relative overflow-hidden">
            <span className="material-symbols-outlined text-5xl sm:text-6xl text-primary/10 absolute top-4 sm:top-6 right-4 sm:right-6">
              format_quote
            </span>
            {/* Stars */}
            <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4 text-yellow-400 text-base sm:text-lg">
              {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
            </div>
            <blockquote className="font-body text-sm sm:text-lg lg:text-xl text-on-surface italic mb-6 sm:mb-8 relative z-10">
              "{t.quote}"
            </blockquote>
            <div className="flex items-center gap-3 sm:gap-4">
              <img
                className="w-10 h-10 sm:w-14 sm:h-14 rounded-full object-cover flex-shrink-0"
                alt={t.name}
                src={t.img}
              />
              <div>
                <p className="font-headline font-bold text-sm sm:text-base">{t.name}</p>
                <p className="font-label text-xs sm:text-sm text-on-surface-variant">{t.role}</p>
              </div>
            </div>
          </div>

          {/* Arrows — positioned outside the card using px padding on parent */}
          <button
            onClick={goPrev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-surface-container-lowest shadow-md flex items-center justify-center hover:bg-surface-container transition-all border border-outline-variant/20"
          >
            <span className="material-symbols-outlined text-on-surface text-base sm:text-lg">chevron_left</span>
          </button>
          <button
            onClick={goNext}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-surface-container-lowest shadow-md flex items-center justify-center hover:bg-surface-container transition-all border border-outline-variant/20"
          >
            <span className="material-symbols-outlined text-on-surface text-base sm:text-lg">chevron_right</span>
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mb-10 sm:mb-16">
          {ITEMS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${i === index ? 'w-6 h-2 bg-primary' : 'w-2 h-2 bg-outline-variant'}`}
            />
          ))}
        </div>

        {/* Trust stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {STATS.map((s) => (
            <div
              key={s.title}
              className="bg-surface-container-lowest rounded-[1.5rem] p-5 sm:p-6 lg:p-8 flex items-start gap-4 hover:shadow-lg transition-all border border-transparent hover:border-outline-variant/20"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-lg sm:text-xl">{s.icon}</span>
              </div>
              <div>
                <p className="font-headline font-bold text-sm sm:text-base">{s.title}</p>
                <p className="font-body text-xs sm:text-sm text-on-surface-variant mt-1">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
