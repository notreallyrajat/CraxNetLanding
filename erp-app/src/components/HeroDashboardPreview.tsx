const bars = [42, 68, 55, 88, 62, 74];

export default function HeroDashboardPreview() {
  return (
    <div className="w-full rounded-[1.5rem] overflow-hidden shadow-2xl border border-outline-variant/20 bg-surface-container-lowest">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 bg-surface-container border-b border-outline-variant/10">
        <div className="flex gap-1 sm:gap-1.5 flex-shrink-0">
          <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-400" />
          <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-400" />
          <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 flex items-center gap-1 sm:gap-2 bg-surface rounded-lg px-2 sm:px-3 py-1 min-w-0">
          <span className="material-symbols-outlined text-outline text-xs sm:text-sm flex-shrink-0">lock</span>
          <span className="font-body text-[10px] sm:text-xs text-outline truncate">schoolerp.app/dashboard</span>
        </div>
        <div className="flex items-center gap-1 sm:gap-1.5 bg-green-500/10 text-green-600 px-1.5 sm:px-2 py-0.5 rounded-full flex-shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="font-label text-[10px] sm:text-xs font-bold">LIVE</span>
        </div>
      </div>

      {/* Dashboard UI */}
      <div className="flex h-44 sm:h-56 lg:h-64">
        {/* Sidebar */}
        <div className="w-8 sm:w-10 lg:w-12 bg-primary flex flex-col items-center py-3 sm:py-4 gap-3 sm:gap-4 flex-shrink-0">
          <span className="w-5 h-5 sm:w-7 sm:h-7 rounded-lg bg-on-primary/20 flex items-center justify-center font-headline font-bold text-on-primary text-[10px] sm:text-xs">E</span>
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-on-primary" />
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-on-primary/30" />
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-on-primary/30" />
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-on-primary/30" />
        </div>

        {/* Main content */}
        <div className="flex-1 p-2 sm:p-3 lg:p-4 flex flex-col gap-2 sm:gap-3 overflow-hidden min-w-0">
          {/* Topbar */}
          <div>
            <p className="font-headline font-bold text-xs sm:text-sm text-on-surface">School ERP</p>
            <p className="font-body text-[10px] sm:text-xs text-on-surface-variant">Admin overview</p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
            {[
              { label: 'STUDENTS', value: '1,248+', trend: '+4.2%', up: true },
              { label: 'ATTENDANCE', value: '96%', trend: 'Today', up: false },
              { label: 'FEES', value: '₹8.4L', trend: 'Collected', up: true },
            ].map((s) => (
              <div key={s.label} className="bg-surface-container rounded-lg sm:rounded-xl p-1.5 sm:p-2 lg:p-3">
                <p className="font-label text-[8px] sm:text-[9px] lg:text-xs text-on-surface-variant uppercase tracking-wide leading-tight">{s.label}</p>
                <p className="font-headline font-bold text-xs sm:text-sm lg:text-base text-on-surface">{s.value}</p>
                <p className={`font-label text-[8px] sm:text-[9px] lg:text-xs font-semibold ${s.up ? 'text-green-600' : 'text-on-surface-variant'}`}>{s.trend}</p>
              </div>
            ))}
          </div>

          {/* Engagement bar chart */}
          <div className="bg-surface-container rounded-lg sm:rounded-xl p-2 sm:p-3 flex-1 flex flex-col">
            <div className="flex items-center justify-between mb-1.5 sm:mb-2">
              <span className="font-label text-[10px] sm:text-xs text-on-surface font-semibold">Engagement</span>
              <span className="font-label text-[9px] sm:text-[10px] bg-primary/10 text-primary px-1.5 sm:px-2 py-0.5 rounded-full">This term</span>
            </div>
            <div className="flex items-end gap-1 sm:gap-1.5 flex-1">
              {bars.map((h, i) => (
                <div key={i} className="flex-1 flex items-end" style={{ height: '100%' }}>
                  <div
                    className="w-full bg-primary rounded-sm"
                    style={{ height: `${h}%` }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
