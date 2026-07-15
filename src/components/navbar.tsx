import React from "react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200/70 dark:border-neutral-800 bg-white/85 dark:bg-neutral-950/85 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 lg:px-10 h-16">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-700 to-cyan-600 text-white font-bold text-lg shadow-sm">
            M
          </span>
          <span className="leading-tight">
            <span className="block font-bold text-neutral-900 dark:text-white text-base tracking-tight">
              Myrackle Clinic
            </span>
            <span className="block text-[10px] uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
              Advanced Medical Care
            </span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600 dark:text-neutral-300">
          <a href="#top" className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
            Home
          </a>
          <a href="#care" className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
            Our Care
          </a>
          <a href="#treatments" className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
            Treatments
          </a>
          <a href="#book" className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="tel:+15550102040"
            className="hidden lg:flex items-center gap-2 text-sm font-semibold text-neutral-700 dark:text-neutral-200 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            +1 (555) 010-2040
          </a>
          <a
            href="#book"
            className="inline-flex items-center rounded-full bg-gradient-to-br from-blue-700 to-cyan-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity"
          >
            Book Appointment
          </a>
        </div>
      </nav>
    </header>
  );
}
