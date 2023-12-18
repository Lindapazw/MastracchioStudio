const Hero = () => {
    return (
        <section className="h-screen flex justify-center items-end" id="home">
        <div className="h-[89vh] w-full">
            <video
                autoPlay
                muted
                loop
                playsInline  
                preload="auto"
                className="w-full h-full object-cover"
                loading="lazy"
                alt="Video de alta resolución mostrando arquitectura"
            >
                <source src="/videos/chicaAlta.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
            </video>
        </div>
        </section>
    );
};

export default Hero;
