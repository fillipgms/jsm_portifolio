import { projects } from "@/data";
import React from "react";
import Card from "./Card";

const Projects = () => {
    return (
        <section id="projects">
            <h2 className="text-3xl md:text-5xl text-center font-bold my-16">
                A small selection of{" "}
                <span className="text-purple">recent projects</span>
            </h2>
            <div className="grid grid-cols-2 gap-10">
                {projects.map((project) => (
                    <Card {...project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
