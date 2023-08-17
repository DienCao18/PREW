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
      <body>    
        <Header  />
          <main>
            {children}
          </main>
        <Footer />
      </body>
    </html>
  )
}
