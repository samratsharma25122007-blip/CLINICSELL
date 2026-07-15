import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — Meridian Health Clinic",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen w-full bg-white dark:bg-neutral-950">
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-20">
        <Link href="/" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
          ← Back to home
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mt-6 mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-10">
          Last updated: January 2026
        </p>

        <div className="space-y-8 text-neutral-700 dark:text-neutral-300 text-sm md:text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
              Information We Collect
            </h2>
            <p>
              Meridian Health Clinic collects the information you provide when
              booking an appointment, contacting us, or receiving care — such as
              your name, contact details, and relevant medical history. We only
              collect what is necessary to deliver safe, effective care.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
              How We Use Your Information
            </h2>
            <p>
              Your information is used to schedule and provide medical services,
              communicate with you about your care, and meet our legal and
              regulatory obligations. We never sell your personal data.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
              Protecting Your Health Data
            </h2>
            <p>
              We apply industry-standard safeguards to keep your medical records
              confidential and secure. Access is limited to authorized clinical
              staff involved in your treatment.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
              Your Rights
            </h2>
            <p>
              You may request access to, correction of, or deletion of your
              personal information at any time by contacting us at
              appointments@meridianhealth.example.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
