"use client";

import Link from "next/link";
import { useState } from "react";

type NavItem = { label: string; href: string };

export default function MobileNav({
  anchorItems,
  langSwitchLabel,
  langSwitchHref,
}: {
  anchorItems: NavItem[];
  langSwitchLabel: string;
  langSwitchHref: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label="メニューを開く"
        onClick={() => setOpen((v) => !v)}
        className="p-2 -mr-2 text-gray-700"
      >
        {open ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        )}
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-md">
          <nav className="flex flex-col px-4 py-2 text-sm text-gray-600">
            {anchorItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 border-b border-gray-50 last:border-0 hover:text-gray-900"
              >
                {item.label}
              </a>
            ))}
            <Link
              href={langSwitchHref}
              onClick={() => setOpen(false)}
              className="py-3 hover:text-gray-900 font-medium"
            >
              {langSwitchLabel}
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
