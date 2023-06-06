import Exhaustive from "../components/about/Exhaustive";
import Contest from "../components/common/Contest";
import Tokenomics from "../components/common/Tokenomics";
import HowToPlay from "../components/common/HowToPlay";
import Roadmap from "../components/common/Roadmap";
import Support from "../components/common/Support";
import Testimonial from "../components/common/Testimonial";
import Counter from "../components/home-three/Counter";
import Hero from "../components/home-four/Hero";
import Faq from "./faq";

export default function HomeThree() {
  return (
    <>
      {/* here section */}
      <Hero />

      {/* Counter section */}
      <Counter />

      {/* Contest section */}
      {/* <Contest /> */}

      {/* How it play section */}
      <HowToPlay />

      {/* Exhastive section */}
      <Exhaustive />

      {/* Roadmap section */}
      <Roadmap />

      {/* Tokenomics section */}
      {<Tokenomics />}

      {/* Testimonial section */}
      {/* <Testimonial /> */}

      {/* FAQ section */}
      <Faq />

      {/* Support section */}
      <Support />
    </>
  );
}
