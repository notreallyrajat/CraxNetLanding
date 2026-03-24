import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Premium animation library
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const plans = [
  {
    name: 'Basic',
    price: '₹10 – ₹25',
    period: '/student/mo',
    desc: 'Essential digitization for semi-urban and budget-tier schools.',
    features: [
      'Admissions & Fees Management',
      'Automated Attendance',
      'Digital Gradebooks',
      'Basic SMS Alerts',
      'Email Support',
    ],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Premium',
    price: '₹30 – ₹60',
    period: '/student/mo',
    desc: 'The complete management suite for growing urban institutions.',
    features: [
      'Everything in Basic',
      'LMS & Lesson Planning',
      'Dedicated Parent App',
      'Biometric & RFID Support',
      'Priority Phone Support',
    ],
    cta: 'Start Free Trial',
    highlight: true,
  },
  {
    name: 'Ultimate',
    price: '₹70 – ₹100',
    period: '/student/mo',
    desc: 'Elite AI-driven analytics and safety for international schools.',
    features: [
      'Everything in Premium',
      'AI Personalized Learning',
      'GPS Bus Tracking & CCTV',
      'Inventory & Payroll',
      '24/7 Account Manager',
    ],
    cta: 'Contact Sales',
    highlight: false,
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { type: 'spring', stiffness: 100 } 
  },
};

export default function Pricing() {
  return (
    <div className="bg-background text-on-background antialiased min-h-screen selection:bg-primary/30">
      <Navbar />
      
      {/* Subtle Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute top-[40%] -right-[5%] w-[30%] h-[30%] bg-secondary/5 blur-[100px] rounded-full" />
      </div>

      <section className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header with Motion */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16 sm:mb-20"
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6 tracking-widest uppercase border border-primary/20">
              Pricing Plans
            </div>
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter text-on-surface mb-6">
              Empower Your School <br className="hidden md:block" /> Without Breaking the Bank
            </h1>
            <p className="font-body text-on-surface-variant text-lg max-w-2xl mx-auto leading-relaxed">
              Transparent, student-centric pricing designed for the unique needs of the Indian education landscape.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
          >
            {plans.map((plan) => (
              <motion.div
                key={plan.name}
                variants={cardVariants}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className={`relative rounded-[2.5rem] p-8 sm:p-10 flex flex-col gap-8 border transition-shadow duration-500 ${
                  plan.highlight
                    ? 'bg-primary text-on-primary border-primary shadow-2xl shadow-primary/30 z-10'
                    : 'bg-surface-container-lowest border-outline-variant/30 hover:shadow-2xl hover:border-primary/20'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-on-surface text-surface px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                    Most Popular
                  </div>
                )}

                <div>
                  <p className={`font-headline font-bold text-sm uppercase tracking-[0.2em] mb-4 ${plan.highlight ? 'text-on-primary/70' : 'text-primary'}`}>
                    {plan.name}
                  </p>
                  <div className="flex flex-col mb-4">
                    <span className="font-headline text-4xl sm:text-5xl font-extrabold tracking-tight">
                      {plan.price}
                    </span>
                    <span className={`font-body text-xs mt-2 font-medium ${plan.highlight ? 'text-on-primary/70' : 'text-on-surface-variant'}`}>
                      {plan.period}
                    </span>
                  </div>
                  <p className={`font-body text-sm leading-relaxed min-h-[48px] ${plan.highlight ? 'text-on-primary/80' : 'text-on-surface-variant'}`}>
                    {plan.desc}
                  </p>
                </div>

                <div className={`h-px w-full ${plan.highlight ? 'bg-on-primary/20' : 'bg-outline-variant/30'}`} />

                <ul className="flex flex-col gap-4">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-4 font-body text-sm group">
                      <span className={`material-symbols-outlined text-xl transition-transform group-hover:scale-110 ${plan.highlight ? 'text-on-primary' : 'text-primary'}`}>
                        check_circle
                      </span>
                      <span className="leading-tight">{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/book-demo"
                  className={`mt-auto px-8 py-4 rounded-2xl font-headline font-bold text-center text-sm sm:text-base transition-all duration-300 ${
                    plan.highlight
                      ? 'bg-on-primary text-primary hover:bg-white hover:scale-[1.02] shadow-xl'
                      : 'bg-primary text-on-primary hover:bg-primary-hover hover:scale-[1.02] shadow-md hover:shadow-primary/40'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Trust Element */}
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center mt-12 font-body text-sm text-on-surface-variant"
          >
            No hidden setup fees. Custom migration assistance available for all plans.
          </motion.p>
        </div>
      </section>
      <Footer />
    </div>
  );
}