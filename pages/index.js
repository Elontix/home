import Exhaustive from "../components/about/Exhaustive";
import Tokenomics from "../components/common/Tokenomics";
import HowToPlay from "../components/common/HowToPlay";
import Roadmap from "../components/common/Roadmap";
import Counter from "../components/home/Counter";
import Hero from "../components/home/Hero";
import Faq from "../components/faq/FaqBody";
import Affiliate from "./affiliate";
import TopAffiliate from "../components/affiliate/TopAffiliate";
import Marketing from "../components/affiliate/Marketing";

export default function HomeThree() {
  return (
    <>
      {/* here section */}
      <Hero />

      {/* What is Elontix section */}
      <Affiliate />

      {/* How to section */}
      <HowToPlay />

      {/* Exhastive section */}
      <Marketing />

      {/* Roadmap section */}
      <Roadmap />

      {/* Tokenomics section */}
      {<Tokenomics />}

      <TopAffiliate />

      {/* FAQ section */}
      <Faq />
    </>
  );
}
