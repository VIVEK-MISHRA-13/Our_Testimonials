import React from "react";


import { FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';

const Card=(props)=>{
    let review = props.review;
return(
<div className="flex flex-col relative  ">
        <div className="absolute top-[-7rem] z-[20] mx-auto ">

        <img
        className="aspect-square rounded-full w-[140px] h-[140px] z-[30] trnasition-scale duration-500 hover:scale-110 "
         src={review.image} alt=""/>
           
        </div>
        <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-118px] z-[10] left-[9px] ">

        </div>

        <div className="text-center mt-7">
            <p className="font-bold text-2xl capitalize">{review.name}</p>
        </div>

        
        <div className="text-center mt-2">
            <p className="text-violet-500 uppercase text-sm">{review.job}</p>
        </div>

        <div className="text-violet-400 mx-auto mt-5">
            <FaQuoteLeft/>
        </div>
        
        <div className="text-center mt-4 text-slate-500">
            {review.text}
        </div>

        <div className="text-violet-400 mx-auto mt-5">
            <FaQuoteRight/>
        </div>

</div>
    
);

}

export default Card;