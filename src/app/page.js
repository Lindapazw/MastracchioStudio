// components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';


export default function Home() {
  return (
    <main className='max-w-[1920px] bg-white mx-auto relative overflow-hidden'>
      <Header/>
      <Hero/>
      <About/>
      <div className='h-[4000px]'></div>
    </main>
  )
}
