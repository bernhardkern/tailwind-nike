import Button from "../components/Button.jsx";
import {arrowRight} from "../assets/icons/index.js";
import {shoe8} from "../assets/images/index.js";

const SuperQuality = () => {
    // noinspection JSValidateTypes
    return (
        <secion
            id="about-us"
            className="flex w-full max-lg:flex-col items-center justify-between gap-10 max-container"
        >
            <div className="flex flex-1 flex-col">
                <h2 className="font-palanquin text-4xl font-bold capitalize lg:max-w-lg">
                    We provide you
                    <span className="text-coral-red"> Super</span>
                    <span className="text-coral-red"> Quality</span> Shoes
                </h2>
                <p className="mt-4 lg:max-w-lg info-text">
                    Ensuring premium comfort and style, our meticulously crafted footwear
                    is designed to elevate your experience, providing you with unmatched
                    quality, innovation, and a touch of elegance.
                </p>
                <p className="mt-6 lg:max-w-lg info-text">
                    Our dedication to detail and excellence ensures your satisfaction
                </p>
                <div className="mt-11">
                    <Button label="View details"></Button>
                </div>
            </div>
            <div className="flex-1 flex justify-center items-center">
                <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain"/>
            </div>
        </secion>
    );
};

export default SuperQuality;
