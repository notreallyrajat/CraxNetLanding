const cards = [
  {
    icon: 'account_balance_wallet',
    title: 'Fee Management',
    desc: 'Automate fee collection, receipts, and finance reports with full audit trails.',
    color: 'bg-primary/10 text-primary',
    span: 'sm:col-span-2',
    large: true,
  },
  {
    icon: 'groups',
    title: 'Student Information',
    desc: 'Centralized student profiles, admissions, and document management.',
    color: 'bg-secondary-container text-on-secondary-container',
    span: '',
  },
  {
    icon: 'local_shipping',
    title: 'Transport Management',
    desc: 'GPS tracking, route planning, and bus management for real-time visibility.',
    color: 'bg-tertiary-fixed text-on-tertiary-fixed',
    span: '',
  },
  {
    icon: 'person_search',
    title: 'Staff Management',
    desc: 'Manage staff profiles, payroll, and attendance in one unified view.',
    color: 'bg-surface-container-highest text-on-surface',
    span: '',
  },
  {
    icon: 'history_toggle_off',
    title: 'Attendance Tracking',
    desc: 'Track student and staff attendance accurately with biometric integration.',
    color: 'bg-primary-container/20 text-primary',
    span: '',
  },
  {
    icon: 'campaign',
    title: 'Parent Communication',
    desc: 'Send alerts, announcements, and homework updates directly to parents.',
    color: 'bg-secondary-fixed text-secondary',
    span: '',
  },
  {
    icon: 'menu_book',
    title: 'Library Management',
    desc: 'Catalog, issue, and manage school library books with ease.',
    color: 'bg-primary/10 text-primary',
    span: '',
  },
  {
    icon: 'calendar_month',
    title: 'Timetable Planning',
    desc: 'Generate and manage class schedules efficiently with smart conflict resolution.',
    color: 'bg-secondary-container text-on-secondary-container',
    span: 'sm:col-span-2',
    wide: true,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-32 px-4 sm:px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-20">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold tracking-tight text-on-surface mb-4">
            Comprehensive Features to Streamline Management
          </h2>
          <p className="font-body text-on-surface-variant max-w-2xl text-sm sm:text-base">
            Explore the all-in-one features designed to digitize your operations — every department, every workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`${card.span ?? ''} bg-surface-container-low p-7 sm:p-10 rounded-[2rem] hover:bg-surface-container-lowest transition-all group border border-transparent hover:border-outline-variant/20 hover:shadow-2xl hover:shadow-on-surface/5 ${card.wide ? 'flex flex-col lg:flex-row items-start lg:items-center gap-8' : ''}`}
            >
              <div className={card.wide ? 'flex-1' : ''}>
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 transition-transform ${card.color}`}>
                  <span className="material-symbols-outlined text-2xl sm:text-3xl">{card.icon}</span>
                </div>
                <h3 className="font-headline text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{card.title}</h3>
                <p className={`font-body text-on-surface-variant text-sm sm:text-base ${card.large ? 'sm:text-lg' : ''}`}>{card.desc}</p>
                {card.large && (
                  <div className="flex gap-4 mt-6 sm:mt-8 opacity-40 group-hover:opacity-100 transition-opacity">
                    <div className="h-1 w-24 bg-primary rounded-full" />
                    <div className="h-1 w-12 bg-primary/30 rounded-full" />
                  </div>
                )}
              </div>
              {card.wide && (
                <div className="flex-1 w-full bg-surface p-5 sm:p-6 rounded-2xl shadow-inner border border-outline-variant/10">
                  <div className="flex flex-col gap-3">
                    <div className="h-3 sm:h-4 bg-surface-container rounded-full w-3/4" />
                    <div className="h-3 sm:h-4 bg-surface-container rounded-full w-1/2" />
                    <div className="h-3 sm:h-4 bg-primary/20 rounded-full w-5/6" />
                    <div className="h-3 sm:h-4 bg-surface-container rounded-full w-2/3" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
