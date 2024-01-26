import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: "Next app Homepage",
    template: "%s | Next app"
  },
  description: 'Full stack next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {/* <h1>This is main layout</h1> */}
      <div className="container">
      <Navbar/>
      {children}
      <Footer/>
      </div>
      </body>
    </html>
  )
}
