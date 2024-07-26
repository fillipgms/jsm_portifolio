import { workExperience } from "@/data";
import { cn } from "@/lib/utils";
import React from "react";

const Experience = () => {
    return (
        <section id="experience" className="space-y-12">
            <h2 className="text-3xl md:text-5xl text-center font-bold ">
                My <span className="text-purple">work experience</span>
            </h2>
            <div className=" grid md:grid-cols-2 gap-10">
                {workExperience.map(
                    ({ id, title, desc, className, thumbnail }) => (
                        <div
                            key={id}
                            className={cn(
                                " flex md:flex-row flex-col md:items-center justify-center border border-white-100/20 p-6 md:p-5 lg:p-10 rounded-xl gap-5",
                                className
                            )}
                        >
                            <div>
                                <img src={thumbnail} alt={title} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold">{title}</h3>
                                <p className="text-white-100 mt-3 ">{desc}</p>
                            </div>
                        </div>
                    )
                )}
            </div>
        </section>
    );
};

export default Experience;
