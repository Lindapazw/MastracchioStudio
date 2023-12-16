import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mastracchio Studio',
  title: 'MastracchioStudio - Servicios de Arquitectura y Consultoría',
  description: 'MastracchioStudio ofrece servicios de arquitectura y consultoría para transformar tus ideas en espacios funcionales y estéticos. Descubre soluciones creativas para tus proyectos.',
  keywords: 'arquitectura, consultoría, diseño de interiores, proyectos arquitectónicos, planificación urbana',
  author: 'Linda Paz',
  image: '/public/logo/mastracchio_logo.jpg',
  url: 'https://www.MastracchioStudio.com',
  canonical: 'https://www.MastracchioStudio.com', 
  ogTitle: 'Mastracchio Studio - Servicios de Arquitectura y Consultoría',
  ogDescription: 'MastracchioStudio ofrece servicios de arquitectura y consultoría para transformar tus ideas en espacios funcionales y estéticos. Descubre soluciones creativas para tus proyectos.',
  ogType: 'website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
