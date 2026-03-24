import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const stats = [
  { value: '10+', label: 'Organizations' },
  { value: '2+', label: 'Years Experience' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '24/7', label: 'Support' },
];

const team = [
  { name: 'Alex Rivera', role: 'CEO & Co-founder' },
  { name: 'Priya Nair', role: 'CTO & Co-founder' },
  { name: 'Marcus Webb', role: 'Head of Product' },
  { name: 'Yash Kumar', role: 'Head of Design' },
];

export default function About() {
  return (
    <div className="bg-background text-on-background antialiased min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 px-4 sm:px-8 bg-surface">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold mb-5 tracking-wider uppercase">
            About Us
          </div>
          <h1 className="font-headline text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tighter text-on-surface mb-6">
            Built for the Modern Enterprise
          </h1>
          <p className="font-body text-base sm:text-xl text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
            Editorial ERP was founded with a single mission: make enterprise management accessible, elegant, and genuinely useful for every organization — regardless of size or industry.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 bg-surface-container-low">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-headline text-3xl sm:text-4xl font-extrabold text-primary mb-1">{s.value}</p>
              <p className="font-body text-sm text-on-surface-variant">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 bg-surface">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          <div>
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-on-surface mb-5">Our Story</h2>
            <p className="font-body text-on-surface-variant leading-relaxed mb-4 text-sm sm:text-base">
              Founded in 2026, CraxNet ERP started as a small team of engineers frustrated by bloated, expensive enterprise software. We believed there was a better way — one that combined architectural precision with an editorial eye for clarity.
            </p>
            <p className="font-body text-on-surface-variant leading-relaxed text-sm sm:text-base">
              Today, we serve 10+ organizations across education, logistics, finance, and healthcare — helping them run leaner, smarter operations every day.
            </p>
          </div>
          <div className="bg-surface-container-low rounded-[2rem] p-8 sm:p-10 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-2xl">lightbulb</span>
            </div>
            <h3 className="font-headline text-xl font-bold">Our Mission</h3>
            <p className="font-body text-on-surface-variant text-sm sm:text-base leading-relaxed">
              To empower every organization with enterprise-grade tools that are intuitive, connected, and built to scale — without the complexity that usually comes with it.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 bg-surface-container-low">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-on-surface mb-10 sm:mb-12 text-center">Meet the Team</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-surface-container-lowest rounded-[1.5rem] p-6 sm:p-8 text-center hover:shadow-lg transition-all">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                  <span className="material-symbols-outlined text-2xl sm:text-3xl">person</span>
                </div>
                <p className="font-headline font-bold text-sm sm:text-base">{member.name}</p>
                <p className="font-body text-xs sm:text-sm text-on-surface-variant mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 bg-surface text-center">
        <h2 className="font-headline text-2xl sm:text-3xl font-bold text-on-surface mb-4">Ready to get started?</h2>
        <p className="font-body text-on-surface-variant mb-8 text-sm sm:text-base">See how Editorial ERP can transform your organization.</p>
        <Link
          to="/book-demo"
          className="primary-gradient text-on-primary px-8 py-4 rounded-xl font-headline font-bold text-base sm:text-lg hover:shadow-lg hover:shadow-primary/20 transition-all inline-block"
        >
          Book a Demo
        </Link>
      </section>

      <Footer />
    </div>
  );
}
