import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-brand-yellow-light via-white to-white pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24"
    >
      {/* Decorative blobs */}
      <div
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-lime/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-40 -right-24 h-72 w-72 rounded-full bg-brand-orange/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Text */}
        <div className="text-center lg:text-right">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-green/10 px-4 py-1.5 text-sm font-medium text-brand-green-deep">
            <span className="h-2 w-2 rounded-full bg-brand-green" aria-hidden="true" />
            غذای سالم، گرم و متناسب با سن
          </span>

          <h1 className="mt-6 text-3xl font-extrabold leading-[1.3] text-brand-slate-darker sm:text-4xl lg:text-5xl lg:leading-[1.25]">
            غذای سالم و گرم،
            <br />
            برای رشد سالم‌تر
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-brand-slate-dark sm:text-lg lg:mx-0">
            کیدز میلز راهی ساده‌تر برای تأمین غذای خوشمزه، گرم و متناسب با نیاز
            کودکان و نوجوانان است؛ تا خیال والدین از تغذیه روزانه فرزندشان
            راحت‌تر باشد.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              href="#contact"
              className="w-full rounded-full bg-brand-green px-8 py-3.5 text-center text-base font-bold text-white shadow-md transition-all hover:bg-brand-green-deep hover:shadow-lg sm:w-auto"
            >
              با ما در ارتباط باشید
            </Link>
            <Link
              href="#about"
              className="w-full rounded-full border-2 border-brand-green/30 bg-white px-8 py-3.5 text-center text-base font-bold text-brand-green-deep transition-all hover:border-brand-green hover:bg-brand-green/5 sm:w-auto"
            >
              کیدز میلز را بیشتر بشناسید
            </Link>
          </div>
        </div>

        {/* Visual */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-brand-yellow-light via-brand-green/5 to-brand-lime/10 shadow-xl">
            {/* TODO: Replace with actual KidsMeals photography */}
            {/* Recommended: /images/hero/hero-1-bag-and-food.jpg */}
            {/* Alt: کیسه و ظرف غذای گرم KidsMeals */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <img
                  src="/logo.svg"
                  alt="کیدز میلز"
                  className="mx-auto h-32 w-32 opacity-30"
                />
                <p className="mt-4 text-sm font-medium text-brand-slate-dark opacity-50">
                  تصویر واقعی کیسه و غذای کیدز میلز
                </p>
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-4 right-4 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-lg sm:right-8">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-orange/15 text-brand-orange">
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
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </span>
            <div>
              <p className="text-sm font-bold text-brand-slate-darker">
                با عشق برای کودکان
              </p>
              <p className="text-xs text-brand-slate-dark">
                گرم، تازه و متناسب با سن
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}