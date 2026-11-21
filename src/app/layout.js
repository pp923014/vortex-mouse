import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata = {
  title: 'VORTEX M1 PRO | 49g Wireless Magnesium Gaming Mouse',
  description: 'Engineered with 8000Hz HyperPolling, 32K Optical Sensor, and aerospace magnesium alloy.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased selection:bg-cyan-400 selection:text-black">
        {children}
      </body>
    </html>
  );
}