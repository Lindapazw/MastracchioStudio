"use client"

// image
import Image from 'next/image';

// framer motion
import {motion} from 'framer-motion'

// variants
import { fadeIn } from '/variants';

const Courses = () => {
    return (
        <section className="section flex items-center" id="courses">
        <div className='container mx-auto xl:p-20 xl:mt-20'>
            <div class="grid gap-4 grid-cols-2 xl:grid-cols-4 h-screen">
                <div class="col-span-2">
                    <Image
                        src="/cursos/25.png"
                        width={500}
                        height={418}
                        alt="about image"
                        loading="lazy"
                        quality={80}
                        format="webp"
                        className="object-cover h-full w-full"
                    />
                </div>
                <div class="xl:row-span-2">
                    <Image
                        src="/cursos/15.png"
                        width={500}
                        height={418}
                        alt="about image"
                        loading="lazy"
                        quality={80}
                        format="webp" 
                        className="object-cover h-full w-full"
                    />
                </div>
                <div class="xl:row-span-2">
                    <Image
                        src="/cursos/20.png"
                        width={500}
                        height={418}
                        alt="about image"
                        loading="lazy"
                        quality={80}
                        format="webp" 
                        className="object-cover h-full w-full"
                    />
                </div>
                <div>
                    <Image
                        src="/cursos/17.png"
                        width={500}
                        height={418}
                        alt="about image"
                        loading="lazy"
                        quality={80}
                        format="webp" 
                        className="object-cover h-full w-full"
                    />
                </div>
                <div>
                    <Image
                        src="/cursos/21.png"
                        width={500}
                        height={418}
                        alt="about image"
                        loading="lazy"
                        quality={80}
                        format="webp" 
                        className="object-cover h-full w-full"
                    />
                </div>
            </div>
        </div>
        </section>
    )
}

export default Courses