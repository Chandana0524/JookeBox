
import Blogs from "@/components/Blogs";

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LogoSection from "@/components/LogoSection";
import RecentProjects from "@/components/RecentProjects";
import Testimonials from "@/components/Testimonials";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    // 1. Changed: Removed items-center to let content stretch
    // 2. Added: w-full and min-h-screen to fix the background
    <main className="relative bg-black-100 flex  justify-center
     items-center flex-col  mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full ">
        <FloatingNav navItems={navItems}/>
        <Hero />
        <RecentProjects />
        <LogoSection />
        <Testimonials />
        <Blogs />
        <Footer />
      </div>
    </main>
  );
}
