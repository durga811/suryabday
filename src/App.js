import "./App.css";
import React from "react";

import Registation from "./form";
import FlipCountdown from '@rumess/react-flip-countdown';
function App() {
  return (
    <div className="page">
      <h1 class="text-4xl md:text-6xl mb-2 p-6 glitch-text text-blue-900">
        INVITING YOU TO MOST <br /> WAITED GPL
      </h1>

      <img
        src="https://res.cloudinary.com/durga811/image/upload/v1680205460/surya_o9bkjq.png"
        alt="Surya image"
        className="m-auto h-80"
      />
      <div className="w-5/6 md:w-3/4 m-auto pt-4">
        <h1 class=" text-5xl md:text-7xl underline">About Surya</h1>
        <p class="text-xl md:text-2xl pt-6 ">
          (Those who don't Know surya here is the brief summary about him)
        </p>
        <p class="text-xl md:text-2xl pt-6">
          I am a ruthless GPL expert. I have been known for Ruining everyone's
          birthday by slapping on his ass with sandals until he cries for spare
          life. I want to feel the same on my birthday, which is the 4th of
          April, So I am cordially inviting my GPL, who are interested in
          helping me to gain the GPL experience, please fill out the form.
        </p>
        <p class="text-xl md:text-2xl p-6 ">
          Thank you! I am waiting for you all❤️❤️❤️.
        </p>
        <p class="text-xl md:text-2xl pt-10 " style={{ color: "#D27685" }}>
          INFRONT OF - SD HALL OF RESIDANCE <br />
          APRIL 3, 2023, MONDAY <br /> CEREMONY STARTS AT 11.45 P.M
        </p>
        <p className="text-xl m-4 " style={{ color: "#efa2d8" }}>
          

        <div >
            
            <FlipCountdown
                hideYear
                hideMonth
                // theme='dark'
                size='small'
                endAt={new Date(
                  1680545700 * 1000
                ).toUTCString()}
            />
        </div>
        </p>

        <Registation />
      </div>
    </div>
  );
}

export default App;
