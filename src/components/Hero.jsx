import React from "react";
import Myself from "../assets/myself.jpg";
function Hero() {
  return (
    <div className="flex justify-center">
      <section
        class="flex justify-between m-auto font-Rowdies py-36 backdrop-opacity-20 heroSection items-center"
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        <div id="left" class="flex-col items-center">
          <p class="text-xs text-yellow-500">Hello!</p>
          <h1 id="intro" class="text-7xl inline px-1">
            I'm
          </h1>
          <h1 id="yellowIntro" class="text-7xl text-yellow-500 inline">
            Shariq Gazdar
          </h1>
          <p id="designation" class="text-3xl py-5">
            Frontend Developer
          </p>
          <div id="btnGrp" class="flex gap-3">
            <button
              id="hireBtn"
              class="bg-amber-400 py-2 px-2 rounded-xl border border-amber-400 hover:border-white"
            >
              <a href="mailto:gazdarshariq0@gmail.com" target="_blank">
                Hire me!
              </a>
            </button>
            <button
              id="hireBtn"
              class="bg-black py-2 px-2 rounded-xl border border-white hover:border-amber-400 w-32"
            >
              <a href="#Projects">My Works</a>
            </button>
          </div>
        </div>
        <div id="right">
          <img src={Myself} alt="" />
        </div>
      </section>
    </div>
  );
}

export default Hero;
