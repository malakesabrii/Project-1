const AGE_GROUPS = [
  {
    range: "۷–۹ سال",
    title: "دوران کودکی",
    description: "وعده‌های مناسب برای کودکان در سنین مدرسه با توجه به رشد و فعالیت روزانه",
    gradient: "from-brand-lime/20 to-brand-green/20",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 0 0 8 11a4 4 0 1 1 8 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0 0 15.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 1 0 8 19.5" />
      </svg>
    ),
  },
  {
    range: "۱۰–۱۳ سال",
    title: "نوجوانی اولیه",
    description: "غذاهای متعادل برای دوران رشد سریع و تغییرات جسمی نوجوانان",
    gradient: "from-brand-orange/20 to-brand-yellow/30",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2v20m0-20 3 3m-3-3-3 3m3 17-3-3m3 3 3-3" />
        <path d="M4 8h16M4 16h16" />
      </svg>
    ),
  },
  {
    range: "۱۴–۱۸ سال",
    title: "نوجوانی",
    description: "تغذیه مناسب برای نوجوانان فعال با نیازهای کالری بالاتر",
    gradient: "from-brand-green/20 to-brand-green-deep/20",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export default function AgeGroups() {
  return (
    <section id="age-groups" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold text-brand-slate-darker sm:text-3xl">
            غذا برای هر سنی
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-brand-slate-dark sm:text-lg">
            KidsMeals برای سه گروه سنی اصلی وعده‌های متناسب ارائه می‌دهد.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3 lg:gap-8">
          {AGE_GROUPS.map((group, i) => (
            <div
              key={i}
              className={`group rounded-2xl bg-gradient-to-br ${group.gradient} p-6 transition-all hover:shadow-lg sm:p-8`}
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-xl bg-white/80 text-brand-green-deep shadow-sm transition-transform group-hover:scale-110">
                {group.icon}
              </span>
              <p className="mt-5 text-sm font-bold text-brand-green-deep sm:text-base">
                {group.range}
              </p>
              <h3 className="mt-1 text-lg font-extrabold text-brand-slate-darker sm:text-xl">
                {group.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-brand-slate-dark">
                {group.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}