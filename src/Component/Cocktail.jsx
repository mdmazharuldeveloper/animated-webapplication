import React from 'react'
import {cocktailLists, mockTailLists} from "../../Constant/index.js";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const Cocktail = () => {
    useGSAP(()=>{
      const paralaxTimeline= gsap.timeline({
          scrollTrigger:{
              trigger:'#cocktails',
              start:'top 30%',
              end:'bottom 80%',
              scrub:true,
          }
      })

        paralaxTimeline.from('#c-left-leaf',{
            x:-100, y:100
        })
            .from('#c-right-leaf',{x:100, y:100})
    })
    return (
        <section id='cocktails' className='noisy'>
            <img src='/images/cocktail-left-leaf.png' alt='cocktail-left' id='c-left-leaf' />
            <img src='/images/cocktail-right-leaf.png' alt='cocktail-right' id='c-right-leaf' />

            <div className='list'>
                <div className='popular'>
                    <h2>Most Popular Cocktails:</h2>
                    <ul>
                        {cocktailLists.map((item, index) => (
                            <li key={index}>
                               <div className='md:me-28'>
                                   <h3>{item.name}</h3>
                                   <p>{item.country}</p>
                               </div>
                                <span>-{item.price}</span>
                            </li>

                        ))}
                    </ul>
                </div>

                <div className='loved'>
                    <h2>Most loved Cocktails:</h2>
                    <ul>
                        {mockTailLists.map((item, index) => (
                            <li key={index}>
                                <div className='md:me-28'>
                                    <h3>{item.name}</h3>
                                    <p>{item.country}</p>
                                </div>
                                <span>-{item.price}</span>
                            </li>

                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default Cocktail
