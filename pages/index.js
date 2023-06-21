import { Element } from "react-scroll";

import Tokenomics from "../components/common/Tokenomics";
import HowElonTixWorks from "../components/common/HowToPlay";
import Roadmap from "../components/common/Roadmap";
import Hero from "../components/home/Hero";
import Faq from "../components/faq/FaqBody";
import WhatIsElonTix from "./affiliate";
import Team from "../components/affiliate/TopAffiliate";
import Marketing from "../components/affiliate/Marketing";
import Util from "../components/home/Util";
import Features from "../components/common/Features";

export default function HomeThree() {
  return (
    <>
      <Element name="home">
        <Hero />
      </Element>
      <Element name="about">
        <WhatIsElonTix />
      </Element>
      <HowElonTixWorks />
      <Marketing />
      <Util />
      <Features />
      <Element name="roadmap">
        <Roadmap />
      </Element>
      <Element name="token">
        <Tokenomics />
      </Element>
      <Element name="team">
        <Team />
      </Element>
      <Faq />
    </>
  );
}
