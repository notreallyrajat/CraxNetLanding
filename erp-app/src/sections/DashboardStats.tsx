// Live dashboard stats widget — feature from reference site
const stats = [
  { icon: 'groups', label: 'Students', value: '1,248+', change: '+4.2%', color: 'bg-primary/10 text-primary' },
  { icon: 'how_to_reg', label: 'Attendance', value: '96%', change: 'Today', color: 'bg-secondary-container text-on-secondary-container' },
  { icon: 'payments', label: 'Fees Collected', value: '₹8.4L', change: 'This term', color: 'bg-tertiary-fixed text-on-tertiary-fixed' },
  { icon: 'trending_up', label: 'Engagement', value: '94%', change: 'This term', color: 'bg-surface-container-highest text-on-surface' },
];

export default function DashboardStats() {
  return (
    <section className="py-10 sm:py-14 px-4 sm:px-8 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        {/* Live badge */}
        <div className="flex items-center gap-2 mb-6 sm:mb-8">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse inline-block" />
          <span className="font-label text-xs uppercase tracking-widest text-outline">Live Dashboard Overview</span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-surface-container-lowest rounded-[1.5rem] p-5 sm:p-7 flex flex-col gap-3 hover:shadow-lg transition-all border border-transparent hover:border-outline-variant/20"
            >
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center ${s.color}`}>
                <span className="material-symbols-outlined text-xl sm:text-2xl">{s.icon}</span>
              </div>
              <div>
                <p className="font-headline text-2xl sm:text-3xl font-extrabold text-on-surface">{s.value}</p>
                <p className="font-body text-xs text-on-surface-variant mt-0.5">{s.label}</p>
              </div>
              <span className="text-xs font-label text-primary font-semibold">{s.change}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
