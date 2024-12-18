import {star} from "../assets/icons/index.js";

const PopularProductCard = ({imgURL, name, price}) => {
    // noinspection JSValidateTypes
    return (
        <div className="felx flex-1 flex-col w-full max-sm:w-full">
            <img src={imgURL} className="w-[280px] h-[280px]" alt={name}/>
            <div className="mt-8 flex justify-start gap-2.5">
                <img src={star} alt="rating" width={24} height={24}/>
                <p className="font-montserrat text-xl leading-normal">(4.5)</p>
            </div>
            <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{name}</h3>
            <div className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">{price}</div>
        </div>
    )
};

export default PopularProductCard;