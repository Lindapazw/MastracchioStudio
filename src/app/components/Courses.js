// next image
import Image from 'next/image';

const Courses = () => {
    return (
        <div className='section flex items-center justify-center' id='courses'>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                <div class="bg-gray-200 p-4 rounded">
                    <Image 
                        src={'/about/about.png'} 
                        width={504} 
                        height={554} 
                        alt='avatar de tertimoniales' 
                        className='mb-4'
                        loading="lazy"
                        quality={80}
                        format="webp" 
                    />
                </div>
                <div class="bg-gray-200 p-4 rounded">
                    <Image 
                        src={'/about/about.png'} 
                        width={504} 
                        height={554} 
                        alt='avatar de tertimoniales' 
                        className='mb-4'
                        loading="lazy"
                        quality={80}
                        format="webp" 
                    />
                </div>
            </div>
        </div>
    )
}

export default Courses