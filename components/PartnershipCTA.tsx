import Link from "next/link";

export default function PartnershipCTA() {
  return (
    <section id="partnership" className="bg-brand-gray-soft py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-brand-green via-brand-green-deep to-brand-green-forest px-6 py-12 shadow-xl sm:px-10 sm:py-16">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
            اگر فکر می‌کنید می‌توانیم با هم کاری بسازیم،
            <br className="hidden sm:inline" />
            با ما در ارتباط باشید.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
            برای همکاری، حمایت یا آشنایی بیشتر با کیدز میلز، اطلاعاتتان را برای
            ما ارسال کنید.
          </p>
          <Link
            href="#contact"
            className="mt-8 inline-flex rounded-full bg-white px-8 py-4 text-base font-bold text-brand-green-deep shadow-lg transition-all hover:bg-brand-yellow-light hover:shadow-xl sm:text-lg"
          >
            شروع ارتباط
          </Link>
        </div>
      </div>
    </section>
  );
}