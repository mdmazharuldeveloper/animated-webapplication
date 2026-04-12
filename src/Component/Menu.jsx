import React, {useRef, useState} from 'react'
import {allCocktails} from "../../Constant/index.js";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const Menu = () => {
    const [currentIdex, SetcurrentIdex] = useState(0)

    useGSAP(()=>{
       gsap.fromTo('#title',{opacity: 0},{opacity:1,duration:1})
         gsap.fromTo('.cocktail img',{opacity:0, xPercent:-100},{opacity:1,duration:1, xPercent:0, ease:"power1.out"})
    },[currentIdex])

    const totalCocktails = allCocktails.length

    const goToSlide=(index)=>{
        const newIndex = ( index + totalCocktails ) % totalCocktails
        SetcurrentIdex(newIndex)
    }

    const getCockTailAt = (indexOffset)=>{
       return allCocktails[(currentIdex + indexOffset + totalCocktails) % totalCocktails]
    }

    const currentCocktail = getCockTailAt(0)
    const prevCocktail = getCockTailAt(-1)
    const nextCocktail = getCockTailAt(1)

    const contentRef = useRef();


    return (
        <section id="menu" aria-labelledby='menu-heading'>
            <img src='/images/slider-left-leaf.png' alt='left-leaf' id='m-left-leaf' />
            <img src='/images/slider-right-leaf.png' alt='right-leaf' id='m-right-leaf' />


            <nav className='cocktail-tabs'>
                {allCocktails.map((drinks,index)=>{
                    const isActive = index === currentIdex;
                    return (
                        <button key={drinks.id} className={isActive ? 'text-white border-white' : 'text-white/50 border-white/50'}
                        onClick={()=>goToSlide(index)}
                        >
                            {drinks.name}
                        </button>
                    )
                })}
            </nav>


            <div className="content">
                <div className='arrows'>
                    <button className='text-left' onClick={()=>goToSlide(currentIdex - 1)}>
                        <span>{prevCocktail.name}</span>
                        <img src="/images/right-arrow.png" alt="prev" aria-hidden="true"/>
                    </button>

                    <button onClick={()=>goToSlide(currentIdex + 1)} className='text-right'>
                        <span>{nextCocktail.name}</span>
                        <img src="/images/left-arrow.png" alt="prev" aria-hidden="true" className=''/>
                    </button>
                </div>
            </div>

            <div className='cocktail'>
               <img src={currentCocktail.image} alt='image' />
            </div>

            <div className='recipe'>
                <div ref={contentRef} className='info'>
                <p>Recipe For:</p>
                    <p id='title'>{currentCocktail.name}</p>
                </div>

                <div className='details'>
                    <h2>{currentCocktail.title}</h2>
                    <p>{currentCocktail.description}</p>
                </div>
            </div>
        </section>
    )
}
export default Menu
