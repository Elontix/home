import Exhaustive from "../components/about/Exhaustive";
import Contest from "../components/common/Contest";
import HowToPlay from "../components/common/HowToPlay";
import LatestWinner from "../components/common/LatestWinner";
import Support from "../components/common/Support";
import Testimonial from "../components/common/Testimonial";
import Counter from "../components/home-three/Counter";
import Hero from "../components/home-three/Hero";

export default function HomeThree() {
  return (
    <>
      {/* here section */}
      <Hero />

      {/* Counter section */}
      <Counter />

      {/* Contest section */}
      <Contest />

      {/* How it play section */}
      <HowToPlay />

      {/* Exhastive section */}
      <Exhaustive />

      {/* Latest winner section */}
      <LatestWinner />

      {/* Testimonial section */}
      <Testimonial />

      {/* Support section */}
      <Support />
    </>
  );
}
