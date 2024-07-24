import { cn } from "@/lib/utils";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const Card = ({
    id,
    title,
    des,
    img,
    iconLists,
    link,
}: {
    id: number;
    title: string;
    des: string;
    img: string;
    iconLists: string[];
    link: string;
}) => {
    return (
        <a href={link} target="_blank">
            <div className=" bg-black-100 border border-white-100/20 rounded-3xl p-5 space-y-5">
                <div className="bg-black-150 flex justify-center rounded-3xl overflow-hidden max-h-64">
                    <img src={img} alt={img} />
                </div>

                <div>
                    <h3 className="font-sans text-lg lg:text-2xl font-bold z-10 false">
                        {title}
                    </h3>
                    <p className="font-sans font-extralight md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
                        {des}
                    </p>
                </div>

                <div className="flex justify-between items-center">
                    <div className="flex">
                        {iconLists.map((icon, i) => {
                            let value = 5 * i + 3;

                            return (
                                <span
                                    className="flex items-center justify-center size-11 border border-white-100/20 rounded-full bg-black-100"
                                    key={icon}
                                    style={{
                                        translate: i > 0 ? `-${value}px` : "",
                                    }}
                                >
                                    <img
                                        src={icon}
                                        alt={icon}
                                        className="w-6"
                                    />
                                </span>
                            );
                        })}
                    </div>

                    <span className="text-purple flex gap-1 capitalize items-center">
                        check live site
                        <MdOutlineArrowOutward />
                    </span>
                </div>
            </div>
        </a>
    );
};

export default Card;
