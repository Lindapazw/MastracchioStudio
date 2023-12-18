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
            <div className='container mx-auto'>
                <div className='flex flex-col xl:flex-row xl:justify-between'>
                    {/* image */}
                    <div>
                        <Image src={'/about/3.png'} width={600} height={448} alt='about image' loading="lazy" quality={80}/>
                    </div>
                    {/* text  */}
                    <div>text </div>
                </div>
            </div>
        </section>
    )
}

export default About