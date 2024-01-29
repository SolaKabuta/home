import MobileHero from '/images/mobile-image-hero-1.jpg'
// import MobileHero2 from '/images/mobile-image-hero-2.jpg'
// import MobileHero3 from '/images/mobile-image-hero-3.jpg'
import Arrow from '/images/icon-arrow.svg'
import AboutDark from '/images/image-about-dark.jpg'
import AboutLight from '/images/image-about-light.jpg'
import HeroSection from "../Header/HeroSection.jsx";




function Home(props) {
    return (
        <>
            <div className={'lg:flex '}>

                <HeroSection/>

            <div
                className={'bg-white h-max'}>

                {/* Content */}
                <div
                    className={'py-20 px-10'}>
                    <h1
                        className={'font-black pb-5 text-5xl text-nowrap'}>
                        Discover innovative <br/> ways to decorate
                    </h1>
                    <p
                        className={'text-gray-400 font-semibold leading-6 text-balance'}>
                        We provide unmatched quality, comfort, and style for property owners across the country.
                        Our experts combine form and function in bringing your vision for life.
                        Create a room in your own style with our collection and make your property a reflection of you
                        and what you love.
                    </p>
                        <a href={'/'}>
                    <div
                        className={'relative'}>
                            <p
                            className={'Shop py-12 font-bold uppercase tracking-wiiide text-2xl'}>
                            Shop now
                        </p>
                        {/* ARROW */}
                        <img
                            className={'absolute top-[11vw] left-[55vw]'}
                            src={Arrow}
                            alt={'arrow image'}/>
                    </div>
                        </a>
                </div>
                {/* Images */}
                <div className={'lg:flex lg:absolute left-0 bottom-0 bg-white h-[30%]'}>
                    <img
                        className={'w-screen'}
                        src={AboutDark}
                        alt={'/'}/>

                    {/* About */}
                    <div
                        className={'py-20 px-10'}>
                        <h1
                            className={'uppercase font-black text-lg tracking-wiide text-nowrap pb-10'}>
                            About our furniture
                        </h1>
                        <p className={'text-gray-400 font-semibold leading-6 text-balance'}>
                            Our multifunctional collection blends design and function to suit your individual taste.
                            Make each room or pick a cohesive theme that best express your interests and what inspire
                            you.
                            Find the furniture pieces from traditional to contemporary styles or anything in between.
                            Products specialist are available to help you create your dream space.
                        </p>
                    </div>
                    <img
                        className={'w-screen'}
                        src={AboutLight}
                        alt={'/'}/>
                </div>
            </div>
            </div>

        </>
    );
}

export default Home;