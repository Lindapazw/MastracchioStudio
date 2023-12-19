"use client"

import {useContext, useEffect, useState} from 'react';

// next image
import Image from 'next/image';

// react scroll
import {Link} from 'react-scroll';

// components
import SearchMobile from './SearchMobile';

// media query hook
import {useMediaQuery} from 'react-responsive';

// icons
import { BiMenuAltRight, BiX } from 'react-icons/bi';


const Header = () => {
    const [header, setHeader] = useState(false);
    const [nav, setNav] = useState(false);

    const desktopMode = useMediaQuery({
        query: '(min-width: 1300px)',
    });

    useEffect(()=>{
        const handleScroll = () => {
            // header
            if(window.scrollY > 40 ) {
                setHeader(true);
            } else {
                setHeader(false);
            }
        };

        // add event listener
        window.addEventListener('scroll', handleScroll);

        // remove event listener
        return () => {
            window.removeEventListener('scroll', handleScroll )
        };
    });

    return (
        <header className={`${
            header ? 'shadow-md' : 'shadow-none'
            } bg-white py-0 fixed w-full max-w-[1920] mx-auto z-20 transition-all duration-300`}>
            <div className='xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-center xl:justify-between'>
                <div className='flex justify-between items-center px-4'>
                    {/* logo */}
                    <Link href='#home' to='home' smooth={desktopMode} spy={true} className='cursor-pointer border-none'>
                    <Image
                        src="/logo/mastracchio_logo.png"
                        width={144}
                        height={34}
                        alt="Logo de Mastracchio - Este es el logo de nuestra marca"
                        loading="lazy"
                        quality={80}
                        format="webp" 
                        />
                    </Link>
                    {/* nav open menu */}
                    <div 
                    onClick={() => setNav(!nav)}
                    className='cursor-pointer xl:hidden'>
                        {nav ? (
                            <BiX className='text-4xl'/>
                        ) : (
                            <BiMenuAltRight className='text-4xl'/>
                        )}
                    </div>
                </div>
                {/* nav */}
                <nav className={`${nav? 'max-h-max py-8 px-4 xl:py-0 xl:px-0' : 'max-h-0 xl:max-h-max'} flex flex-col w-full bg-white gap-y-6 overflow-hidden font-bold xl:font-bold xl:flex-row xl:w-max xl:gap-x-8 xl:bg-transparent xl:pb-0 transition-all duration-150 text-center xl:text-left uppercase text-sm xl:text-[15px] xl:normal-case`}>
                    <Link href='#home' className='cursor-pointer' to='home' activeClass='active' smooth={desktopMode} spy={true}>Inicio</Link>
                    <Link href='#about' className='cursor-pointer' to='about' activeClass='active' smooth={desktopMode} spy={true}>Mastracchio</Link>
                    <Link href='#services' className='cursor-pointer' to='services' activeClass='active' smooth={desktopMode} spy={true}>Servicios</Link>
                    <Link href='#courses' className='cursor-pointer' to='courses' activeClass='active' smooth={desktopMode} spy={true}>Cursos</Link>
                    <Link href='#testimonial' className='cursor-pointer' to='testimonial' activeClass='active' smooth={desktopMode} spy={true}>Referencias</Link>
                    <Link href='#faqs' className='cursor-pointer' to='faqs' activeClass='active' smooth={desktopMode} spy={true}>Preguntas</Link>
                    <Link href='#contact' className='cursor-pointer' to='contact' activeClass='active' smooth={desktopMode} spy={true}>Contacto</Link>
                    <Link href='#contact' className='xl:hidden btn btn-primary btn-sm max-w-[164px] mx-auto' to='contact' activeClass='active' smooth={desktopMode} spy={true}> Contactanos </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header