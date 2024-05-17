import '@/app/ui/global.css';
import { TRootLayout } from './lib/definitions';
import { inter } from './ui/fonts';

export default function RootLayout({ children }: TRootLayout) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
