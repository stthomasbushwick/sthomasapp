import React from "react";
import NeedPrayerImage from "../assets/hands.jpg";
import CrossImage from "../assets/cross.png";
import { Spotlight } from "./Spotlight";
import {useParallax, ParallaxBanner } from "react-scroll-parallax";

function NeedPrayer() {
  const prayerParallax = useParallax({ y: [-10, 10], speed: 10 });
  const watchTextParallax = useParallax({ y: [-6, 6], speed: 6 });
  const iframeParallax = useParallax({ y: [-8, 8], speed: 8 });
  return (
    <>
      <ParallaxBanner
      layers={[
                      {
                          image: NeedPrayerImage,
                          speed: -13,
                      },
                  ]}
        className="relative bg-cover bg-center h-screen overflow-hidden"
        // style={{ backgroundImage: `url(${NeedPrayerImage})` }}
        >
        <Spotlight />
        <div className="text-center relative z-3">
          <div className="text-white text-6xl mb-8 pt-20 pb-14">
            Join Us for Daily Noon Prayer
          </div>
          <button className="px-4 py-2 rounded-xl border border-neutral-600 text-black bg-white hover:bg-gray-100 transition duration-200 my-8">
            Zoom Link
          </button>
          <div className="text-white text-3xl pt-18 mx-5">
            Monday through Friday at 12:00 PM EST
          </div>
        </div>
      </ParallaxBanner>

      <div className="bg-gray-100 py-16 px-6 flex flex-col-reverse lg:flex-row items-center justify-center " ref={prayerParallax.ref}>
        <div className="flex-1 w-full flex justify-center">
          <img className="lg:w-3/4" src={CrossImage} alt="Cross"/>
        </div>

        <div className="flex-1 w-full text-center lg:text-left px-4" id="prayer-div" >
          <h1>
            The Lord’s Prayer
          </h1>
          <p>
            “Our Father, Who art in heaven, hallowed be Thy name; Thy kingdom
            come; Thy will be done on earth as it is in heaven. Give us this day
            our daily bread; and forgive us our trespasses as we forgive those
            who trespass against us; and lead us not into temptation, but
            deliver us from evil.”
          </p>
        </div>
      </div>
      <div className="bg-[#031E29] text-white py-20 px-6 flex flex-col lg:flex-row items-center justify-center">
        <div className="flex-1 w-full text-center lg:text-center" ref={watchTextParallax.ref}>
          <h1 id="watch-title">
            Watch & Reflect
          </h1>
          <p className="text-lg md:text-3xl leading-relaxed text-gray-300 mb-8 max-w-xl lg:text-center mx-auto">
            Browse sermons, spiritual reflections, and special services anytime
          </p>
          <a href="https://www.youtube.com/@StThomasBushwick1405Priest/streams" target="_blank">
            <button className="px-4 py-2 rounded-xl border border-neutral-600 text-black bg-white hover:bg-gray-100 transition duration-200 my-8 cursor-pointer">
            Watch Worship
            </button>
          </a>
        </div>

        <div className="flex-1 w-full max-w-6xl aspect-[16/9] mx-7 hidden lg:block" ref={iframeParallax.ref}>
          <iframe
            src="https://www.youtube.com/embed/yyX9PJx6CzE?si=DSQLaFgHPoxZAGb0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full rounded-xl"></iframe>
        </div>
      </div>
    </>
  );
}

export default NeedPrayer;
