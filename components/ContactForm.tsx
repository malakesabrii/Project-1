"use client";

import { useState, FormEvent } from "react";
import { supabase, type ContactLead } from "@/lib/supabase";

const COLLABORATION_OPTIONS = [
  { value: "business", label: "همکاری تجاری" },
  { value: "investment", label: "سرمایه‌گذاری / حمایت" },
  { value: "nutrition", label: "تغذیه و مشاوره تخصصی" },
  { value: "production", label: "تهیه و تولید غذا" },
  { value: "delivery", label: "توزیع و ارسال" },
  { value: "marketing", label: "بازاریابی و توسعه برند" },
  { value: "other", label: "سایر" },
];

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Form data
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [collaborationTypes, setCollaborationTypes] = useState<string[]>([]);
  const [message, setMessage] = useState("");

  // Validation errors
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep1 = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!fullName.trim()) {
      newErrors.fullName = "لطفاً نام و نام خانوادگی را وارد کنید.";
    }

    if (!phone.trim()) {
      newErrors.phone = "لطفاً شماره موبایل را وارد کنید.";
    } else if (!/^09\d{9}$/.test(phone.replace(/\s/g, ""))) {
      newErrors.phone = "لطفاً شماره موبایل معتبر وارد کنید.";
    }

    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "لطفاً ایمیل معتبر وارد کنید.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (collaborationTypes.length === 0) {
      newErrors.collaborationTypes = "لطفاً حداقل یک نوع همکاری را انتخاب کنید.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
      setErrors({});
    } else if (step === 2 && validateStep2()) {
      setStep(3);
      setErrors({});
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
      setErrors({});
    }
  };

  const toggleCollaborationType = (value: string) => {
    setCollaborationTypes((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (formState === "submitting") return;

    setFormState("submitting");
    setErrorMessage("");

    const leadData: ContactLead = {
      full_name: fullName.trim(),
      phone: phone.trim(),
      email: email.trim() || undefined,
      collaboration_types: collaborationTypes,
      message: message.trim() || undefined,
      status: "new",
      source: "landing_page",
    };

    try {
      const { error } = await supabase.from("contact_leads").insert([leadData]);

      if (error) {
        console.error("Supabase error:", error);
        throw error;
      }

      setFormState("success");
    } catch (err) {
      console.error("Submit error:", err);
      setFormState("error");
      setErrorMessage("خطایی رخ داد. لطفاً دوباره تلاش کنید.");
    }
  };

  // Success state
  if (formState === "success") {
    return (
      <div className="mx-auto max-w-2xl rounded-3xl bg-white px-6 py-12 text-center shadow-lg sm:px-10 sm:py-16">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-green/10">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2E7D32"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <h3 className="mt-6 text-2xl font-extrabold text-brand-slate-darker">
          درخواست شما با موفقیت ثبت شد 🌱
        </h3>
        <p className="mt-4 text-base leading-8 text-brand-slate-dark">
          تیم KidsMeals در اولین فرصت با شما تماس خواهد گرفت.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl rounded-3xl bg-white px-6 py-10 shadow-lg sm:px-10 sm:py-12">
      {/* Progress indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex flex-1 items-center">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                  s === step
                    ? "bg-brand-green text-white"
                    : s < step
                    ? "bg-brand-green/20 text-brand-green-deep"
                    : "bg-brand-gray-mid text-brand-slate-dark"
                }`}
              >
                {s}
              </div>
              {s < 3 && (
                <div
                  className={`mx-2 h-1 flex-1 rounded transition-colors ${
                    s < step ? "bg-brand-green" : "bg-brand-gray-mid"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <p className="mt-3 text-center text-sm text-brand-slate-dark">
          مرحله {step} از ۳
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1 */}
        {step === 1 && (
          <div className="space-y-5">
            <h3 className="text-xl font-bold text-brand-slate-darker sm:text-2xl">
              شما کی هستید؟
            </h3>

            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-brand-slate-darker"
              >
                نام و نام خانوادگی <span className="text-brand-orange">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="mt-2 w-full rounded-xl border border-brand-gray-mid bg-white px-4 py-3 text-brand-slate-darker transition-colors focus:border-brand-green"
                placeholder="نام کامل خود را وارد کنید"
                required
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-brand-orange">{errors.fullName}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-brand-slate-darker"
              >
                شماره موبایل <span className="text-brand-orange">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-2 w-full rounded-xl border border-brand-gray-mid bg-white px-4 py-3 text-brand-slate-darker transition-colors focus:border-brand-green"
                placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                dir="ltr"
                required
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-brand-orange">{errors.phone}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-brand-slate-darker"
              >
                ایمیل (اختیاری)
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-full rounded-xl border border-brand-gray-mid bg-white px-4 py-3 text-brand-slate-darker transition-colors focus:border-brand-green"
                placeholder="example@email.com"
                dir="ltr"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-brand-orange">{errors.email}</p>
              )}
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="space-y-5">
            <h3 className="text-xl font-bold text-brand-slate-darker sm:text-2xl">
              برای چه نوع همکاری با KidsMeals علاقه‌مند هستید؟
            </h3>

            <div className="space-y-3">
              {COLLABORATION_OPTIONS.map((option) => (
                <label
                  key={option.value}
                  className={`flex cursor-pointer items-center gap-3 rounded-xl border-2 px-4 py-3 transition-all ${
                    collaborationTypes.includes(option.value)
                      ? "border-brand-green bg-brand-green/5"
                      : "border-brand-gray-mid bg-white hover:border-brand-green/50"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={collaborationTypes.includes(option.value)}
                    onChange={() => toggleCollaborationType(option.value)}
                    className="h-5 w-5 rounded border-brand-gray-mid text-brand-green focus:ring-brand-green/40"
                  />
                  <span className="text-sm font-medium text-brand-slate-darker sm:text-base">
                    {option.label}
                  </span>
                </label>
              ))}
            </div>

            {errors.collaborationTypes && (
              <p className="text-sm text-brand-orange">{errors.collaborationTypes}</p>
            )}
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div className="space-y-5">
            <h3 className="text-xl font-bold text-brand-slate-darker sm:text-2xl">
              توضیح کوتاهی درباره پیشنهاد یا درخواستتان (اختیاری)
            </h3>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-brand-slate-darker"
              >
                پیام شما
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={6}
                maxLength={1000}
                className="mt-2 w-full rounded-xl border border-brand-gray-mid bg-white px-4 py-3 text-brand-slate-darker transition-colors focus:border-brand-green"
                placeholder="اگر توضیح کوتاهی درباره پیشنهاد یا درخواستتان دارید، برای ما بنویسید..."
              />
              <p className="mt-1 text-xs text-brand-slate-dark">
                {message.length} / ۱۰۰۰ کاراکتر
              </p>
            </div>

            {formState === "error" && (
              <div className="rounded-xl bg-brand-orange/10 px-4 py-3 text-sm text-brand-orange">
                {errorMessage}
              </div>
            )}
          </div>
        )}

        {/* Navigation buttons */}
        <div className="mt-8 flex gap-3">
          {step > 1 && (
            <button
              type="button"
              onClick={handlePrevStep}
              className="flex-1 rounded-full border-2 border-brand-gray-mid bg-white px-6 py-3 text-base font-bold text-brand-slate-darker transition-colors hover:border-brand-green/50"
            >
              بازگشت
            </button>
          )}

          {step < 3 ? (
            <button
              type="button"
              onClick={handleNextStep}
              className="flex-1 rounded-full bg-brand-green px-6 py-3 text-base font-bold text-white shadow-md transition-all hover:bg-brand-green-deep hover:shadow-lg"
            >
              مرحله بعد
            </button>
          ) : (
            <button
              type="submit"
              disabled={formState === "submitting"}
              className="flex-1 rounded-full bg-brand-green px-6 py-3 text-base font-bold text-white shadow-md transition-all hover:bg-brand-green-deep hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
            >
              {formState === "submitting" ? "در حال ارسال..." : "ارسال درخواست"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}