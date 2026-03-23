import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const plans = [
  {
    name: 'Basic',
    price: '$49',
    period: '/mo',
    desc: 'Perfect for small teams getting started with ERP.',
    features: ['Up to 10 users', 'Finance module', 'HR module', 'Email support', '5 GB storage'],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$149',
    period: '/mo',
    desc: 'For growing organizations that need more power.',
    features: ['Up to 100 users', 'All Basic features', 'Inventory & Logistics', 'Attendance tracking', 'Priority support', '50 GB storage'],
    cta: 'Start Free Trial',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'Tailored solutions for large-scale operations.',
    features: ['Unlimited users', 'All Pro features', 'Custom integrations', 'Dedicated account manager', 'SLA guarantee', 'Unlimited storage'],
    cta: 'Contact Sales',
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <div className="bg-background text-on-background antialiased min-h-screen">
      <Navbar />
      <section className="pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold mb-5 tracking-wider uppercase">
              Pricing
            </div>
            <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tighter text-on-surface mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="font-body text-on-surface-variant text-base sm:text-lg max-w-xl mx-auto">
              Choose the plan that fits your organization. Upgrade or downgrade anytime.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-[2rem] p-7 sm:p-10 flex flex-col gap-6 border transition-all ${
                  plan.highlight
                    ? 'bg-primary text-on-primary border-primary shadow-2xl shadow-primary/20 scale-100 sm:scale-105'
                    : 'bg-surface-container-lowest border-outline-variant/20 hover:shadow-xl'
                }`}
              >
                <div>
                  <p className={`font-headline font-bold text-sm uppercase tracking-widest mb-2 ${plan.highlight ? 'text-on-primary/70' : 'text-on-surface-variant'}`}>
                    {plan.name}
                  </p>
                  <div className="flex items-end gap-1 mb-3">
                    <span className="font-headline text-4xl sm:text-5xl font-extrabold">{plan.price}</span>
                    {plan.period && <span className={`font-body text-sm mb-2 ${plan.highlight ? 'text-on-primary/70' : 'text-on-surface-variant'}`}>{plan.period}</span>}
                  </div>
                  <p className={`font-body text-sm ${plan.highlight ? 'text-on-primary/80' : 'text-on-surface-variant'}`}>{plan.desc}</p>
                </div>

                <ul className="flex flex-col gap-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 font-body text-sm">
                      <span className={`material-symbols-outlined text-base ${plan.highlight ? 'text-on-primary' : 'text-primary'}`}>check_circle</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/book-demo"
                  className={`mt-auto px-6 py-3 rounded-xl font-headline font-bold text-center text-sm sm:text-base transition-all ${
                    plan.highlight
                      ? 'bg-on-primary text-primary hover:bg-primary-fixed'
                      : 'primary-gradient text-on-primary hover:shadow-lg hover:shadow-primary/20'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
