import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-brand-gray-soft py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold text-brand-slate-darker sm:text-3xl">
            بیایید با هم کاری بسازیم
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-brand-slate-dark sm:text-lg">
            اطلاعات خود را با ما به اشتراک بگذارید تا در اولین فرصت با شما تماس
            بگیریم.
          </p>
        </div>

        <div className="mt-10">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}