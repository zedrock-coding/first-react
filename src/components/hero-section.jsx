import '../App.css'

function HeroSection() {
    const heroTitle = "First React App";
    const heroDescription = "This is my first React app. I am learning React and my first goal is include YouTube API in a resizable window which is movable as well.";

    const heroTitleStyle = "text-xl font-bold mb-4 text-center text-gray-500 dark:text-gray-100 md:text-2xl lg:text-3xl";
    const heroDescriptionStyle = "text-center text-gray-600 dark:text-gray-300 md:text-lg lg:text-xl";

    const heroSection = (<section className='flex flex-no-wrap align-item-center justify-content-center'>
        <div className='max-w-4xl px-4 py-8'>
            <h1 className={heroTitleStyle}>{heroTitle}</h1>
            <p className={heroDescriptionStyle}>{heroDescription}</p>
        </div>
    </section>
    );
    return heroSection;
}

export default HeroSection;