import { useState } from 'react';
import arrow from '../assets/images/Vector 7.png';
import Image from "next/image";
import ProgressBar from './ProgressBar'

export default function TarifCard(props) {
    let bgColor = props.bgColor;
    const [progress, setProgress] = useState(50);
    const handleUpdateProgress = (newProgress) => {
        setProgress(newProgress);
    };

    function changeProgress(e) {
        const inputValue = e.target.value.trim(); // Remove leading and trailing whitespaces
        const newProgress = parseInt(inputValue, 10);

        if (inputValue === '' || (!isNaN(newProgress) && newProgress >= 0 && newProgress <= 100)) {
            setProgress(inputValue === '' ? '' : newProgress);
            handleUpdateProgress(inputValue === '' ? '' : newProgress);
        }
    }

    let hit = props.hit ? <div className="absolute top-[4.7rem] right-[14.4rem] w-[9.6rem] h-11 px-5 py-2.5 origin-top-left -rotate-45 bg-gradient-to-r from-cyan-300 to-sky-500 justify-start items-start gap-2.5 inline-flex">
        <div className="w-[7.1rem] text-center text-white text-sm font-normal p2MASS-J1808 uppercase leading-[0.9rem]">хит <br /> продаж</div>
    </div> : '';

    let visibility = props.select ? 'visible:block' : 'invisible'
    return (
        <div className="w-[22.6rem]  rounded-[0.75rem] h-[51.44rem]  bg-white rounded-br-[6.25rem] ">
            <div className={`${bgColor}   relative overflow-hidden rounded-[0.75rem] flex items-center rounded-br-[6.25rem] justify-center w-[22.6rem] h-[6rem]`}>
                {hit}
                <div className=" text-zinc-100 text-2xl font-normal p2MASS-J1808 uppercase leading-[3.45rem]">{props.title}</div>
            </div>
            <div className="pl-[2.1rem] pr-[1.75rem] ">
                <div className=" h-[17.1rem] flex-col justify-start items-start gap-[1.6rem] inline- mt-[2rem] mx-auto">

                    <div className="list_disc mb-[1.6rem] text-neutral-600 text-[1.06rem] font-normal font-[Gilroy-Regular] leading-[1.9rem]"> {props.list1}</div>
                    <div className="list_disc  mb-[1.6rem] text-neutral-600 text-[1.06rem] font-normal font-[Gilroy-Regular] leading-[1.9rem]">{props.list2}</div>
                    <div className="list_disc  mb-[1.6rem] text-neutral-600 text-[1.06rem] font-normal font-[Gilroy-Regular] leading-[1.9rem]">Обход проверок</div>
                    <div className="list_disc  mb-[1.6rem] text-neutral-600 text-[1.06rem] font-normal font-[Gilroy-Regular] leading-[1.9rem]">Техническая поддержка</div>
                    <div className="list_disc  mb-[1.6rem] text-neutral-600 text-[1.06rem] font-normal font-[Gilroy-Regular] leading-[1.9rem]">Полный возврат средств при неполадках</div>
                </div>


                <div className=" mb-[0.6rem] text-neutral-600 mt-[1.1rem] text-[1.1rem] font-normal font-[Gilroy-Regular] leading-[1.9rem]">{props.choice}</div>
                <div className="  pt-[0.5rem] pb-[0.5rem]  pl-[1.2rem] w-[9.2rem] rounded-[0.5rem] border border-violet-500 border-5 border-solid mb-[1.4rem] "> <input onChange={changeProgress} value={progress} className=" text-neutral-600 text-[1.06rem] border-none outline-none w-[100%] font-normal font-[Gilroy-Regular] leading-[1.9rem]" /> </div>

                <ProgressBar value={progress} onUpdateProgress={handleUpdateProgress} />
                <div className={`${visibility}`}>
                    <div className="text-neutral-600 mb-[0.6rem] text-[1.06rem] mt-[1.5rem] font-normal font-[Gilroy-Regular] leading-[1.9rem]">{props.period}</div>

                    <div className='relative'>
                        <select className={`relative mb-[1.7rem] pt-[0.2rem] pb-[0.5rem] outline-none pl-[1.2rem] w-[9.2rem] rounded-[0.5rem] border border-violet-500 border-5 border-solid mb-[1.4rem] w-[10.54rem] h-[2.6rem] text-[1.06rem] font-normal font-[Gilroy-Regular] leading-[1.9rem] rounded-7 border border-violet-500`}>
                            <option value="" disabled selected>{props.manth}</option>
                            <option value="">1</option>
                            <option value="">2</option>
                        </select>

                        <div className="absolute top-[1.2rem] left-[7.2rem] w-[1.1rem] h-[0.5rem]">
                            <Image
                                src={arrow}
                                alt="arrow"

                            />
                        </div>
                    </div>
                </div>
                <div className="hover:bg-gradient-to-r cursor-pointer hover:from-cyan-400 hover:to-sky-600 transition-all button_box-shadow  h-[4.5rem] mb-[3.9rem] px-[3rem] py-[2.2rem] bg-gradient-to-r from-cyan-300 to-sky-500 rounded-md shadow justify-center items-center gap-2.5 inline-flex">
                    <div className="text-center text-white text-[1.14rem] font-normal p2MASS-J1808  uppercase leading-[1.06rem]">купить за 1500Р</div>
                </div>

            </div>
        </div>
    )
}
