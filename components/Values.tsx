const VALUES = [
  {
    title: "غذای متناسب با سن",
    description: "انتخاب غذا با توجه به گروه سنی کودک و نوجوان",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="8" r="5" />
        <path d="M20 21a8 8 0 1 0-16 0" />
      </svg>
    ),
    color: "bg-brand-green/10 text-brand-green-deep",
  },
  {
    title: "غذای گرم و تازه",
    description: "وعده‌ای که برای مصرف همان روز آماده می‌شود",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2a5 5 0 0 0-5 5c0 3 2 5 5 7 3-2 5-4 5-7a5 5 0 0 0-5-5z" />
        <path d="M12 14v8" />
      </svg>
    ),
    color: "bg-brand-orange/10 text-brand-orange",
  },
  {
    title: "آرامش خیال والدین",
    description: "کمک به والدین برای مدیریت بهتر تغذیه روزانه فرزندشان",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    color: "bg-brand-lime/20 text-brand-green-forest",
  },
  {
    title: "تجربه‌ای که کودک دوست دارد",
    description: "غذای سالم نباید به معنی غذای خسته‌کننده باشد",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    color: "bg-brand-yellow/30 text-brand-slate-darker",
  },
];

export default function Values() {
  return (
    <section id="why" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold text-brand-slate-darker sm:text-3xl">
            کیدز میلز چه ارزشی ایجاد می‌کند؟
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-brand-slate-dark sm:text-lg">
            چهار ارزش اصلی که کیدز میلز برای کودکان و والدین ایجاد می‌کند.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {VALUES.map((v, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-brand-gray-mid bg-white p-6 transition-all hover:border-brand-green/30 hover:shadow-lg sm:p-8"
            >
              <span
                className={`flex h-14 w-14 items-center justify-center rounded-xl ${v.color} transition-transform group-hover:scale-110`}
              >
                {v.icon}
              </span>
              <h3 className="mt-5 text-lg font-bold text-brand-slate-darker sm:text-xl">
                {v.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-brand-slate-dark sm:text-base">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}