import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions — Myrackle Clinic",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen w-full bg-white dark:bg-neutral-950">
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-20">
        <Link href="/" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
          ← Back to home
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mt-6 mb-4">
          Terms &amp; Conditions
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-10">
          Last updated: January 2026
        </p>

        <div className="space-y-8 text-neutral-700 dark:text-neutral-300 text-sm md:text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
              Use of Our Services
            </h2>
            <p>
              By booking an appointment or using this website, you agree to
              provide accurate information and to use our services responsibly.
              These terms govern your relationship with Myrackle Clinic.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
              Appointments &amp; Cancellations
            </h2>
            <p>
              We kindly ask that you provide at least 24 hours notice to
              reschedule or cancel an appointment so we can offer the slot to
              another patient. Repeated missed appointments may affect future
              booking availability.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
              Medical Disclaimer
            </h2>
            <p>
              Content on this website is provided for general information only
              and does not replace professional medical advice. Always consult a
              qualified clinician regarding your individual health needs.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
              Contact
            </h2>
            <p>
              Questions about these terms? Reach us at
              appointments@myrackleclinic.example or +1 (555) 010-2040.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
