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
            <div className='container mx-auto xl:px-60 xxl:px-72'>
                <div class="grid gap-4 grid-cols-2 xl:grid-cols-4 xxl:px-2">
                    <div class="col-span-2 hover14 overflow-hidden">
                        <figure>                
                            <Image
                                src="/cursos/25.png"
                                width={400}
                                height={318}
                                alt="about image"
                                loading="lazy"
                                quality={95}
                                format="webp"
                                className="object-cover h-full w-full"
                            />
                        </figure>
                    </div>
                    <div class="xl:col-span-2 hover14 overflow-hidden">
                        <figure className='h-full'>
                            <Image
                                src="/cursos/15.png"
                                width={400}
                                height={318}
                                alt="about image"
                                loading="lazy"
                                quality={95}
                                format="webp" 
                                className="object-cover h-full w-full"
                            />
                        </figure>
                    </div>
                    <div class=" hover14 overflow-hidden">
                        <figure className='h-full'>
                            <Image
                                src="/cursos/20.png"
                                width={400}
                                height={318}
                                alt="about image"
                                loading="lazy"
                                quality={95}
                                format="webp" 
                                className="object-cover h-full w-full"
                            />
                        </figure>
                    </div>
                    <div className='hover14 overflow-hidden'>
                        <figure>
                            <Image
                                src="/cursos/17.png"
                                width={400}
                                height={318}
                                alt="about image"
                                loading="lazy"
                                quality={95}
                                format="webp" 
                                className="object-cover h-full w-full"
                            />
                        </figure>
                    </div>
                    <div className='hover14 overflow-hidden'>
                        <figure>
                            <Image
                                src="/cursos/21.png"
                                width={400}
                                height={318}
                                alt="about image"
                                loading="lazy"
                                quality={95}
                                format="webp" 
                                className="object-cover h-full w-full"
                            />
                        </figure>
                    </div>
                    <div className='hidden xl:block hover14 overflow-hidden'>
                        <figure>
                            <Image
                                src="/cursos/18.png"
                                width={400}
                                height={318}
                                alt="about image"
                                loading="lazy"
                                quality={95}
                                format="webp" 
                                className="object-cover h-full w-full"
                            />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Courses