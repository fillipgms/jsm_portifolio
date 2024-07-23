import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
    return (
        <main className="bg-black-100 text-white">
            <div className="md:max-w-6xl px-7 mx-auto w-full space-y-9">
                <FloatingNav navItems={navItems} />
                <Hero />
                <Grid />
            </div>
        </main>
    );
}
