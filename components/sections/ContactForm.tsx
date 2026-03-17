"use client";

import { FormEvent, useMemo, useState } from "react";
import { services } from "@/data/site";
import type { OrderFormValues } from "@/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

type FormErrors = Partial<Record<keyof OrderFormValues, string>>;

const initialValues: OrderFormValues = {
  name: "",
  phone: "",
  service: "",
  address: "",
  note: "",
};

export function ContactForm() {
  const [values, setValues] = useState<OrderFormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverMessage, setServerMessage] = useState("");

  const serviceOptions = useMemo(() => services.map((service) => service.title), []);

  const validate = () => {
    const nextErrors: FormErrors = {};

    if (!values.name.trim()) {
      nextErrors.name = "Ismingizni kiriting.";
    }

    if (!values.phone.trim()) {
      nextErrors.phone = "Telefon raqamini kiriting.";
    } else if (!/^[+\d\s()-]{9,}$/.test(values.phone.trim())) {
      nextErrors.phone = "Telefon raqami noto'g'ri formatda.";
    }

    if (!values.service.trim()) {
      nextErrors.service = "Xizmat turini tanlang.";
    }

    if (!values.address.trim()) {
      nextErrors.address = "Manzilni kiriting.";
    }

    return nextErrors;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();

    setErrors(nextErrors);
    setSubmitted(false);
    setServerMessage("");

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const result = (await response.json()) as {
        success: boolean;
        message: string;
        errors?: FormErrors;
      };

      if (!response.ok || !result.success) {
        setErrors(result.errors ?? {});
        setServerMessage(result.message || "So'rovni yuborishda xatolik yuz berdi.");
        return;
      }

      setSubmitted(true);
      setValues(initialValues);
    } catch {
      setServerMessage("Server bilan bog'lanishda xatolik yuz berdi. Keyinroq qayta urinib ko'ring.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="buyurtma" className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          <div>
            <SectionHeading
              eyebrow="Buyurtma"
              title="Xizmatga buyurtma qoldiring"
              description="Ma'lumotlaringizni yuboring, biz siz bilan bog'lanib kerakli xizmat bo'yicha aniq taklif beramiz."
            />
            <div className="panel surface-highlight mt-6 rounded-[24px] p-5 hover:-translate-y-1 sm:p-6">
              <p className="text-base font-semibold text-brand-navy sm:text-lg">Tezkor aloqa uchun forma</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Buyurtma yuborilgach ma&#39;lumot Telegram orqali qabul qilinadi va siz bilan tez orada bog&#39;laniladi.
              </p>
            </div>
          </div>

          <div className="panel surface-highlight rounded-[28px] p-5 sm:p-6">
            <form className="grid gap-5" onSubmit={handleSubmit} noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  id="name"
                  label="Ism"
                  value={values.name}
                  error={errors.name}
                  onChange={(value) => setValues((current) => ({ ...current, name: value }))}
                  placeholder="Ismingiz"
                />
                <Field
                  id="phone"
                  label="Telefon"
                  value={values.phone}
                  error={errors.phone}
                  onChange={(value) => setValues((current) => ({ ...current, phone: value }))}
                  placeholder="+998 90 123 45 67"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="service" className="mb-2 block text-sm font-medium text-brand-navy">
                    Xizmat turi
                  </label>
                  <select
                    id="service"
                    value={values.service}
                    onChange={(event) =>
                      setValues((current) => ({ ...current, service: event.target.value }))
                    }
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition duration-300 focus:border-brand-blue focus:ring-4 focus:ring-brand-sky hover:border-brand-gold/50"
                    aria-invalid={Boolean(errors.service)}
                    aria-describedby={errors.service ? "service-error" : undefined}
                  >
                    <option value="">Xizmatni tanlang</option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.service ? (
                    <p id="service-error" className="mt-2 text-sm text-red-600">
                      {errors.service}
                    </p>
                  ) : null}
                </div>

                <Field
                  id="address"
                  label="Manzil"
                  value={values.address}
                  error={errors.address}
                  onChange={(value) => setValues((current) => ({ ...current, address: value }))}
                  placeholder="Obyekt manzili"
                />
              </div>

              <div>
                <label htmlFor="note" className="mb-2 block text-sm font-medium text-brand-navy">
                  Izoh
                </label>
                <textarea
                  id="note"
                  value={values.note}
                  onChange={(event) =>
                    setValues((current) => ({ ...current, note: event.target.value }))
                  }
                  rows={5}
                  placeholder="Loyiha yoki obyekt haqida qisqacha ma'lumot yozing"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition duration-300 focus:border-brand-blue focus:ring-4 focus:ring-brand-sky hover:border-brand-gold/50"
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary"
                >
                  {isSubmitting ? "Yuborilmoqda..." : "Buyurtma yuborish"}
                </button>
                <p className="text-sm text-slate-500">So&#39;rov ish vaqtida ko&#39;rib chiqiladi.</p>
              </div>

              {serverMessage ? (
                <div
                  className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-700"
                  role="alert"
                >
                  {serverMessage}
                </div>
              ) : null}

              {submitted ? (
                <div
                  className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700"
                  role="status"
                >
                  So&#39;rovingiz qabul qilindi. Tez orada siz bilan bog&#39;lanamiz.
                </div>
              ) : null}
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}

type FieldProps = {
  id: "name" | "phone" | "address";
  label: string;
  value: string;
  placeholder: string;
  error?: string;
  onChange: (value: string) => void;
};

function Field({ id, label, value, placeholder, error, onChange }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-brand-navy">
        {label}
      </label>
      <input
        id={id}
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition duration-300 focus:border-brand-blue focus:ring-4 focus:ring-brand-sky hover:border-brand-gold/50"
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}
