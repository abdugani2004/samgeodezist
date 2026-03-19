"use client";

import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";
import type { WorkItem } from "@/types";

type AdminWorksManagerProps = {
  initialWorks: WorkItem[];
};

export function AdminWorksManager({ initialWorks }: AdminWorksManagerProps) {
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [works, setWorks] = useState<WorkItem[]>(initialWorks);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setWorks(initialWorks);
  }, [initialWorks]);

  async function refreshWorks() {
    setIsLoading(true);

    try {
      const response = await fetch("/api/works", { cache: "no-store" });
      const result = (await response.json()) as { works: WorkItem[] };
      setWorks(result.works ?? []);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    if (!password.trim()) {
      setMessage("Admin parolini kiriting.");
      return;
    }

    if (!title.trim() || !description.trim() || !file) {
      setMessage("Sarlavha, description va rasm majburiy.");
      return;
    }

    setIsSubmitting(true);

    try {
      const uploadForm = new FormData();
      uploadForm.append("file", file);

      const uploadResponse = await fetch("/api/works/upload", {
        method: "POST",
        headers: {
          "x-admin-password": password,
        },
        body: uploadForm,
      });

      const uploadResult = (await uploadResponse.json()) as {
        success?: boolean;
        message?: string;
        imageUrl?: string;
      };

      if (!uploadResponse.ok || !uploadResult.imageUrl) {
        setMessage(uploadResult.message || "Rasm yuklab bo'lmadi.");
        return;
      }

      const createResponse = await fetch("/api/works", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-password": password,
        },
        body: JSON.stringify({
          title,
          description,
          imageUrl: uploadResult.imageUrl,
        }),
      });

      const createResult = (await createResponse.json()) as { message?: string };

      if (!createResponse.ok) {
        setMessage(createResult.message || "Yozuvni saqlab bo'lmadi.");
        return;
      }

      setTitle("");
      setDescription("");
      setFile(null);
      setMessage("Rasm va description muvaffaqiyatli qo'shildi.");
      await refreshWorks();
    } catch {
      setMessage("Kutilmagan xatolik yuz berdi.");
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleDelete(item: WorkItem) {
    if (!password.trim()) {
      setMessage("O'chirish uchun admin parolini kiriting.");
      return;
    }

    if (!item.id) {
      setMessage("Bu yozuvni o'chirib bo'lmadi.");
      return;
    }

    setMessage("");
    setIsLoading(true);

    try {
      const response = await fetch(
        `/api/works?id=${encodeURIComponent(item.id)}&imageUrl=${encodeURIComponent(item.image_url)}`,
        {
          method: "DELETE",
          headers: {
            "x-admin-password": password,
          },
        },
      );

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        setMessage(result.message || "O'chirishda xatolik yuz berdi.");
        return;
      }

      setMessage("Yozuv o'chirildi.");
      await refreshWorks();
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      <section className="panel rounded-[28px] p-5 sm:p-6">
        <h2 className="text-2xl font-bold text-brand-navy">Yangi ish qo&#39;shish</h2>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          Rasm yuklang, qisqa sarlavha va description yozing. Saqlangandan keyin
          u avtomatik ravishda `Bizning ishlar` bo&#39;limida chiqadi.
        </p>

        <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
          <Field
            label="Admin paroli"
            value={password}
            type="password"
            onChange={setPassword}
            placeholder="Parol"
          />
          <Field
            label="Sarlavha"
            value={title}
            onChange={setTitle}
            placeholder="Masalan: Geodeziya ishlari"
          />
          <div>
            <label className="mb-2 block text-sm font-medium text-brand-navy">Description</label>
            <textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              rows={5}
              placeholder="Qisqacha izoh yozing"
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition duration-300 focus:border-brand-blue focus:ring-4 focus:ring-brand-sky hover:border-brand-gold/50"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-brand-navy">Rasm</label>
            <input
              type="file"
              accept="image/*"
              onChange={(event) => setFile(event.target.files?.[0] ?? null)}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition duration-300 focus:border-brand-blue focus:ring-4 focus:ring-brand-sky hover:border-brand-gold/50"
            />
          </div>

          <button type="submit" className="btn-primary" disabled={isSubmitting}>
            {isSubmitting ? "Saqlanmoqda..." : "Rasmni qo&#39;shish"}
          </button>

          {message ? (
            <div className="rounded-2xl border border-brand-navy/10 bg-slate-50 px-4 py-3 text-sm text-slate-700">
              {message}
            </div>
          ) : null}
        </form>
      </section>

      <section className="panel rounded-[28px] p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-2xl font-bold text-brand-navy">Mavjud ishlar</h2>
          <button
            type="button"
            onClick={refreshWorks}
            className="rounded-full border border-brand-navy/10 px-4 py-2 text-sm font-semibold text-brand-navy transition hover:border-brand-gold hover:text-brand-blue"
          >
            Yangilash
          </button>
        </div>

        <div className="mt-6 grid gap-4">
          {works.length === 0 ? (
            <div className="rounded-[22px] border border-slate-200 bg-slate-50 px-4 py-5 text-sm text-slate-600">
              Hozircha Supabase ichida ishlar yo&#39;q.
            </div>
          ) : (
            works.map((item) => (
              <article
                key={item.id ?? `${item.title}-${item.image_url}`}
                className="rounded-[24px] border border-slate-200 bg-white p-4 shadow-[0_12px_28px_rgba(15,23,42,0.05)]"
              >
                <div className="grid gap-4 sm:grid-cols-[180px_minmax(0,1fr)]">
                  <div className="relative h-40 overflow-hidden rounded-[18px]">
                    <Image src={item.image_url} alt={item.title} fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-navy">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                    <button
                      type="button"
                      onClick={() => void handleDelete(item)}
                      className="mt-4 rounded-full border border-red-200 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50"
                      disabled={isLoading}
                    >
                      O&#39;chirish
                    </button>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>
      </section>
    </div>
  );
}

type FieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
};

function Field({ label, value, onChange, placeholder, type = "text" }: FieldProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-brand-navy">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition duration-300 focus:border-brand-blue focus:ring-4 focus:ring-brand-sky hover:border-brand-gold/50"
      />
    </div>
  );
}
