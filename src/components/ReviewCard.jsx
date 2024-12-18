// noinspection JSValidateTypes

import {star} from "../assets/icons/index.js";

const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <img src={imgURL} className="rounded-full w-[120px] h-[120px]" alt={customerName}/>

            <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
            <div className="mt-2 mt-3 flex items-center justify-center gap-2.5">
                <img src={star} alt="rating" width={24} height={24}/>
                <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
            </div>
            <h3 className="mt-1 text-2xl font-palanquin font-bold">{customerName}</h3>
        </div>
    )
}

export default ReviewCard