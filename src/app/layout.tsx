import type { Metadata } from 'next';
import { Sora } from 'next/font/google';
import './globals.css';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
  weight: ['400', '600', '700'],
  preload: true,
});

export const metadata: Metadata = {
  title: 'Vishnu Quantum Club | Vishnu Institute of Technology',
  description: 'Vishnu Quantum Club at Vishnu Institute of Technology — explore quantum computing, research, projects, workshops, competitions and innovation.',
  keywords: [
    'Vishnu Quantum Club',
    'Vishnu Institute of Technology',
    'Quantum Computing',
    'Qiskit',
    'Quantum Algorithms',
    'Bhimavaram',
  ],
  openGraph: {
    title: 'Vishnu Quantum Club | Vishnu Institute of Technology',
    description: 'Explore. Compute. Innovate. A student-driven quantum computing community.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sora.variable} scroll-smooth`}
    >
      <body className="bg-white text-[#071126] font-sans antialiased selection:bg-[#F1EBFF] selection:text-[#6D32D9] min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
