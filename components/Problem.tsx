const PROBLEMS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    text: "والدین زمان کافی برای آماده‌سازی غذای روزانه ندارند.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    text: "انتخاب غذای مناسب برای کودک همیشه ساده نیست.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
    text: "کودکان همیشه غذای سالم را با علاقه نمی‌خورند.",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold text-brand-slate-darker sm:text-3xl">
          وقتی وقت کم است، تغذیه نباید قربانی شود.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-brand-slate-dark sm:text-lg">
          هر روز والدین با چالش‌هایی در تأمین غذای مناسب فرزندشان روبرو هستند.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {PROBLEMS.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl bg-brand-gray-soft px-6 py-8 text-center transition-shadow hover:shadow-md"
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange/15 text-brand-orange">
                {p.icon}
              </span>
              <p className="mt-4 text-sm leading-7 text-brand-slate-dark sm:text-base">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}