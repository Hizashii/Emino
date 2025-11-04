import React, { useCallback } from "react";

const Footer = () => {
  const navLinks = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#recent-work", label: "Works" },
    { href: "#pricing", label: "Pricing" },
    { href: "#common-questions", label: "FAQ" },
  ];

  const handleScroll = useCallback((e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (!target) return;
    const headerOffset = 80;
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  }, []);

  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-950 text-gray-300">
      {/* subtle top border glow */}
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand / tagline */}
          <div>
            <a
              href="#hero"
              onClick={(e) => handleScroll(e, "#hero")}
              className="inline-flex items-center gap-3"
            >
              <img
                src={`${import.meta.env.BASE_URL}assets/image/logo.svg`}
                alt="Emino"
                className="h-8 w-auto brightness-0 invert"
              />
            </a>
            <p className="mt-4 text-sm text-gray-400 max-w-xs">
              We design and build fast websites - and add AI where it helps.
            </p>

            {/* Trust chips */}
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full border border-gray-800/60 px-3 py-1 text-xs text-gray-400">
                AI-ready
              </span>
              <span className="rounded-full border border-gray-800/60 px-3 py-1 text-xs text-gray-400">
                95+ Lighthouse
              </span>
              <span className="rounded-full border border-gray-800/60 px-3 py-1 text-xs text-gray-400">
                GDPR-aware
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Primary" className="md:pl-6">
            <h3 className="text-sm font-semibold text-gray-100 mb-4">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="text-gray-400 hover:text-white transition-colors no-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-100 mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="mailto:Luchiteksales@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  Luchiteksales@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+0000000000" className="hover:text-white">
                  +00 000 000 000
                </a>
              </li>
              <li className="text-gray-500">
                Esbjerg, Denmark (Remote worldwide)
              </li>
            </ul>

            {/* Socials */}
            <div className="mt-5 flex gap-3">
              <IconButton
                href="https://linkedin.com"
                label="LinkedIn"
                icon={
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M8 11v6M8 8.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                    <path d="M12 11v6m0-3.5c0-1.5 1.2-2.5 2.7-2.5S18 11.5 18 13v4" />
                  </svg>
                }
              />
              <IconButton
                href="https://behance.net"
                label="Behance"
                icon={
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M9 8.5h2.5a2 2 0 1 1 0 4H9z" />
                    <path d="M14.5 12c0-1.1.9-2 2-2s2 .9 2 2h-4Z" />
                    <path d="M14.5 12c0 1.1.9 2 2 2s2-.9 2-2h-4Z" />
                    <path d="M14 7h5" />
                  </svg>
                }
              />
            </div>
          </div>

          {/* Newsletter (optional — remove if you don’t need it) */}
          <div>
            <h3 className="text-sm font-semibold text-gray-100 mb-4">
              Stay in the loop
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Monthly tips on fast websites, tasteful motion, and useful AI.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // TODO: hook up to your email service (Buttondown, Brevo, Mailchimp)
                alert("Thanks! We’ll be in touch.");
              }}
              className="flex items-center gap-2"
            >
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-md bg-gray-900/60 border border-gray-800 px-3 py-2 text-sm text-gray-200 placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-blue-600/50"
              />
              <button
                type="submit"
                className="rounded-md bg-blue-600 px-3.5 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-gray-800/80 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {year} Emino. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-xs">
            <a href="#privacy" className="text-gray-500 hover:text-gray-300">
              Privacy
            </a>
            <span className="text-gray-700">•</span>
            <a href="#terms" className="text-gray-500 hover:text-gray-300">
              Terms
            </a>
            <span className="text-gray-700">•</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-gray-400 hover:text-white"
              aria-label="Back to top"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

/* small helper for round icon buttons */
function IconButton({ href, label, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-700 transition"
      title={label}
    >
      {icon}
    </a>
  );
}

export default Footer;
