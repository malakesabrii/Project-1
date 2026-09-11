export default function Trust() {
  return (
    <section id="about" className="bg-brand-green-deep py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </div>

        <h2 className="mt-6 text-2xl font-extrabold text-white sm:text-3xl">
          ما فقط غذا نمی‌فروشیم؛
          <br />
          آرامش خیال والدین را می‌سازیم.
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/90 sm:text-lg">
          KidsMeals با هدف آسان‌تر کردن تغذیه روزانه کودکان برای والدین شلوغ
          ایجاد شده است. ما می‌خواهیم والدین بتوانند بدون نگرانی، غذای سالم و
          گرم برای فرزندشان تهیه کنند؛ و کودکان تجربه‌ای خوشمزه و لذت‌بخش
          داشته باشند.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-white/80">
          <div className="flex items-center gap-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span className="text-sm font-medium sm:text-base">
              غذای گرم و تازه
            </span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span className="text-sm font-medium sm:text-base">
              توجه به گروه سنی
            </span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span className="text-sm font-medium sm:text-base">
              لذت کودکان
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}