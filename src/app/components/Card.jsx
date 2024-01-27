import cardLight from "../assets/images/Group 59.png";
import cardDark from "../assets/images/light-card.png";
import Image from "next/image";
export default function Card(props) {
    
    const bgImg = props.isDarkMode ? cardDark.src : cardLight.src
    return (
        
        <div className={`relative ${props.isDarkMode ? 'bg-[#56CCF2]' : 'bg-[#291A5D]'} rounded-[6rem] mt-[3.75rem] md:mt-[0] mx-auto md:m-[0rem] w-[22.5rem] md:h-[25.8rem] lg:h-[25.8rem] h-[25.8rem]  `}>
           
        <div className=" drop-shadow  w-[22.5rem] h-[25.8rem] w-[22.5rem]   rounded-br-[12rem] rounded-[0.75rem]   bg-[#fff] ">
        <div className="w-[18rem] mx-auto pt-[2.8rem]">
        <div className="text-neutral-600 text-xl mb-[1.06rem] font-normal p2MASS-J1808 leading-[2.9rem]">{props.title}</div>
            <div className="text-neutral-600 text-xl font-normal font-[Gilroy-Regular] leading-[2.1rem]">{props.text}</div>
        </div>
        </div>
        </div>
       

        
    )
}
