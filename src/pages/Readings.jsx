import { useState } from "react";
import readingsDark from "../assets/readingsDark.jpg"
import readingsLight from "../assets/readingsLight.jpeg"
import {useParallax } from "react-scroll-parallax";
import readings from "../readings";

const Readings = () => {
    const sec1ImgParallax = useParallax({ y: [-18, 18], speed: 18 });
    const sec1TextParallax = useParallax({  y: [-18, 18], speed: 18  });
    const sec2ImgParallax = useParallax({  y: [-18, 18], speed: 18 });
    const sec2TextParallax = useParallax({  y: [-18, 18], speed: 18  });

    const readingsLink = (date) => {
        if(!date) return "";
        date = date.replaceAll("-", "/");
        return `https://pcusa.org/devotion/revised-common-lectionary/${date}`
    }

    const formatDate = (inputDate) => {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        const [year, month, day] = inputDate.split("-");
        return `${months[month - 1]} ${Number(day)}, ${year}`
    }    

    return (
        <>
            <div id="reading-sec-1">
                <div className="readings-text">
                    <div ref={sec1TextParallax.ref}>
                        <p>This Sunday</p>
                        {readings["thisSunday"].verses.map(verse => <h1>{verse}</h1>)}
                        <p>{formatDate(readings["thisSunday"].date)}</p>
                        <p>{readings["thisSunday"].name}</p>
                        <a href={readingsLink(readings["thisSunday"].date)} target="_blank">
                            <button className="shadow-[inset_0_0_0_2px_#616467] text-white px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#f1f1f1] hover:text-black dark:text-neutral-200 transition duration-200">
                            Readings
                            </button>
                        </a>
                    </div>
                </div>
                <div id="reading-sec-1-div-2" ref={sec1ImgParallax.ref}>
                    <img src={readingsLight}></img>
                </div>
            </div>
            <div id="reading-sec-2">
                <div id="reading-sec-2-div-1" ref={sec2ImgParallax.ref}>
                    <img src={readingsDark}></img>
                </div>
                <div className="readings-text" ref={sec2TextParallax.ref}>
                    <div>
                        <p>Next Sunday</p>
                        {readings["nextSunday"].verses.map(verse => <h1>{verse}</h1>)}
                        <p>{formatDate(readings["nextSunday"].date)}</p>
                        <p>{readings["nextSunday"].name}</p>
                        <a href={readingsLink(readings["nextSunday"].date)} target="_blank">
                            <button className="shadow-[inset_0_0_0_2px_#616467] text-black px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#021A24] hover:text-white dark:text-black-200 transition duration-200">
                                Readings
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Readings;