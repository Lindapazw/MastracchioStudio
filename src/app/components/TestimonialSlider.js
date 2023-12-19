"use client"

// import swiper react component
import {Swiper, SwiperSlide} from 'swiper/react';

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
        message: 'Realmente superó mis expectativas y transformó mi experiencia en el diseño de interiores.',
        avatar: '/logo/logoMAnegro.png',
        name: 'María González',
        job: 'Diseñadora de Interiores',
    },
    {
        message: 'Me inscribí en su curso de arquitectura, y fue revelador. Su estilo de enseñanza es atractivo e informativo.',
        avatar: '/logo/logoMAnegro.png',
        name: 'Martín López',
        job: 'Entusiasta de la Arquitectura',
    },
    {
        message: 'Trabajar con ella en mi proyecto de renovación fue un placer. Tiene un ojo agudo para el detalle y la creatividad.',
        avatar: '/logo/logoMAnegro.png',
        name: 'Ana Rodríguez',
        job: 'Propietaria de Casa',
    },
    {
        message: 'Asistir a su taller de arquitectura fue un cambio de juego para mí. Obtuvé conocimientos valiosos y prácticos.',
        avatar: '/logo/logoMAnegro.png',
        name: 'Juan Pérez',
        job: 'Aspirante a Arquitecto',
    },
]

const TestimonialSlider = () => {
    return (
        <motion.div
        variants={fadeIn('up', 0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.6}}
        >
            <Swiper pagination={{
                clickable: true,
                dynamicBullets: true,
            }}
                modules={[Pagination]}
                className='h-[450px] xl:h-[400px]'
            >
                {tetimonialData.map((person, index) => {
                    const {message, avatar, name, job} = person
                    return (
                    <SwiperSlide key={index}>
                        <div className='flex flex-col justify-center items-center text-center'>
                            <FaQuoteLeft className='text-6xl text-primary mb-6'/>
                            <div className='text-2xl xl:text-3xl max-w-[874px] mb-12 font-medium'>{message}</div>
                                    <Image 
                                        src={avatar} 
                                        width={104} 
                                        height={154} 
                                        alt='avatar de tertimoniales' 
                                        className='mb-4'
                                        loading="lazy"
                                        quality={80}
                                        format="webp" 
                                    />
                            <div className='text-lg font-medium'>{name}</div>
                            <div className='text-secondary'>{job}</div>
                        </div>
                    </SwiperSlide>
                    )
                })}
            </Swiper>
        </motion.div>
    )
}

export default TestimonialSlider