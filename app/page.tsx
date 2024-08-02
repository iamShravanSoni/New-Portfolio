import { Grid } from "@/components/Grid";
import Hero from "@/components/Hero";
import { Globe } from "@/components/Globe";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";
import RecentProjects from "@/components/RecentProject";
import Testimonials from "@/components/Testimonial";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative  overflow-hidden">
      <div className="">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Globe />
        <RecentProjects />
        <Testimonials />
        <Footer />
      </div>
    </main>
  );
}