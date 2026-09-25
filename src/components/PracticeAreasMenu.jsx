import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Plus, Minus } from 'lucide-react';
import menu from '../data/practice-menu.json';

const GOLD = '#c5a043';

/**
 * Practice Areas mega menu, mirroring the one built into the 40 static
 * landing pages under /practice/. Both are driven by the same category
 * list, so the two stay in step.
 *
 * Links are plain anchors on purpose: /practice/* is served as static
 * HTML by Netlify and is not a React route, so these must be full page
 * navigations rather than react-router transitions.
 */

function Pane({ category }) {
  return (
    <div className="flex-1 px-8 py-7">
      <h3
        className="text-2xl font-black tracking-tight text-[#18181b]"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {category.label}
      </h3>
      <p className="mt-1 text-sm text-[#71717a]">{category.blurb}</p>

      <a
        href={category.url}
        className="mt-4 inline-block rounded-sm bg-[#18181b] px-4 py-2 text-xs font-black uppercase tracking-widest text-white transition-opacity hover:opacity-90"
      >
        {category.label}
      </a>

      {category.types_of_cases.length > 0 && (
        <>
          <p className="mt-6 text-[11px] font-black uppercase tracking-widest text-[#71717a]">
            Types of cases
          </p>
          <ul className="mt-2 grid grid-cols-1 gap-x-10 md:grid-cols-2">
            {category.types_of_cases.map((item) => (
              <li key={item.url} className="border-b border-[#e4e4e7]">
                <a
                  href={item.url}
                  className="block py-2 text-[15px] text-[#3a3a3a] transition-colors hover:text-[#c5a043]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}

      {category.related_pages.length > 0 && (
        <>
          <p className="mt-6 text-[11px] font-black uppercase tracking-widest text-[#71717a]">
            Related pages
          </p>
          <ul className="mt-2 grid grid-cols-1 gap-x-10 md:grid-cols-2">
            {category.related_pages.map((item) => (
              <li key={item.url} className="border-b border-[#e4e4e7]">
                <a
                  href={item.url}
                  className="block py-2 text-[15px] text-[#3a3a3a] transition-colors hover:text-[#c5a043]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export function PracticeAreasMegaMenu() {
  const [open, setOpen] = useState(false);
  const [activeKey, setActiveKey] = useState(menu[0].url);
  const wrapRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const onClick = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [open]);

  const active = menu.find((c) => c.url === activeKey) || menu[0];

  return (
    <div ref={wrapRef}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls="practice-areas-panel"
        onMouseEnter={() => setOpen(true)}
        onClick={() => setOpen(true)}
        className={`flex items-center gap-1.5 uppercase tracking-widest transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a043] ${
          open ? 'text-[#c5a043]' : 'hover:text-[#c5a043]'
        }`}
      >
        Practice Areas
        <ChevronDown size={14} className={open ? 'rotate-180 transition-transform' : 'transition-transform'} />
      </button>

      {open && (
        <div
          id="practice-areas-panel"
          // normal-case/tracking-normal/font-normal reset the uppercase nav
          // styling that would otherwise cascade into the panel
          className="absolute left-0 right-0 top-full border-t-[3px] bg-white shadow-2xl normal-case tracking-normal font-normal text-[#3a3a3a]"
          style={{ borderTopColor: GOLD }}
        >
          <div className="mx-auto flex max-w-7xl">
            <ul className="w-72 shrink-0 border-r border-[#e4e4e7] bg-[#f5f5f5] py-3">
              {menu.map((c) => {
                const isActive = c.url === active.url;
                return (
                  <li key={c.url}>
                    <a
                      href={c.url}
                      onMouseEnter={() => setActiveKey(c.url)}
                      onFocus={() => setActiveKey(c.url)}
                      className={`flex items-center justify-between border-l-4 px-6 py-2.5 text-[15px] font-bold transition-colors ${
                        isActive
                          ? 'border-[#c5a043] bg-white text-[#c5a043]'
                          : 'border-transparent text-[#18181b] hover:text-[#c5a043]'
                      }`}
                    >
                      {c.label}
                      <span aria-hidden="true">›</span>
                    </a>
                  </li>
                );
              })}
            </ul>

            <Pane category={active} />
          </div>

          <div className="border-t border-[#e4e4e7]">
            <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-4 px-8 py-3 text-sm">
              <a href="/practice/" className="font-bold text-[#18181b] underline hover:text-[#c5a043]">
                View all 40 practice area pages
              </a>
              <span className="text-[#71717a]">
                Free consultation:{' '}
                <a href="tel:+12125225766" className="font-bold text-[#18181b] underline hover:text-[#c5a043]">
                  (212) JACKSON
                </a>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function PracticeAreasAccordion({ onNavigate }) {
  const [expanded, setExpanded] = useState(null);

  return (
    <div>
      <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#3a3a3a]">Practice Areas</p>
      <ul className="space-y-1">
        {menu.map((c) => {
          const isOpen = expanded === c.url;
          const children = [...c.types_of_cases, ...c.related_pages];
          return (
            <li key={c.url} className="border-b border-[#e4e4e7] last:border-b-0">
              <div className="flex items-center justify-between">
                <a
                  href={c.url}
                  onClick={onNavigate}
                  className="py-2 text-sm font-semibold text-[#18181b] hover:text-[#c5a043]"
                >
                  {c.label}
                </a>
                {children.length > 0 && (
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-label={`${isOpen ? 'Hide' : 'Show'} ${c.label} pages`}
                    onClick={() => setExpanded(isOpen ? null : c.url)}
                    className="p-2 text-[#71717a] hover:text-[#c5a043]"
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </button>
                )}
              </div>

              {isOpen && (
                <ul className="pb-2 pl-3">
                  {c.types_of_cases.map((i) => (
                    <li key={i.url}>
                      <a
                        href={i.url}
                        onClick={onNavigate}
                        className="block py-1.5 text-sm text-[#3a3a3a] hover:text-[#c5a043]"
                      >
                        {i.label}
                      </a>
                    </li>
                  ))}
                  {c.related_pages.length > 0 && (
                    <>
                      <li className="pt-2 text-[10px] font-black uppercase tracking-widest text-[#71717a]">
                        Related pages
                      </li>
                      {c.related_pages.map((i) => (
                        <li key={i.url}>
                          <a
                            href={i.url}
                            onClick={onNavigate}
                            className="block py-1.5 text-sm text-[#3a3a3a] hover:text-[#c5a043]"
                          >
                            {i.label}
                          </a>
                        </li>
                      ))}
                    </>
                  )}
                </ul>
              )}
            </li>
          );
        })}
        <li>
          <a
            href="/practice/"
            onClick={onNavigate}
            className="block py-2 text-sm font-bold uppercase tracking-widest text-[#c5a043]"
          >
            View all practice areas
          </a>
        </li>
      </ul>
    </div>
  );
}
