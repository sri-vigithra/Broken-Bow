import Hero from "@/app/component/Hero";
import CabinGrid from "@/app/component/CabinGrid";
import ThingsTodo from "@/app/component/ThingsTodo";
import Blogs from "@/app/component/Blogs";
import TestimonialSlider from "@/app/component/TestimonialSlider";
export default function Home() {
  return (
      <>
          <main>

              <Hero/>
              <CabinGrid />
              <ThingsTodo/>
              <TestimonialSlider/>
              <Blogs />

          </main>
      </>

  );
}
