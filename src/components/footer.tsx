import React from "react";

function SocialIcon({
  label,
  href,
  children,
}: {
  label: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:text-white transition-colors"
    >
      {children}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="w-full bg-neutral-950 text-neutral-300 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 text-white font-bold">
                M
              </span>
              <span className="font-bold text-white text-lg tracking-tight">
                Meridian Health
              </span>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Compassionate, expert medical care for you and your family — all
              under one roof.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <SocialIcon label="Facebook" href="#">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
                </svg>
              </SocialIcon>
              <SocialIcon label="Instagram" href="#">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
                </svg>
              </SocialIcon>
              <SocialIcon label="X" href="#">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.9 1.9h3.7l-8 9.1L24 22.1h-7.4l-5.8-7.6-6.6 7.6H.5l8.5-9.8L0 1.9h7.6l5.2 6.9 6.1-6.9zm-1.3 18h2L6.5 3.8h-2.2L17.6 19.9z" />
                </svg>
              </SocialIcon>
              <SocialIcon label="LinkedIn" href="#">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0z" />
                </svg>
              </SocialIcon>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#top" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#care" className="hover:text-white transition-colors">Expert Medical Care</a></li>
              <li><a href="#treatments" className="hover:text-white transition-colors">Advanced Treatments</a></li>
              <li><a href="#book" className="hover:text-white transition-colors">Book Appointment</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#care" className="hover:text-white transition-colors">General Consultation</a></li>
              <li><a href="#care" className="hover:text-white transition-colors">Cardiology</a></li>
              <li><a href="#care" className="hover:text-white transition-colors">Pediatric Care</a></li>
              <li><a href="#treatments" className="hover:text-white transition-colors">Diagnostics &amp; Lab</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Contact</h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li>218 Wellness Avenue, Suite 300<br />Riverside, CA 92501</li>
              <li>
                <a href="tel:+15550102040" className="hover:text-white transition-colors">
                  +1 (555) 010-2040
                </a>
              </li>
              <li>
                <a href="mailto:appointments@meridianhealth.example" className="hover:text-white transition-colors">
                  appointments@meridianhealth.example
                </a>
              </li>
              <li>Mon–Sat: 8:00 AM – 8:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
          <p>© 2026 Meridian Health Clinic. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
