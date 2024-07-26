import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
    return (
        <main className="bg-black-100 text-white">
            <div className="md:max-w-7xl px-7 mx-auto w-full space-y-16">
                <FloatingNav navItems={navItems} />
                <Hero />
                <Grid />
                <Projects />
                <Testimonials />
                <Experience />
                <Approach />
            </div>
        </main>
    );
}
