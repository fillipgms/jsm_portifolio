import React from "react";

const ShiningButton = ({
    text,
    icon,
    position,
}: {
    text: string;
    icon?: React.ReactNode;
    position?: "left" | "right";
}) => {
    return (
        <button className="flex gap-1 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#06091F,45%,#161A31,55%,#06091F)] bg-[length:200%_100%] px-6 font-medium transition-colors w-full md:w-60 py-2">
            {position === "left" && icon}
            {text}
            {position === "right" && icon}
        </button>
    );
};

export default ShiningButton;
