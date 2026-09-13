const FEATURES = [
  {
    label: "غذای گرم",
    color: "bg-brand-orange/15 text-brand-orange",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2a5 5 0 0 0-5 5c0 3 2 5 5 7 3-2 5-4 5-7a5 5 0 0 0-5-5z" />
        <path d="M12 14v8" />
        <path d="M9 22h6" />
      </svg>
    ),
  },
  {
    label: "توجه به گروه سنی",
    color: "bg-brand-green/15 text-brand-green-deep",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    label: "تغذیه هدفمند",
    color: "bg-brand-lime/20 text-brand-green-forest",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    label: "راحتی والدین",
    color: "bg-brand-yellow/30 text-brand-slate-darker",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

export default function Solution() {
  return (
    <section id="services" className="bg-brand-green-deep py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
          ما این فاصله را پر می‌کنیم.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
          کیدز میلز ترکیبی از غذای گرم، توجه به گروه سنی، تغذیه هدفمند و
          راحتی والدین را در کنار هم ارائه می‌دهد.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className="group rounded-2xl bg-white/10 px-4 py-6 text-center backdrop-blur-sm transition-all hover:bg-white/20 sm:px-6 sm:py-8"
            >
              <span
                className={`mx-auto flex h-12 w-12 items-center justify-center rounded-xl ${f.color} transition-transform group-hover:scale-110`}
              >
                {f.icon}
              </span>
              <p className="mt-3 text-sm font-bold text-white sm:text-base">
                {f.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}