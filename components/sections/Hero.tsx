'use client';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section id="hero" className="pt-[68px] min-h-screen bg-white flex items-center px-[5%] relative overflow-hidden">
      {/* Background panel */}
      <div className="absolute top-0 left-0 bottom-0 w-[48%] bg-off-white border-l border-gray-200">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: 'radial-gradient(circle, #E5E2DA 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-[580px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 text-[10px] tracking-[0.22em] text-gold uppercase mb-7">
            <span className="w-8 h-px bg-gold" />
            {t('eyebrow')}
          </div>

          {/* Title */}
          <h1 className="font-serif text-hero font-bold text-navy leading-none mb-2">
            {t('title')}<br />
            <span className="text-gold-light">{t('titleAccent')}</span>
          </h1>
          <p className="font-serif text-[clamp(16px,2vw,22px)] font-light text-gray-600 mb-6">
            {t('subtitle')}
          </p>

          {/* Divider */}
          <div className="w-12 h-px bg-gold mb-6" />

          {/* Desc */}
          <p className="text-[15px] leading-relaxed text-gray-600 max-w-[480px] mb-10">
            {t('desc')}
          </p>

          {/* CTA */}
          <div className="flex gap-3 flex-wrap">
            <a
              href="#contact"
              className="bg-navy text-white text-[13px] tracking-[0.06em] px-8 py-3 hover:bg-gold transition-colors"
            >
              {t('ctaPrimary')}
            </a>
            <a
              href="#practices"
              className="text-navy text-[13px] tracking-[0.06em] px-8 py-3 border border-gray-200 hover:border-navy transition-colors"
            >
              {t('ctaSecondary')}
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-0 mt-14 border-t border-gray-200 pt-9">
            {[
              { num: t('stat1Num'), label: t('stat1Label') },
              { num: t('stat2Num'), label: t('stat2Label') },
              { num: t('stat3Num'), label: t('stat3Label') },
            ].map((s, i) => (
              <div
                key={i}
                className={`flex-1 ${i > 0 ? 'border-s border-gray-200 ps-8' : 'pe-8'}`}
              >
                <div className="font-serif text-[32px] font-bold text-navy leading-none">
                  {s.num}
                </div>
                <div className="text-[11px] text-gray-400 mt-1 tracking-[0.08em]">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
