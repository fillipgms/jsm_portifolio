import { gridItems } from "@/data";
import React from "react";
import GridItem from "./GridItem";

const Grid = () => {
    return (
        <section
            id="about"
            className="grid md:grid-cols-5 grid-cols-1 gap-10 w-full"
        >
            {gridItems.map((item, i) => (
                <GridItem {...item} key={i} />
            ))}
        </section>
    );
};

export default Grid;
