"use client"

// image
import Image from 'next/image';

// framer motion
import {motion} from 'framer-motion'

// variants
import { fadeIn } from '/variants';

const About = () => {
return (
    <section className="section flex items-center" id="about">
        <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row xl:justify-between">
            {/* Image */}
            <motion.div 
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.6}}
            className="p-2 xl:p-0">
                <Image
                    src="/about/about.webp"
                    width={500}
                    height={418}
                    alt="about image"
                    loading="lazy"
                    quality={80}
                    format="webp" 
                />
            </motion.div>
            {/* Text & Stats */}
            <div className="flex-1 flex items-center xl:justify-center">
                <div className="xl:max-w-[517px]">
                <h2 className="h2 mt-4 xl:mt-0">Un poquito sobre mí</h2>
                <p>
                    Mastracchio es el apellido italiano de mi abuela, y esta marca busca capturar todo el arte con el que ella enriqueció mi vida desde mi infancia. <br /> <br />
                    Mi abuela me legó un patrimonio artístico que dejó una profunda huella en mi creatividad. Esto me llevó a graduarme como arquitecta y a fundar mi propio emprendimiento, ofreciendo una amplia gama de productos, desde objetos de decoración y blanquería hasta indumentaria y accesorios, entre muchas otras cosas. <br /> <br />
                    Este es mi homenaje a ella, María Teresa Mastracchio. ¡Gracias por tanto!
                </p>
                </div>
            </div>
            </div>
        </div>
    </section>
    );
};

export default About;