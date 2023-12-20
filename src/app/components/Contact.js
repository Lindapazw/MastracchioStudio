"use client"

// images
import Image from 'next/image';

// icons
import {FaPhone, FaEnvelope} from 'react-icons/fa6';

// motion
import {motion} from 'framer-motion';

// variants
import {fadeIn} from '/variants';

// link / react scroll
import {Link}  from 'react-scroll';

const Contact = () => {
    return (
        <footer className='pt-20 bg-white z-20' id='contact'>
            <div className='container mx-auto mb-24'>
                {/* grid */}
                <motion.div 
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.6}}
                className='flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14'
                >
                    <div className='flex flex-col flex-1 gap-y-8'>
                        {/* logo */}
                        <Link to='home' smooth={true} spy={true} className='cursor-pointer'>
                            <Image src={'/logo/mastracchio_logo.png'} width={200} height={200} alt='logo de la marca'/>
                        </Link>
                        {/* text */}
                        <div className='text-secondary'>"Transformo sueños en espacios palpables para crear experiencias arquitectónicas únicas." </div>
                        {/* phone & email */}
                        <div className='flex flex-col gap-y-4 font-semibold'>
                            {/* phone */}
                            <div className='flex items-center gap-x-[10px]'>
                                <FaPhone/>
                                <div className='font-medium'>+54 (387) 5413666</div>
                            </div>
                            {/* email */}
                            <div className='flex items-center gap-x-[10px]'>
                                <FaEnvelope/>
                                <div className='font-medium'>studiomastracchio@gmail.com</div>
                            </div>
                        </div>
                    </div>
                    {/* links */}
                    <div>
                        <div>
                            <h3>Company</h3>
                            <ul>
                                <li>New York</li>
                                <li>New York</li>
                                <li>New York</li>
                                <li>New York</li>
                                <li>New York</li>
                            </ul>
                        </div>
                    </div>
                    <div>1</div>
                    <div>1</div>
                </motion.div>
            </div>
        </footer>
    )
}

export default Contact