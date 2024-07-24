import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "@/data";

const Testimonials = () => {
    return (
        <section id="testimonials" className="pt-16 bg-black-100 space-y-16">
            <h2 className="text-3xl md:text-5xl text-center font-bold ">
                Kind words from{" "}
                <span className="text-purple">satisfied clients</span>
            </h2>

            <div className="border-none h-[50vh] md:h-64 flex  items-center justify-center">
                <InfiniteMovingCards
                    items={testimonials}
                    speed="slow"
                    direction="right"
                />
            </div>

            <div className="flex justify-evenly flex-wrap">
                {companies.map(({ img, name, id, nameImg }) => (
                    <div className="flex gap-2 items-center " key={id}>
                        <div>
                            <img src={img} alt={name} className="md:w-10 w-5" />
                        </div>
                        <div>
                            <img
                                src={nameImg}
                                alt={name}
                                width={id === 4 || id === 5 ? 100 : 150}
                                className="md:w-24 w-20"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
