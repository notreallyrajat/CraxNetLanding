import { useState, type FormEvent } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const contactInfo = [
  { icon: 'location_on', label: 'Address', value: 'Kudi Bhagtasni Basni First phase Jodhpur' },
  { icon: 'mail', label: 'Email', value: 'chhanganirajat72@gmail.com' },
  { icon: 'phone', label: 'Phone', value: '+91 9351182957' },
  { icon: 'schedule', label: 'Hours', value: 'Mon–Fri, 9am–8pm IST' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare data for Web3Forms
    const formData = {
      ...form,
      access_key: "aade6238-57a3-4fa6-8700-5731aed21500",    // 👈 ADD YOUR KEY HERE
      from_name: "Editorial ERP Contact Form",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        alert("Message sent! We'll get back to you within 24 hours.");
        setForm({ name: '', email: '', subject: '', message: '' }); // Reset form
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-background text-on-background antialiased min-h-screen">
      <Navbar />

      <section className="pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-10 sm:mb-14">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold mb-5 tracking-wider uppercase">
              Contact
            </div>
            <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tighter text-on-surface mb-4">
              Get in Touch
            </h1>
            <p className="font-body text-on-surface-variant text-base sm:text-lg max-w-xl">
              Have a question or want to learn more? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="bg-surface-container-lowest rounded-[2rem] p-6 sm:p-10 shadow-sm flex flex-col gap-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="c-name" className="font-headline font-semibold text-sm text-on-surface">Name</label>
                  <input
                    id="c-name" name="name" type="text" required placeholder="Jane Smith"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="bg-surface-container border border-outline-variant rounded-xl px-4 py-3 font-body text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="c-email" className="font-headline font-semibold text-sm text-on-surface">Email</label>
                  <input
                    id="c-email" name="email" type="email" required placeholder="jane@company.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="bg-surface-container border border-outline-variant rounded-xl px-4 py-3 font-body text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="c-subject" className="font-headline font-semibold text-sm text-on-surface">Subject</label>
                <input
                  id="c-subject" name="subject" type="text" required placeholder="How can we help?"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="bg-surface-container border border-outline-variant rounded-xl px-4 py-3 font-body text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="c-message" className="font-headline font-semibold text-sm text-on-surface">Message</label>
                <textarea
                  id="c-message" name="message" rows={5} required placeholder="Tell us more..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="bg-surface-container border border-outline-variant rounded-xl px-4 py-3 font-body text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none text-sm"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`primary-gradient text-on-primary px-8 py-4 rounded-xl font-headline font-bold text-base transition-all ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02]'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            {/* Contact info */}
            <div className="flex flex-col gap-5 sm:gap-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="bg-surface-container-lowest rounded-[1.5rem] p-5 sm:p-6 flex items-start gap-4 hover:shadow-md transition-all">
                  <div className="w-11 h-11 flex-shrink-0 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <div>
                    <p className="font-headline font-bold text-sm mb-1">{item.label}</p>
                    <p className="font-body text-on-surface-variant text-sm">{item.value}</p>
                  </div>
                </div>
              ))}

              {/* Map placeholder */}
              <div className="bg-surface-container-low rounded-[1.5rem] p-6 flex items-center justify-center h-40 sm:h-48 border border-outline-variant/10">
                <div className="text-center text-on-surface-variant">
                  <span className="material-symbols-outlined text-4xl text-primary/30 block mb-2">map</span>
                  <p className="font-body text-xs">Map integration available on request</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}