
import '../styles/all.scss'
import { Inter } from 'next/font/google'


import Header from '@/components/header/Header'
import Footer from '@/components/footer/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PREW.VN',
  description: 'PREW.VN'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body>
        <Header>

        </Header>
        <main>
          {children}
        </main>
        <Footer />


      </body>
    </html>
  )
}
