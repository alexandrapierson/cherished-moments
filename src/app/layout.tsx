import type { Metadata } from 'next'
import './globals.css'
import './globals.fonts.css'
import './globals.form.css'
import './globals.container.css'
import './globals.spacing.css'
import Navigation from './components/navigation/Navigation'
import Footer from './components/footer/Footer'

export const metadata: Metadata = {
  title: 'Cherished Moments',
  description: 'Cherished Moments Wedding Planning business in Dallas, Texas. '
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
