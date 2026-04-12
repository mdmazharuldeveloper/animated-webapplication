import React from 'react'
import  gsap from 'gsap'
import  {ScrollTrigger, SplitText} from 'gsap/all'
import Navbar from "./Component/Navbar.jsx";
import Hero from "./Component/Hero.jsx";
import Cocktail from "./Component/Cocktail.jsx";
import About from "./Component/About.jsx";
import {Theart} from "./Component/Theart.jsx";

gsap.registerPlugin(ScrollTrigger ,SplitText)

export const App = () => {
    return (
        <main>
            <Navbar/>
            <Hero/>
            <Cocktail/>
            <About/>
            <Theart/>
        </main>
    )
}
