import React from "react";
import NeedPrayerImage from "../src/assets/hands.jpg";
import CrossImage from "../src/assets/cross.png";
import { Spotlight } from "./Spotlight";

function NeedPrayer() {
  return (
    <>
      <div
        className="relative bg-cover bg-center h-screen overflow-hidden"
        style={{ backgroundImage: `url(${NeedPrayerImage})` }}>
        <Spotlight />
        <div className="text-center">
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
      </div>

      <div className="bg-gray-100 py-16 px-6 flex flex-col-reverse lg:flex-row items-center justify-center ">
        <div className="flex-1 w-full flex justify-center">
          <img className="w-3/4" src={CrossImage} alt="Cross" />
        </div>

        <div className="flex-1 w-full text-center lg:text-left px-4">
          <h1 className="text-4xl md:text-7xl font-semibold text-gray-900 mb-12">
            The Lord’s Prayer
          </h1>
          <p className="text-lg md:text-4xl text-gray-800 leading-relaxed">
            “Our Father, Who art in heaven, hallowed be Thy name; Thy kingdom
            come; Thy will be done on earth as it is in heaven. Give us this day
            our daily bread; and forgive us our trespasses as we forgive those
            who trespass against us; and lead us not into temptation, but
            deliver us from evil.”
          </p>
        </div>
      </div>
      <div className="bg-[#031E29] text-white py-20 px-6 flex flex-col lg:flex-row items-center justify-center">
        <div className="flex-1 w-full text-center lg:text-center">
          <h1 className="text-4xl md:text-7xl font-semibold mb-6">
            Watch & Reflect
          </h1>
          <p className="text-lg md:text-3xl leading-relaxed text-gray-300 mb-8 max-w-xl lg:text-center mx-auto">
            Browse sermons, spiritual reflections, and special services anytime
          </p>
          <button className="px-4 py-2 rounded-xl border border-neutral-600 text-black bg-white hover:bg-gray-100 transition duration-200 my-8">
            Watch Worship
          </button>
        </div>

        <div className="flex-1 w-full max-w-6xl aspect-[16/9] mx-7">
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
