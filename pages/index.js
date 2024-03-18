import { Element } from "react-scroll";

import HowElonTixWorks from "../components/common/HowToPlay";
import Hero from "../components/home/Hero";
import WhatIsElonTix from "./affiliate";
import Util from "../components/home/Util";
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
      <Element name="token">
        <Token />
      </Element>
    </>
  );
}
