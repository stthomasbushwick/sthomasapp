import { useState } from "react";
import readingsDark from "../assets/readingsDark.jpg"
import readingsLight from "../assets/readingsLight.jpeg"
import {useParallax } from "react-scroll-parallax";
import { useEffect } from "react";
const Readings = () => {
    const [thisSunday, setThisSunday] = useState(null);
    const [nextSunday, setNextSunday] = useState(null);
    const [loading, setLoading] = useState(true);

    const sec1ImgParallax = useParallax({ y: [-18, 18], speed: 18 });
    const sec1TextParallax = useParallax({  y: [-18, 18], speed: 18  });
    const sec2ImgParallax = useParallax({  y: [-18, 18], speed: 18 });
    const sec2TextParallax = useParallax({  y: [-18, 18], speed: 18  });

    useEffect(() => {
        const doFetch = async () => {
            setLoading(true);
            //I'm fetching the readings for the upcoming Sunday
            const response1 = await fetch("https://lectserve.com/sunday?lect=rcl");
            const data1 = await response1.json();
            // console.log(data1)
            setThisSunday(data1);
            //I'm getting the data of the next sunday from the first fetch and using that to fetch the second sundays reading
            const response2 = await fetch(`https://lectserve.com/date/${data1.nextSunday}?lect=rcl`);
            const data2 = await response2.json();
            setNextSunday(data2.red_letter);
            console.log(data2);
            setLoading(false)
        }
        doFetch();
    }, []);

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
                    {loading? <div className="loader dark-loader"></div>:
                    <>
                        <p>This Sunday</p>
                        {thisSunday && thisSunday.services[0].readings.map(verse => <h1>{verse}</h1>)}
                        <p>{formatDate(thisSunday?.date)}</p>
                        <p>{thisSunday && thisSunday.services[0].name}</p>
                        <a href={readingsLink(thisSunday?.date)} target="_blank">
                            <button className="shadow-[inset_0_0_0_2px_#616467] text-black px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#f1f1f1] hover:text-black dark:text-neutral-200 transition duration-200">
                            Readings
                            </button>
                        </a>
                        </>}
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
                    {loading? <div className="loader"></div>: <div>
                        <p>Next Sunday</p>
                        {nextSunday && nextSunday.services[0].readings.map(verse => <h1>{verse}</h1>)}
                        <p>{formatDate(nextSunday?.date)}</p>
                        <p>{nextSunday && nextSunday.services[0].name}</p>
                        <a href={readingsLink(nextSunday?.date)} target="_blank">
                            <button className="shadow-[inset_0_0_0_2px_#616467] text-black px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#021A24] hover:text-white dark:text-black-200 transition duration-200">
                                Readings
                            </button>
                        </a>
                    </div>}
                </div>
            </div>
        </>
    )
}

export default Readings;