import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'PDF to HTML Converter',
  description: 'Convert PDFs to clean, editable HTML with CSS',
};

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <header className="bg-blue-600 text-white p-4 shadow-lg">
          <h1 className="text-2xl font-bold">PDF → HTML Converter</h1>
          <p className="text-sm text-blue-100">Convert PDFs to clean, editable HTML + CSS</p>
        </header>
        <main className="p-4">
          {children}
        </main>
      </body>
    </html>
  );
}