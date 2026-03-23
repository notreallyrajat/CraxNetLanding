const appFeatures = [
  { icon: 'notifications_active', title: 'Instant Notifications', desc: 'Receive alerts for attendance, fees, and events.' },
  { icon: 'how_to_reg', title: 'Attendance Tracking', desc: 'Mark attendance and view reports with ease.' },
  { icon: 'payments', title: 'Easy Fee Collection', desc: 'Manage fees and send reminders instantly.' },
];

export default function MobileApp() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-8 bg-surface-container-lowest relative overflow-hidden">
      <div className="max-w-7xl mx-auto bg-primary rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 lg:p-24 flex flex-col lg:flex-row items-center gap-10 sm:gap-16 overflow-hidden">
        {/* Text */}
        <div className="flex-1 text-on-primary text-center lg:text-left">
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 tracking-tight">
            Manage Your Business On-the-Go
          </h2>
          <p className="text-on-primary/80 font-body text-base sm:text-xl mb-8 leading-relaxed">
            Access critical insights and manage day-to-day operations from anywhere. Our mobile app puts the power of Editorial ERP in your pocket.
          </p>

          {/* App feature highlights */}
          <div className="flex flex-col gap-4 mb-8 sm:mb-10 text-left">
            {appFeatures.map((f) => (
              <div key={f.title} className="flex items-start gap-3">
                <div className="w-9 h-9 flex-shrink-0 rounded-xl bg-on-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-primary text-lg">{f.icon}</span>
                </div>
                <div>
                  <p className="font-headline font-bold text-sm text-on-primary">{f.title}</p>
                  <p className="font-body text-xs text-on-primary/70">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
            <a
              className="bg-on-primary text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-xl flex items-center justify-center gap-3 font-headline font-bold hover:bg-primary-fixed transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined">ios</span>
              App Store
            </a>
            <a
              className="bg-on-primary text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-xl flex items-center justify-center gap-3 font-headline font-bold hover:bg-primary-fixed transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined">android</span>
              Google Play
            </a>
          </div>
        </div>

        {/* Phone image */}
        <div className="flex-1 relative w-full flex justify-center">
          <div className="relative z-10 max-w-[200px] sm:max-w-[260px] lg:max-w-none lg:translate-y-40">
            <img
              className="rounded-[2rem] sm:rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.3)] sm:shadow-[0_50px_100px_rgba(0,0,0,0.3)] w-full"
              alt="Smartphone displaying the Editorial ERP mobile app interface"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZDloo67P6MyNpAG1YXNFNEXEV4GucGWeteUAOGc3vR4wynqJR-ZOzWC09ewQpI78ElSFg9M-Do-cQP37m-nzC0lVaWusJVi9fxG5hGy5wOiXJglj_YpvJaEHnySmL8I3C8DKZ_rhRMIM2hjpRMt_pbinvdRQGo_58vNSsaNGEdpVzmg6RLqJQslhG4EaL5vY_3sQe6MLcdkhyLdeyHUla_XTyaIpLeoAQdkbf07D_2VruuJu7sPHhA7HEvzWfPVarXlsetli5IX8q"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-primary-container/20 rounded-full blur-[100px] pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
