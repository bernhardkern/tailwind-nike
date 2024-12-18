// noinspection JSValidateTypes

import Button from "../components/Button.jsx";
import {arrowRight} from "../assets/icons/index.js";
import {shoes, statistics} from "../constants/index.js";
import {bigShoe1} from "../assets/images/index.js";
import ShoeCard from "../components/ShoeCard.jsx";
import {useState} from "react";

const Hero = () => {
    const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)

    return (
        <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
            <div className="relative flex w-full flex-col items-start justify-center pt-28 max-xl:padding-x xl:w-2/5">
                <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
                <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
                    <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
                    <br/>
                    <span className="mt-3 inline-block text-coral-red">Nike</span> Shoes
                </h1>
                <p className="mt-6 mb-14 text-lg leading-8 font-montserrat text-slate-gray sm:max-w-sm">Discover stylish
                    Nike arrivals, quality comfort, and innovation for your active life</p>
                <Button label="Shop now" iconURL={arrowRight}></Button>
                <div className="mt-20 flex w-full flex-wrap items-start justify-start gap-16">
                    {statistics.map((stat) => (
                        <div key={stat.label}>
                            <p className="text-4xl font-bold font-palanquin">{stat.value}</p>
                            <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
                        </div>
                    ))}

                </div>
            </div>
            <div className="relative flex items-center justify-center bg-cover bg-center max-xl:py-40 bg-primary bg-hero xl:min-h-screen">
                <img src={bigShoeImg} alt="shoe1" className="relative z-10 object-contain"/>
                <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
                    {shoes.map((shoe, index) => (
                        <div key={shoe}><ShoeCard
                            imgURL={shoe}
                            changeBigShoeImage={setBigShoeImg}
                            bigShoeImage={bigShoeImg}
                        /></div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;