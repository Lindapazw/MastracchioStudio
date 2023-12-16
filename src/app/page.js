// components
import Header from './components/Header';
import Hero from './components/Hero';


export default function Home() {
  return (
    <main className='max-w-[1920px] bg-white mx-auto relative overflow-hidden'>
      <Header/>
      <Hero/>
      <div className='h-[4000px]'></div>
    </main>
  )
}
