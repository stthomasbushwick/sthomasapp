import React from "react";
import NeedPrayerImage from "../src/assets/hands.jpg";
import CrossImage from "../src/assets/cross.png";

function NeedPrayer() {
  return (
    <>
      <div
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${NeedPrayerImage})` }}>
        <div className="text-center">
          <div className="text-white text-7xl mb-8 pt-20 pb-14">
            Join Us for Daily Noon Prayer
          </div>
          <button className="px-4 py-2 rounded-xl border border-neutral-600 text-black bg-white hover:bg-gray-100 transition duration-200 my-8 ">
            Zoom Link
          </button>
          <div className="text-white text-3xl pt-18">
            Monday through Friday at 12:00 PM EST
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-16 px-8">
        <div src={CrossImage}></div>
        <div></div>
      </div>
    </>
  );
}

export default NeedPrayer;
