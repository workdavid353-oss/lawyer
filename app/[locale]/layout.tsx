import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import '../globals.css';

export function generateStaticParams() {
  return [{ locale: 'he' }, { locale: 'en' }];
}

export const metadata: Metadata = {
  title: 'ארז ושות׳ — עורכי דין | Erez & Partners Law Firm',
  description: 'משרד עורכי דין מוביל בתל אביב | Leading law firm in Tel Aviv',
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();
  const dir = locale === 'he' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
