import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import MainLayout from './ui/layout/main-layout';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
