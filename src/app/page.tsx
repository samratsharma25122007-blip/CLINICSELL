import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const cardShadow =
  "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]";

function ContactCard({
  href,
  tint,
  icon,
  label,
  value,
}: {
  href: string;
  tint: string;
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <a
      href={href}
      className={`rounded-lg h-20 md:h-44 lg:h-60 w-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex flex-col items-center justify-center text-center gap-1 md:gap-3 p-3 md:p-4 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors ${cardShadow}`}
    >
      <span
        className={`inline-flex h-8 w-8 md:h-12 md:w-12 items-center justify-center rounded-full text-white ${tint}`}
      >
        {icon}
      </span>
      <span className="text-[10px] md:text-sm font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wide">
        {label}
      </span>
      <span className="text-xs md:text-base font-medium text-neutral-800 dark:text-neutral-200 break-words leading-tight">
        {value}
      </span>
    </a>
  );
}

function TimelineDemo() {
  const data = [
    {
      title: "Expert Medical Care",
      content: (
        <div id="care">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Our board-certified physicians provide comprehensive, patient-first
            care across every specialty — from routine consultations to complex
            conditions, always with your comfort in mind.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/consultation.svg"
              alt="General consultation at Meridian Health Clinic"
              width={500}
              height={500}
              className={`rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full ${cardShadow}`}
            />
            <Image
              src="/images/cardiology.svg"
              alt="Cardiology and heart health services"
              width={500}
              height={500}
              className={`rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full ${cardShadow}`}
            />
            <Image
              src="/images/pediatrics.svg"
              alt="Pediatric care for children"
              width={500}
              height={500}
              className={`rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full ${cardShadow}`}
            />
            <Image
              src="/images/checkup.svg"
              alt="Routine health checkups"
              width={500}
              height={500}
              className={`rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full ${cardShadow}`}
            />
          </div>
        </div>
      ),
    },
    {
      title: "Advanced Treatments",
      content: (
        <div id="treatments">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Meridian is equipped with the latest medical technology, so you
            receive precise diagnoses and effective, minimally-invasive
            treatments.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            From modern operating suites to an in-house diagnostic laboratory,
            advanced care is available all under one roof.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/surgery.svg"
              alt="Modern surgical suites"
              width={500}
              height={500}
              className={`rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full ${cardShadow}`}
            />
            <Image
              src="/images/imaging.svg"
              alt="Advanced medical imaging"
              width={500}
              height={500}
              className={`rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full ${cardShadow}`}
            />
            <Image
              src="/images/laboratory.svg"
              alt="In-house diagnostic laboratory"
              width={500}
              height={500}
              className={`rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full ${cardShadow}`}
            />
            <Image
              src="/images/physiotherapy.svg"
              alt="Physiotherapy and rehabilitation"
              width={500}
              height={500}
              className={`rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full ${cardShadow}`}
            />
          </div>
        </div>
      ),
    },
    {
      title: "Book Your Appointment",
      content: (
        <div id="book">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Ready to take the next step toward better health? Booking with
            Meridian takes less than a minute — choose a time that works for you
            and our team will take care of the rest.
          </p>

          <a
            href="mailto:appointments@meridianhealth.example?subject=Appointment%20Request"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 px-6 py-3 text-sm md:text-base font-semibold text-white shadow-md hover:opacity-90 transition-opacity mb-8"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Book Appointment
          </a>

          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🕐 Mon–Sat: 8:00 AM – 8:00 PM
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🕐 Sunday: 9:00 AM – 2:00 PM
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🚑 24/7 Emergency: +1 (555) 010-9111
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Same-day appointments available
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <ContactCard
              href="tel:+15550102040"
              tint="bg-gradient-to-br from-blue-600 to-cyan-500"
              label="Call Us"
              value="+1 (555) 010-2040"
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              }
            />
            <ContactCard
              href="https://wa.me/15550102040"
              tint="bg-gradient-to-br from-green-500 to-emerald-600"
              label="WhatsApp"
              value="Chat with us"
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2z" />
                </svg>
              }
            />
            <ContactCard
              href="mailto:appointments@meridianhealth.example"
              tint="bg-gradient-to-br from-indigo-500 to-violet-600"
              label="Email Us"
              value="appointments@meridianhealth.example"
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 6L2 7" />
                </svg>
              }
            />
            <ContactCard
              href="https://maps.google.com/?q=218+Wellness+Avenue+Riverside+CA"
              tint="bg-gradient-to-br from-rose-500 to-red-600"
              label="Visit Us"
              value="218 Wellness Ave, Riverside, CA"
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              }
            />
          </div>
        </div>
      ),
    },
  ];
  return <Timeline data={data} />;
}

export default function Home() {
  return (
    <main id="top" className="min-h-screen w-full">
      <Navbar />
      <TimelineDemo />
      <Footer />
    </main>
  );
}
