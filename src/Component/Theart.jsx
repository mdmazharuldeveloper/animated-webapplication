import React from 'react'
import {featureLists, goodLists} from "../../Constant/index.js";
import {useGSAP} from "@gsap/react";
import {useMediaQuery} from "react-responsive";
import gsap from "gsap";


export const Theart = () => {
    const isMobile = useMediaQuery({width:767})
    useGSAP(()=>{
        const start = isMobile ? 'top 20%' : 'top top';

        const maskTimeLine = gsap.timeline({
            scrollTrigger:{
                trigger:'#art',
                start,
                end: 'bottom center',
                scrub:1.5,
                pin:true,
            }
        })



        maskTimeLine
            .to('.will-fade',{
            opacity:0, stagger:0.02, ease:'power1.inOut'
        })

            .to('.masked-img',{
                scale:1.3, maskPosition:'center', maskSize:'400%', ease:'power1.inOut',duration:1,
            })
            .to('#masked-content',{opacity:1,duration:1,ease:'power1.inOut'})
    })


    return (
        <div id='art'>
            <div className='container mx-auto h-full pt-20'>
                <h2 className='will-fade'>The ART</h2>

                <div className='content'>
                    <ul className='space-y-4 md:flex md:flex-col md:items-center gap-2 will-fade'>
                        {goodLists.map((item, index) => (<li key={index} className='flex gap-2 items-center'>
                            <img src='/images/check.png' alt='choda' className='md:w-fit w-60'/>{item}</li>))}
                    </ul>


                    <div className='cocktail-img'>
                        <img src='/images/under-img.jpg' alt='cocktail' className='masked-img abs-center size-full object-contain'/>
                    </div>

                    <ul className='space-y-4 will-fade'>
                        {featureLists.map((item, index) => (<li key={index} className='flex gap-2 items-center'>
                            <img src='/images/check.png' alt='choda'/>{item}</li>))}
                    </ul>


                </div>

                <div className='masked-container'>
                    <h2 className='will-fade'>Sip- Worthy Perfection</h2>
                    <div id='masked-content'>
                        <h3 >Made with Craft, poured with Passion</h3>
                        <p>This isn’t just a drink. It’s a carefully crafted moment made just for you.</p></div>
                </div>

            </div>
        </div>
    )
}
