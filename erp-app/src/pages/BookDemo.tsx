import { useState, type FormEvent } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function BookDemo() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Demo request submitted! We'll be in touch shortly.");
  };

  return (
    <div className="bg-background text-on-background antialiased min-h-screen">
      <Navbar />
      <section className="pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 px-4 sm:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold mb-5 tracking-wider uppercase">
            Book a Demo
          </div>
          <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tighter text-on-surface mb-4">
            See Editorial ERP in Action
          </h1>
          <p className="font-body text-on-surface-variant mb-10 sm:mb-12 text-base sm:text-lg">
            Fill out the form and our team will reach out to schedule a personalized walkthrough.
          </p>

          <form
            onSubmit={handleSubmit}
            className="bg-surface-container-lowest rounded-[2rem] p-6 sm:p-10 shadow-sm flex flex-col gap-5 sm:gap-6"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-headline font-semibold text-sm text-on-surface">Full Name</label>
              <input
                id="name" type="text" required placeholder="Jane Smith"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="bg-surface-container border border-outline-variant rounded-xl px-4 py-3 font-body text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm sm:text-base"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-headline font-semibold text-sm text-on-surface">Work Email</label>
              <input
                id="email" type="email" required placeholder="jane@company.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="bg-surface-container border border-outline-variant rounded-xl px-4 py-3 font-body text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm sm:text-base"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="company" className="font-headline font-semibold text-sm text-on-surface">Company</label>
              <input
                id="company" type="text" required placeholder="Acme Corp"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="bg-surface-container border border-outline-variant rounded-xl px-4 py-3 font-body text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm sm:text-base"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-headline font-semibold text-sm text-on-surface">Message</label>
              <textarea
                id="message" rows={4} placeholder="Tell us about your needs..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="bg-surface-container border border-outline-variant rounded-xl px-4 py-3 font-body text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none text-sm sm:text-base"
              />
            </div>
            <button
              type="submit"
              className="primary-gradient text-on-primary px-8 py-4 rounded-xl font-headline font-bold text-base sm:text-lg hover:shadow-lg hover:shadow-primary/20 transition-all mt-2"
            >
              Book My Demo
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}
