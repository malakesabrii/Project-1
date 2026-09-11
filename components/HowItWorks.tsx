const STEPS = [
  {
    number: "۱",
    title: "نیاز فرزندتان را می‌شناسیم",
    description: "با توجه به سن و نیازهای تغذیه‌ای کودک شما",
    color: "bg-brand-green text-white",
  },
  {
    number: "۲",
    title: "غذای مناسب را انتخاب می‌کنیم",
    description: "وعده‌های گرم و خوشمزه متناسب با گروه سنی",
    color: "bg-brand-orange text-white",
  },
  {
    number: "۳",
    title: "غذای گرم به دست شما می‌رسد",
    description: "تازه، گرم و آماده برای لذت بردن فرزندتان",
    color: "bg-brand-lime text-brand-slate-darker",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-brand-gray-soft py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold text-brand-slate-darker sm:text-3xl">
            چگونه کار می‌کند؟
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-brand-slate-dark sm:text-lg">
            فرآیند ساده KidsMeals در سه مرحله
          </p>
        </div>

        <div className="relative mt-12">
          {/* Connection lines (desktop only) */}
          <div
            className="absolute top-8 right-[16.666%] hidden h-1 w-[66.666%] bg-gradient-to-l from-brand-lime via-brand-orange to-brand-green lg:block"
            aria-hidden="true"
          />

          <div className="grid gap-8 lg:grid-cols-3 lg:gap-6">
            {STEPS.map((step, i) => (
              <div
                key={i}
                className="relative rounded-2xl bg-white p-6 text-center shadow-sm transition-all hover:shadow-md sm:p-8"
              >
                <span
                  className={`relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full text-2xl font-extrabold ${step.color} shadow-lg`}
                >
                  {step.number}
                </span>
                <h3 className="mt-5 text-lg font-bold text-brand-slate-darker sm:text-xl">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-brand-slate-dark sm:text-base">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}