import { cn } from "@/lib/utils";
import React from "react";
import { BackgroundGradientAnimation } from "./ui/GradientBackground";
import { GridGlobe } from "./ui/GridGlobe";
import ShiningButton from "./ui/ShiningButton";
import { IoCopyOutline } from "react-icons/io5";

const GridItem = ({
    className,
    id,
    title,
    description,
    imgClassName,
    titleClassName,
    img,
    spareImg,
}: {
    className: string;
    id: number;
    title: string;
    description: string;
    imgClassName: string;
    titleClassName: string;
    img: string;
    spareImg: string;
}) => {
    const technologies = [
        "VueJS",
        "NextJS",
        "GraphQL",
        "ReactJS",
        "Express",
        "Typescript",
    ];

    return (
        <div
            id={`${id}`}
            className={cn(
                "border border-white-100/20 rounded-3xl relative overflow-hidden",
                className
            )}
        >
            <div className="w-full h-full absolute select-none">
                {img && (
                    <img
                        src={img}
                        className={cn(
                            "w-full object-cover object-center",
                            imgClassName
                        )}
                        alt={img}
                    />
                )}
            </div>

            <div
                className={`absolute right-0 -bottom-5 select-none ${
                    id === 5 && "w-full opacity-80"
                } `}
            >
                {spareImg && (
                    <img
                        src={spareImg}
                        className={cn(
                            "object-cover object-center w-full h-full"
                        )}
                        alt={spareImg}
                    />
                )}
            </div>

            {id === 6 && (
                <div className="absolute">
                    <BackgroundGradientAnimation />
                </div>
            )}

            {id === 2 && (
                <div className="absolute top-20 h-full w-full">
                    <GridGlobe />
                </div>
            )}

            {id === 3 && (
                <div className="absolute -right-10 -top-2 -rotate-6 w-3/5 h-[110%] grid grid-cols-2 gap-3 py-3 pl-2">
                    <span className="bg-black-300 flex items-center justify-center rounded-md"></span>
                    {technologies.map((technology) => (
                        <span className="bg-black-150 flex py-1 px-2 text-white-100 items-center justify-center rounded-md">
                            {technology}
                        </span>
                    ))}
                    <span className="bg-black-300 flex items-center justify-center rounded-md"></span>
                </div>
            )}

            <div
                className={cn(
                    "md:h-full min-h-40 flex flex-col p-5 lg:p-10",
                    titleClassName,
                    id === 2 && "text-center"
                )}
            >
                <p className="font-sans font-extralight md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
                    {description}
                </p>
                <h3 className="font-sans text-lg lg:text-2xl max-w-80 font-bold z-10 false">
                    {title}
                </h3>

                {id === 6 && (
                    <div className="z-20 relative flex justify-center mt-5">
                        <ShiningButton
                            text="copy my email adress"
                            icon={<IoCopyOutline />}
                            position="left"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default GridItem;
