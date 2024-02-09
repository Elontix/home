import { Element } from "react-scroll";

import HowElonTixWorks from "../components/common/HowToPlay";
import Roadmap from "../components/common/Roadmap";
import Hero from "../components/home/Hero";
import Faq from "../components/faq/FaqBody";
import WhatIsElonTix from "./affiliate";
import Marketing from "../components/affiliate/Marketing";
import Util from "../components/home/Util";
import Features from "../components/common/Features";
import Token from '../components/common/Token'

export default function HomeThree() {
  return (
    <>
      <Element name="home">
        <Hero />
      </Element>
      <Element name="about">
        <WhatIsElonTix />
      </Element>
      <Element name="utils">
        <Util />
      </Element>
      <HowElonTixWorks />
      <Marketing />
      <Features />
      <Element name="roadmap">
        <Roadmap />
      </Element>
      <Element name="token">
        <Token />
      </Element>
      <Faq />
    </>
  );
}
