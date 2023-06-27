import Image from "next/image";
import Slider from "react-slick";
import { clients } from "../../data/affiliate";

import "slick-carousel/slick/slick.css";
import { colors } from "../../theme/color";
import Link from "next/link";
const links = [
  "https://www.dexview.com/eth/0x113864e2740c76d63336e481190be534f151d3c5",
  "https://www.pinksale.finance/launchpad/0x97BC243267747508ceb608f0Fc1444d1745FFc5F?chain=ETH",
  "https://verified.assuredefi.com/projects?recordId=recCBLklWKzl9SAWS",
];

const Trusted = () => {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    speed: 700,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="client-wrapper">
              <h2 className="client-wrapper__title">
                Audited and{" "}
                <span
                  className="client-wrapper__title"
                  style={{ color: colors.baseColor }}
                >{`KYC'ed`}</span>{" "}
                by
              </h2>
              <div className="client-slider">
                <Slider {...settings}>
                  {clients.map((singleItm, i) => (
                    <div key={i} className="client-single">
                      <Link href={links[i]} target="_blank">
                        <Image
                          style={{ borderRadius: "1rem" }}
                          src={singleItm}
                          alt={`client ${i}`}
                        />
                      </Link>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trusted;
