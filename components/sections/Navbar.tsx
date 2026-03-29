'use client';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();

  // Switch locale: replace /he/ with /en/ or vice versa
  const otherLocale = locale === 'he' ? 'en' : 'he';
  const switchedPath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  const links = [
    { href: '#practices', label: t('practices') },
    { href: '#about',     label: t('about') },
    { href: '#team',      label: t('team') },
    { href: '#precedents',label: t('precedents') },
    { href: '#contact',   label: t('contact') },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 h-[68px] flex items-center justify-between px-[5%]">
      {/* Logo */}
      <div className="flex items-center gap-3 font-serif text-[19px] font-medium text-navy">
        <div className="w-[30px] h-[30px] border border-gold flex items-center justify-center text-[13px] text-gold">
          {locale === 'he' ? 'א' : 'E'}
        </div>
        {locale === 'he' ? 'ארז ושות׳ | עורכי דין' : 'Erez & Partners | Law'}
      </div>

      {/* Links */}
      <div className="hidden md:flex gap-8">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-[13px] text-gray-600 hover:text-navy transition-colors tracking-wide"
          >
            {l.label}
          </a>
        ))}
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-3">
        <Link
          href={switchedPath}
          className="text-[11px] tracking-widest text-gray-400 border border-gray-200 px-3 py-1 hover:border-navy hover:text-navy transition-all"
        >
          {t('lang')}
        </Link>
        <a
          href="#contact"
          className="bg-navy text-white text-[12px] tracking-[0.08em] px-5 py-2 hover:bg-gold transition-colors"
        >
          {t('cta')}
        </a>
      </div>
    </nav>
  );
}
