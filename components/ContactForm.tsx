"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function ContactForm() {
  const t = useTranslations("contact");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isValid = form.name.trim() && form.email.trim() && form.message.trim();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!isValid) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error ?? "Erreur lors de l'envoi.");
        return;
      }

      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setError("Erreur réseau, vérifiez votre connexion.");
      console.error("Erreur:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900 rounded-2xl p-8 text-center flex flex-col gap-4"
      >
        <span className="text-5xl">✅</span>

        <h3 className="text-xl font-bold text-green-700 dark:text-green-400">
          {t("success")}
        </h3>

        <p className="text-green-600 dark:text-green-400 text-sm">
          Je vous répondrai dans les plus brefs délais.
        </p>

        <button
          onClick={() => setSuccess(false)}
          className="text-sm text-green-500 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors underline"
        >
          Envoyer un autre message
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm dark:shadow-gray-950/30 p-8 flex flex-col gap-5"
    >
      {/* Nom */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
          {t("name")} <span className="text-red-400">*</span>
        </label>

        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Votre nom"
          className="p-3 border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-800 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-shadow"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
          {t("email")} <span className="text-red-400">*</span>
        </label>

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="votre@email.com"
          className="p-3 border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-800 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-shadow"
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
          {t("message")} <span className="text-red-400">*</span>
        </label>

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Décrivez votre projet ou votre demande..."
          className="p-3 border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-800 placeholder-gray-400 dark:placeholder-gray-500 resize-none h-36 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-shadow"
          maxLength={1000}
        />

        <span className="text-xs text-gray-400 dark:text-gray-500 text-right">
          {form.message.length}/1000
        </span>
      </div>

      {/* Erreur */}
      {error && (
        <div className="p-4 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 rounded-xl text-red-600 dark:text-red-400 text-sm">
          ⚠️ {error}
        </div>
      )}

      {/* Bouton */}
      <button
        onClick={handleSubmit}
        disabled={isLoading || !isValid}
        className="px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl font-medium hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <>
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            {t("sending")}
          </>
        ) : (
          t("send")
        )}
      </button>
    </motion.div>
  );
}