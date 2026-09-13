const FOOTER_LINKS = [
  { label: "درباره کیدز میلز", href: "#about" },
  { label: "خدمات", href: "#services" },
  { label: "چرا کیدز میلز؟", href: "#why" },
  { label: "همکاری", href: "#partnership" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-gray-mid bg-white py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <img
                src="/logo.svg"
                alt="KidsMeals Logo"
                className="h-10 w-10"
                width="40"
                height="40"
              />
              <span className="font-dana text-xl font-extrabold">
                <span className="text-brand-orange">kids</span>
                <span className="text-brand-green-deep">Meals</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-7 text-brand-slate-dark">
              غذای سالم و گرم، برای رشد سالم‌تر کودکان و نوجوانان.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-bold text-brand-slate-darker">
              دسترسی سریع
            </h3>
            <ul className="mt-4 space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-brand-slate-dark transition-colors hover:text-brand-green-deep"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold text-brand-slate-darker">
              ارتباط با ما
            </h3>
            <p className="mt-4 text-sm leading-7 text-brand-slate-dark">
              برای همکاری یا کسب اطلاعات بیشتر، از طریق فرم تماس با ما در
              ارتباط باشید.
            </p>
            <a
              href="#contact"
              className="mt-4 inline-flex rounded-full bg-brand-green px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand-green-deep"
            >
              فرم تماس
            </a>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-10 border-t border-brand-gray-mid pt-8 text-center">
          <p className="text-sm text-brand-slate-dark">
            © {currentYear} کیدز میلز. تمامی حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
}