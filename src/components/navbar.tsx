import React from "react";

export function Navbar() {
  return (
    <header className="w-full border-b border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-neutral-950/90 backdrop-blur">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 lg:px-10 h-16">
        <a href="#top" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 text-white font-bold">
            M
          </span>
          <span className="font-bold text-neutral-900 dark:text-white text-lg tracking-tight">
            Meridian Health
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600 dark:text-neutral-300">
          <a href="#top" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Home
          </a>
          <a href="#care" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Care
          </a>
          <a href="#treatments" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Treatments
          </a>
          <a href="#book" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Contact
          </a>
        </div>

        <a
          href="#book"
          className="inline-flex items-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity"
        >
          Book Appointment
        </a>
      </nav>
    </header>
  );
}
