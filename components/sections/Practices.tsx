'use client';
import { useTranslations } from 'next-intl';
import { useReveal } from '@/lib/useReveal';

export default function Practices() {
  const t = useTranslations('practices');
  const { ref, visible } = useReveal();
  const items = t.raw('items') as Array<{ num: string; icon: string; title: string; desc: string }>;

  return (
    <section id="practices" className="bg-white py-[110px] px-[5%]">
      {/* Header */}
      <div className="flex justify-between items-end mb-16 pb-8 border-b border-gray-200">
        <div>
          <div className="flex items-center gap-3 text-[10px] tracking-[0.2em] text-gold uppercase mb-4">
            <span className="w-6 h-px bg-gold" />{t('eyebrow')}
          </div>
          <h2 className="font-serif text-section font-bold text-navy leading-tight">
            {t('title').split(',')[0]},<br />{t('title').split(',')[1]}
          </h2>
        </div>
        <p className="text-[14px] leading-relaxed text-gray-600 max-w-[360px] text-start hidden md:block">
          {t('desc')}
        </p>
      </div>

      {/* Grid */}
      <div
        ref={ref}
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        {items.map((item) => (
          <div
            key={item.num}
            className="group bg-white p-10 relative overflow-hidden hover:bg-off-white transition-colors cursor-default"
          >
            <div className="absolute bottom-0 start-0 end-0 h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-end" />
            <div className="text-[10px] tracking-[0.15em] text-gray-400 mb-5">{item.num}</div>
            <div className="w-11 h-11 border border-gray-200 flex items-center justify-center text-xl mb-5 group-hover:border-gold-pale transition-colors">
              {item.icon}
            </div>
            <h3 className="font-serif text-[20px] font-bold text-navy mb-3 group-hover:text-gold transition-colors">
              {item.title}
            </h3>
            <p className="text-[13px] leading-relaxed text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
