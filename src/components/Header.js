import headerImage from '../Images/header-img.png';

const Header = () => {
    return (
        <section>
            <div className="sm:container mx-auto lg:max-w-7xl px-3 sm:flex items-center justify-between py-10">
                <div className="max-w-[600px]">
                    <h1 className="font-serif font-bold text-3xl leading-[40px] sm:text-4xl sm:leading-[50px] lg:text-6xl lg:leading-[80px] text-slate-700 text-center sm:text-left">Keep Motivating Your Self Through Learning</h1>
                </div>
                <div className="max-w-[500px] mt-10 sm:mt-0">
                    <img src={headerImage} alt="a person operating a computer" />
                </div>
            </div>
        </section>
    );
};

export default Header;