import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'OpenGig - Streamline the Gig Economy',
  description: 'Experience the unified AI ecosystem for the gig economy. Stop searching. Start building. Automate your hiring workflow with smart allocation, automated distribution, and all-in-one platform management.',
  keywords: ['gig economy', 'freelance platform', 'hiring automation', 'workflow management', 'project lifecycle', 'smart allocation'],
  authors: [{ name: 'OpenGig Inc.' }],
  creator: 'OpenGig Inc.',
  publisher: 'OpenGig Inc.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://opengig.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://opengig.com',
    title: 'OpenGig - Streamline the Gig Economy',
    description: 'Experience the unified AI ecosystem for the gig economy. Stop searching. Start building.',
    siteName: 'OpenGig',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'OpenGig - Streamline the Gig Economy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OpenGig - Streamline the Gig Economy',
    description: 'Experience the unified AI ecosystem for the gig economy. Stop searching. Start building.',
    images: ['/og-image.png'],
    creator: '@opengig',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

