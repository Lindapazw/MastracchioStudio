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
        <header className={`${header} 'bg-white shadow-md py-2' : 'bg-transparent shadow-none py-4' `}> Header </header>
    )
}

export default Header