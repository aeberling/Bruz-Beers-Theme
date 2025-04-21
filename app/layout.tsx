import './globals.css'
import type { Metadata } from 'next'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

export const metadata: Metadata = {
  title: 'Bruz Beers - Belgian-Inspired Craft Beer',
  description: 'Bruz Beers is an award-winning brewery specializing in Belgian-style craft beer in Denver, Colorado.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/images/bruz-logo.png" />
        <link 
          href="https://fonts.googleapis.com/css?family=Catamaran:400,500,600,700,800%7CGrand+Hotel" 
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
} 