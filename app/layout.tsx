import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ReactQueryProvider from './components/providers/ReactQueryProvider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NextJS Weather App',
  description: 'Fun NextJS Weather App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  )
}
