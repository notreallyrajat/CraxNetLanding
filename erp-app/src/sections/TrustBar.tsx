// Trust bar — feature from reference site
const items = [
  { icon: 'shield', label: 'Safe & Secure' },
  { icon: 'support_agent', label: '24/7 Support' },
  { icon: 'verified', label: 'Trusted by 500+ Organizations' },
];

export default function TrustBar() {
  return (
    <div className="bg-primary/5 border-y border-primary/10 py-4 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-12">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-2 text-on-surface-variant">
            <span className="material-symbols-outlined text-primary text-lg">{item.icon}</span>
            <span className="font-label text-xs sm:text-sm font-semibold">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
