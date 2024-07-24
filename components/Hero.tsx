import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { MdOutlineArrowOutward } from "react-icons/md";
import ShiningButton from "./ui/ShiningButton";
import { Spotlight } from "./ui/Spotlight";

const Hero = () => {
    return (
        <section className="md:h-screen h-[80vh] overflow-hidden flex items-center justify-center">
            <div>
                <Spotlight
                    className="-top-48 left-40 hidden md:block h-screen"
                    fill="purple"
                />

                <Spotlight
                    className="md:top-16 md:left-10 -top-10 h-screen"
                    fill="white"
                />

                <Spotlight
                    className="top-20 -left-80 hidden md:block h-screen"
                    fill="blue"
                />
            </div>

            <div className="md:h-screen h-[80vh] w-full bg-grid-white/[0.02] bg-black-100 absolute flex items-center justify-center text-center inset-0">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            </div>

            <div className="space-y-6 text-center z-10">
                <h2 className=" tracking-widest uppercase text-blue text-xs">
                    Dynamic Web Magic With Next.js
                </h2>
                <TextGenerateEffect
                    className="text-4xl md:text-6xl text-white"
                    words="Transforming Concepts into Seamless User Experiences"
                />
                <p className=" md:tracking-wider text-sm md:text-lg lg:text-2xl">
                    Hi! I'm Fillip, a Next.js Developer based in Brazil.
                </p>
                <a href="#projects" className="flex justify-center">
                    <ShiningButton
                        text="show my work"
                        position="right"
                        icon={<MdOutlineArrowOutward />}
                    />
                </a>
            </div>
        </section>
    );
};

export default Hero;
