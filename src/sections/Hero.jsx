import Button from "../components/Button.jsx";
import {arrowRight} from "../assets/icons/index.js";
import {statistics} from "../constants/index.js";

const Hero = () => {
    return (
        <section id="home"
                 className="w-full p-2 flex xl:flex-row justify-center min-h-screen gap-10 max-container">
            <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full pt-28 max-xl:padding-x">
                <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
                <h1 className="mt-10 font-palanquin text-8xl max-lg:leading-[130px] max-sm:text-[72px] max-sm:leading-[98px] font-bold">
                    <span className="bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
                    <br/>
                    <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
                </h1>
                <p className="font-montserrat text-slate-gray text-lg mt-6 mb-14 sm:max-w-sm leading-8">Discover stylish Nike arrivals, quality comfort, and innovation for your active life</p>
                <Button label="Shop now" iconURL={arrowRight}></Button>
                <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
                    {statistics.map((stat) => (
                        <div key={stat.label}>
                            <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
                            <p className="font-montserrat leading-7 text-slate-gray">{stat.label}</p>
                        </div>
                    ))}

                </div>
            </div>

        </section>
    );
};

export default Hero;