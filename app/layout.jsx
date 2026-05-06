import './globals.css'
import { LanguageProvider } from './LanguageContext'

export const metadata = {
  metadataBase: new URL('https://isaacyap.ai'),
  title: 'Isaac Yap | Web Developer Singapore — AI Website Builder & Software Developer',
  description: 'Isaac Yap — Web developer in Singapore specialising in AI-powered websites, mobile apps, and booking systems for SMEs. MMA referee & AI enthusiast. Get a custom website built with cutting-edge AI technology.',
  keywords: 'web developer singapore, ai website builder singapore, isaac yap, software developer singapore, website builder singapore, mobile app developer singapore, AI web development',
  authors: [{ name: 'Isaac Yap' }],
  alternates: { canonical: 'https://isaacyap.ai' },
  robots: 'index, follow',
  icons: {
    icon: [{ url: '/favicon-32.png', sizes: '32x32', type: 'image/png' }],
    apple: [{ url: '/logo192.png', sizes: '192x192' }],
  },
  openGraph: {
    type: 'website',
    url: 'https://isaacyap.ai',
    title: 'Isaac Yap — AI-Powered Web Development | Singapore',
    description: 'AI-powered websites for Singapore SMEs. Chatbots, SEO, automation — powered by ChatGPT. From S$1,888.',
    images: ['https://isaacyap.ai/og-image.png'],
    siteName: 'Isaac Yap',
    locale: 'en_SG',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Isaac Yap — AI-Powered Web Development | Singapore',
    description: 'AI-powered websites for Singapore SMEs. Chatbots, SEO, automation — powered by ChatGPT. From S$1,888.',
    images: ['https://isaacyap.ai/og-image.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Isaac Yap',
  url: 'https://isaacyap.ai',
  image: 'https://isaacyap.ai/og-image.png',
  jobTitle: 'Web Developer & AI Specialist',
  description: 'Web developer in Singapore specialising in AI-powered websites, mobile apps, and booking systems for small businesses.',
  address: { '@type': 'PostalAddress', addressLocality: 'Singapore', addressCountry: 'SG' },
  knowsAbout: ['Web Development', 'AI', 'Mobile Apps', 'React', 'Next.js', 'MMA Refereeing'],
  sameAs: [],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
