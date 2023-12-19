"use client"

// import swiper react component
import {swiper, swiperSlide} from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import {Pagination} from 'swiper/modules';

// icons
import {FaQuoteLeft} from 'react-icons/fa';

// framer motion
import {motion} from 'framer-motion';

// variants
import { fadeIn } from '/variants';

// next image
import Image from 'next/image';

// data
const tetimonialData = [
    {
        message: 'They truly exceeded my expectations and made my car rental experience a delight',
        avatar: '/public/logo/mastracchio_logo.png',
        name: 'Linda Paz',
        job: 'Software developer',
    },
    {
        message: 'They truly exceeded my expectations and made my car rental experience a delight',
        avatar: '/public/logo/mastracchio_logo.png',
        name: 'Linda Paz',
        job: 'Software developer',
    },
]

const TestimonialSlider = () => {
    return (
        <div>TestimonialSlider</div>
    )
}

export default TestimonialSlider