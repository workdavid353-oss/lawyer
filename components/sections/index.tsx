'use client';
import { useTranslations } from 'next-intl';
import { useReveal } from '@/lib/useReveal';

/* ─── ABOUT ─────────────────────────────────────────────── */
export function About() {
  const t = useTranslations('about');
  const { ref, visible } = useReveal();
  const values = t.raw('values') as Array<{ num: string; title: string; text: string }>;

  return (
    <section id="about" className="bg-off-white py-[110px] px-[5%]">
      <div
        ref={ref}
        className={`grid grid-cols-1 md:grid-cols-2 gap-20 items-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        {/* Visual */}
        <div className="relative h-[440px] bg-gray-100 border border-gray-200">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(var(--gray-200) 1px,transparent 1px),linear-gradient(90deg,var(--gray-200) 1px,transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="font-serif text-[72px] font-black text-gray-200 leading-none select-none">
              2004
            </div>
          </div>
          <div className="absolute top-7 end-7 bg-white border border-gray-200 px-5 py-4 text-center">
            <span className="font-serif text-[36px] font-black text-navy block leading-none">20</span>
            <div className="text-[10px] tracking-widest text-gray-400 mt-1">שנות ניסיון</div>
          </div>
          <div className="absolute -end-4 -bottom-4 w-[calc(100%-32px)] h-[calc(100%-32px)] border border-gold-pale pointer-events-none" />
        </div>

        {/* Text */}
        <div>
          <div className="flex items-center gap-3 text-[10px] tracking-[0.2em] text-gold uppercase mb-4">
            <span className="w-6 h-px bg-gold" />{t('eyebrow')}
          </div>
          <h2 className="font-serif text-section font-bold text-navy leading-tight mb-4">
            {t('title').split(',')[0]},<br />{t('title').split(',')[1]}
          </h2>
          <p className="text-[15px] leading-relaxed text-gray-600 mb-0">{t('desc')}</p>
          <div className="flex flex-col mt-8">
            {values.map((v, i) => (
              <div
                key={v.num}
                className={`flex gap-5 py-5 border-b border-gray-200 ${i === 0 ? 'border-t' : ''}`}
              >
                <div className="text-[10px] text-gold tracking-widest min-w-[28px] pt-1">{v.num}</div>
                <div>
                  <div className="text-[15px] font-medium text-navy mb-1">{v.title}</div>
                  <p className="text-[13px] leading-relaxed text-gray-600">{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── TEAM ──────────────────────────────────────────────── */
export function Team() {
  const t = useTranslations('team');
  const { ref, visible } = useReveal();
  const members = t.raw('members') as Array<{ initials: string; name: string; role: string; bio: string }>;

  return (
    <section id="team" className="bg-white py-[110px] px-[5%]">
      <div className="flex justify-between items-end mb-16 pb-8 border-b border-gray-200">
        <div>
          <div className="flex items-center gap-3 text-[10px] tracking-[0.2em] text-gold uppercase mb-4">
            <span className="w-6 h-px bg-gold" />{t('eyebrow')}
          </div>
          <h2 className="font-serif text-section font-bold text-navy leading-tight">{t('title')}</h2>
        </div>
        <p className="text-[14px] leading-relaxed text-gray-600 max-w-[360px] hidden md:block">{t('desc')}</p>
      </div>

      <div
        ref={ref}
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        {members.map((m) => (
          <div
            key={m.initials}
            className="group border border-gray-200 p-8 hover:border-gold-pale hover:bg-gold-bg transition-all cursor-default"
          >
            <div className="w-16 h-16 bg-off-white border border-gray-200 flex items-center justify-center font-serif text-[22px] font-bold text-navy mb-5 group-hover:bg-gold-pale group-hover:border-gold-pale transition-all">
              {m.initials}
            </div>
            <div className="font-serif text-[19px] font-bold text-navy mb-1">{m.name}</div>
            <div className="text-[11px] tracking-widest text-gold mb-3">{m.role}</div>
            <p className="text-[13px] leading-relaxed text-gray-600">{m.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── PRECEDENTS ────────────────────────────────────────── */
export function Precedents() {
  const t = useTranslations('precedents');
  const { ref, visible } = useReveal();
  const items = t.raw('items') as Array<{ year: string; title: string; desc: string; tag: string }>;

  return (
    <section id="precedents" className="bg-off-white py-[110px] px-[5%]">
      <div className="flex justify-between items-end mb-16 pb-8 border-b border-gray-200">
        <div>
          <div className="flex items-center gap-3 text-[10px] tracking-[0.2em] text-gold uppercase mb-4">
            <span className="w-6 h-px bg-gold" />{t('eyebrow')}
          </div>
          <h2 className="font-serif text-section font-bold text-navy leading-tight">
            {t('title').split('\n')[0]}<br />{t('title').split('\n')[1]}
          </h2>
        </div>
        <p className="text-[14px] leading-relaxed text-gray-600 max-w-[360px] hidden md:block">{t('desc')}</p>
      </div>

      <div
        ref={ref}
        className={`flex flex-col transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="group grid grid-cols-[88px_1fr_auto] items-center gap-7 py-6 border-b border-gray-200 first:border-t hover:bg-white px-5 -mx-5 transition-colors cursor-default"
          >
            <div className="text-[11px] tracking-widest text-gray-400">{item.year}</div>
            <div>
              <div className="font-serif text-[17px] font-medium text-navy mb-1 group-hover:text-gold transition-colors">
                {item.title}
              </div>
              <p className="text-[12px] text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
            <div className="hidden md:block text-[10px] tracking-widest text-gold border border-gold-pale bg-gold-bg px-4 py-1 whitespace-nowrap">
              {item.tag}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS ──────────────────────────────────────── */
export function Testimonials() {
  const t = useTranslations('testimonials');
  const { ref, visible } = useReveal();
  const items = t.raw('items') as Array<{ text: string; name: string; role: string; initials: string }>;

  return (
    <section id="testimonials" className="bg-white py-[110px] px-[5%]">
      <div className="mb-16 pb-8 border-b border-gray-200">
        <div className="flex items-center gap-3 text-[10px] tracking-[0.2em] text-gold uppercase mb-4">
          <span className="w-6 h-px bg-gold" />{t('eyebrow')}
        </div>
        <h2 className="font-serif text-section font-bold text-navy leading-tight">{t('title')}</h2>
      </div>

      <div
        ref={ref}
        className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="border border-gray-200 p-9 hover:border-gold-pale transition-colors"
          >
            <span className="font-serif text-[52px] text-gold-pale leading-none block mb-4">"</span>
            <p className="text-[14px] leading-relaxed text-gray-600 mb-7">{item.text}</p>
            <div className="border-t border-gray-100 pt-5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold-pale flex items-center justify-center text-[13px] font-semibold text-gold">
                {item.initials}
              </div>
              <div>
                <div className="text-[13px] font-medium text-navy">{item.name}</div>
                <div className="text-[11px] text-gray-400 mt-0.5">{item.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── CONTACT ───────────────────────────────────────────── */
export function Contact() {
  const t = useTranslations('contact');
  const tf = useTranslations('contact.form');
  const ti = useTranslations('contact.info');
  const { ref, visible } = useReveal();
  const subjects = tf.raw('subjects') as string[];

  const infoItems = [
    { label: ti('address.label'), value: ti('address.value'), icon: '📍' },
    { label: ti('phone.label'),   value: ti('phone.value'),   icon: '📞' },
    { label: ti('whatsapp.label'),value: ti('whatsapp.value'),icon: '💬' },
    { label: ti('email.label'),   value: ti('email.value'),   icon: '✉' },
    { label: ti('hours.label'),   value: ti('hours.value'),   icon: '🕐' },
  ];

  return (
    <section id="contact" className="bg-off-white py-[110px] px-[5%]">
      <div
        ref={ref}
        className={`grid grid-cols-1 md:grid-cols-2 gap-20 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        {/* Form */}
        <div>
          <div className="flex items-center gap-3 text-[10px] tracking-[0.2em] text-gold uppercase mb-4">
            <span className="w-6 h-px bg-gold" />{t('eyebrow')}
          </div>
          <h2 className="font-serif text-section font-bold text-navy leading-tight mb-0">{t('title')}</h2>

          <div className="flex flex-col mt-10">
            {/* Name */}
            <div className="flex flex-col border-b border-gray-200">
              <label className="text-[10px] tracking-widest text-gray-400 pt-5 mb-2">{tf('name')}</label>
              <input type="text" placeholder={tf('namePlaceholder')} className="bg-transparent border-none outline-none text-[14px] text-navy pb-4 placeholder:text-gray-400" />
            </div>
            {/* Phone + Email row */}
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col border-b border-gray-200">
                <label className="text-[10px] tracking-widest text-gray-400 pt-5 mb-2">{tf('phone')}</label>
                <input type="tel" placeholder={tf('phonePlaceholder')} className="bg-transparent border-none outline-none text-[14px] text-navy pb-4 placeholder:text-gray-400" />
              </div>
              <div className="flex flex-col border-b border-gray-200">
                <label className="text-[10px] tracking-widest text-gray-400 pt-5 mb-2">{tf('email')}</label>
                <input type="email" placeholder={tf('emailPlaceholder')} className="bg-transparent border-none outline-none text-[14px] text-navy pb-4 placeholder:text-gray-400" />
              </div>
            </div>
            {/* Subject */}
            <div className="flex flex-col border-b border-gray-200">
              <label className="text-[10px] tracking-widest text-gray-400 pt-5 mb-2">{tf('subject')}</label>
              <select className="bg-transparent border-none outline-none text-[14px] text-gray-400 pb-4 cursor-pointer">
                <option value="" disabled>{tf('subjectDefault')}</option>
                {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            {/* Message */}
            <div className="flex flex-col border-b border-gray-200">
              <label className="text-[10px] tracking-widest text-gray-400 pt-5 mb-2">{tf('message')}</label>
              <textarea placeholder={tf('messagePlaceholder')} rows={3} className="bg-transparent border-none outline-none text-[14px] text-navy pb-4 placeholder:text-gray-400 resize-none" />
            </div>
            <button className="self-start mt-8 bg-navy text-white text-[12px] tracking-widest px-8 py-3 hover:bg-gold transition-colors">
              {tf('submit')}
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="pt-0 md:pt-12">
          <div className="flex items-center gap-3 text-[10px] tracking-[0.2em] text-gold uppercase mb-8">
            <span className="w-6 h-px bg-gold" />{ti('eyebrow')}
          </div>
          <div className="flex flex-col">
            {infoItems.map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-[40px_1fr] gap-4 py-5 border-b border-gray-200 first:border-t items-start"
              >
                <div className="w-9 h-9 border border-gray-200 flex items-center justify-center text-sm">
                  {item.icon}
                </div>
                <div>
                  <div className="text-[10px] tracking-widest text-gold mb-1">{item.label}</div>
                  <div className="text-[14px] text-navy leading-relaxed whitespace-pre-line">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ────────────────────────────────────────────── */
export function Footer() {
  const t = useTranslations('footer');
  return (
    <footer className="bg-navy px-[5%] py-9 flex justify-between items-center">
      <div className="font-serif text-[15px] text-white/40 font-light">{t('copy')}</div>
      <div className="flex gap-6">
        {[t('terms'), t('privacy'), t('accessibility')].map((label) => (
          <a key={label} href="#" className="text-[11px] tracking-wide text-white/30 hover:text-gold transition-colors">
            {label}
          </a>
        ))}
      </div>
    </footer>
  );
}
