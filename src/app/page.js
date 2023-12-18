// components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Courses from './components/Courses';
import Testimonial from './components/Testimonial';
import Faqs from './components/Faqs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Copyright from './components/Copyright';


export default function Home() {
  return (
    <main className='max-w-[1920px] bg-white mx-auto relative overflow-hidden'>
      <Header/>
      <Hero/>
      <About/>
      <Services/>
      <Courses/>
      <Testimonial/>
      <Faqs/>
      <Contact/>
      <Footer/>
      <Copyright/>
      <div className='h-[4000px]'></div>
    </main>
  )
}
