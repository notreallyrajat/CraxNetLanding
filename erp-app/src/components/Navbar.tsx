import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl tonal-transition border-b border-outline-variant/10">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-8 h-16 sm:h-20">
        {/* Logo */}
        <Link to="/" className="text-xl sm:text-2xl font-bold tracking-tighter text-teal-800 font-headline">
          Editorial ERP
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-8 font-headline text-sm font-semibold tracking-tight">
          <a className="text-slate-600 hover:text-teal-500 transition-colors duration-300" href="#features">Features</a>
          <Link className="text-slate-600 hover:text-teal-500 transition-colors duration-300" to="/pricing">Pricing</Link>
          <Link className="text-slate-600 hover:text-teal-500 transition-colors duration-300" to="/about">About</Link>
          <Link className="text-slate-600 hover:text-teal-500 transition-colors duration-300" to="/contact">Contact</Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="font-headline text-sm font-semibold text-slate-600 hover:text-teal-600 transition-all">
            Sign In
          </button>
          <Link
            to="/book-demo"
            className="primary-gradient text-on-primary px-5 py-2.5 rounded-xl font-headline text-sm font-bold hover:scale-105 transition-transform duration-200"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-slate-700 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-slate-700 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-slate-700 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-surface border-t border-outline-variant/10 px-4 py-6 flex flex-col gap-4">
          <a
            className="font-headline font-semibold text-slate-700 hover:text-teal-500 py-2"
            href="#features"
            onClick={() => setMenuOpen(false)}
          >
            Features
          </a>
          <Link className="font-headline font-semibold text-slate-700 hover:text-teal-500 py-2" to="/pricing" onClick={() => setMenuOpen(false)}>Pricing</Link>
          <Link className="font-headline font-semibold text-slate-700 hover:text-teal-500 py-2" to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link className="font-headline font-semibold text-slate-700 hover:text-teal-500 py-2" to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <hr className="border-outline-variant/20" />
          <button className="font-headline font-semibold text-slate-600 text-left py-2">Sign In</button>
          <Link
            to="/book-demo"
            className="primary-gradient text-on-primary px-6 py-3 rounded-xl font-headline font-bold text-center"
            onClick={() => setMenuOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
