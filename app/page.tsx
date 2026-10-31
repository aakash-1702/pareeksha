import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import AnnouncementBar from "@/components/landing/AnnouncementBar";
import RoleTicker from "@/components/landing/RoleTicker";
import SpotlightRoot from "@/components/islands/SpotlightRoot";
import InViewObserver from "@/components/islands/InViewObserver";

export const dynamic = "force-static";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <SpotlightRoot>
        <main>
          <Hero />
          <RoleTicker />
        </main>
      </SpotlightRoot>
      <InViewObserver />
    </>
  );
}
