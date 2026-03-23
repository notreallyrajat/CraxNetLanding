import { Link } from 'react-router-dom';
import HeroDashboardPreview from '../components/HeroDashboardPreview';

export default function Hero() {
  return (
    <section className="pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 px-4 sm:px-8 relative overflow-hidden bg-surface">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Text */}
        <div className="lg:col-span-6 z-10 text-center lg:text-left">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold mb-5 tracking-wider uppercase">
            New: Enterprise v4.0 is live
          </div>
          <h1 className="font-headline text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tighter text-on-surface leading-[1.1] mb-6 sm:mb-8">
            All-in-One <span className="text-primary">Enterprise</span> Management for Modern Organizations.
          </h1>
          <p className="font-body text-base sm:text-lg text-on-surface-variant leading-relaxed mb-8 sm:mb-10 max-w-xl mx-auto lg:mx-0">
            Streamline your entire operation with a curated architectural approach to business data. Professional growth meets simplified administration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              to="/contact"
              className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-xl font-headline font-bold text-base sm:text-lg hover:bg-surface-dim transition-all text-center"
            >
              Contact Us
            </Link>
            <Link
              to="/book-demo"
              className="primary-gradient text-on-primary px-8 py-4 rounded-xl font-headline font-bold text-base sm:text-lg hover:shadow-lg hover:shadow-primary/20 transition-all text-center"
            >
              Get Started Free
            </Link>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="lg:col-span-6 relative mt-8 lg:mt-0">
          <HeroDashboardPreview />
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-secondary-container/30 rounded-full blur-3xl pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
