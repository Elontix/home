import Image from "next/image";
import Marketing from "../components/affiliate/Marketing";
import Partner from "../components/affiliate/Partner";
import TopAffiliate from "../components/affiliate/TopAffiliate";
import Trusted from "../components/affiliate/Trusted";
import inner_hero_shape_2 from "/public/images/elements/inner-hero-shape-2.png";

const Affiliate = () => {
  return (
    <>
      {/* Partner section here */}
      <Partner />

      {/* Top Affiliate section here */}

      {/* Trusted section here */}
      <Trusted />
      <Marketing />
    </>
  );
};

export default Affiliate;
