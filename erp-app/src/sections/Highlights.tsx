const items = [
  {
    icon: 'notifications_active',
    title: 'Real-time Notifications',
    desc: 'Instant updates across all devices for critical business events and approvals.',
  },
  {
    icon: 'query_stats',
    title: 'Accurate Reporting',
    desc: 'Generate detailed compliance-ready reports with a single click.',
  },
  {
    icon: 'receipt_long',
    title: 'Simplified Billing',
    desc: 'Unified invoicing system for vendors, clients, and partners.',
  },
];

export default function Highlights() {
  return (
    <section className="py-14 sm:py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
        {items.map((item) => (
          <div key={item.title} className="flex items-start gap-4 sm:gap-6">
            <div className="w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0 bg-surface-container rounded-xl flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">{item.icon}</span>
            </div>
            <div>
              <h4 className="font-headline font-bold text-base sm:text-lg mb-2">{item.title}</h4>
              <p className="text-on-surface-variant text-sm font-body">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
