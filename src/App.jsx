import React from 'react'
import  gsap from 'gsap'
import  {ScrollTrigger, SplitText} from 'gsap/all'
import Navbar from "./Component/Navbar.jsx";
import Hero from "./Component/Hero.jsx";

gsap.registerPlugin(ScrollTrigger ,SplitText)

export const App = () => {
    return (
        <main>
            <Navbar/>
            <Hero/>
            <div className='h-dvh bg-black'></div>
        </main>
    )
}
