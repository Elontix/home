import Exhaustive from "../components/about/Exhaustive";
import Tokenomics from "../components/common/Tokenomics";
import HowToPlay from "../components/common/HowToPlay";
import Roadmap from "../components/common/Roadmap";
import Counter from "../components/home/Counter";
import Hero from "../components/home/Hero";
import Faq from "../components/faq/FaqBody";

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

      {/* FAQ section */}
      <Faq />
    </>
  );
}
