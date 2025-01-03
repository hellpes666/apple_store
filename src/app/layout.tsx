import './globals.css';
import type { Metadata } from 'next';
import { Montserrat_Alternates, Raleway } from 'next/font/google';

const montserratAlt = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat-alt',
});

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-raleway',
});

export const metadata: Metadata = {
  title: 'Apple Store - Официальный магазин Apple',
  description:
    'Добро пожаловать в Apple Store. Здесь вы найдете последние продукты Apple, новости и специальные предложения. Powered by Hellpes',
  keywords: 'Apple, магазин, продукты Apple, новости, специальные предложения',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserratAlt.variable} ${raleway.variable} ${montserratAlt.className}`}
      >
        {children}
      </body>
    </html>
  );
}
