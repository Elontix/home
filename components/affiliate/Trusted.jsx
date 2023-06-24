import Image from "next/image";
import Slider from "react-slick";
import { clients } from "../../data/affiliate";

import "slick-carousel/slick/slick.css";
import { colors } from "../../theme/color";

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
                      <Image
                        style={{ borderRadius: "1rem" }}
                        src={singleItm}
                        alt={`client ${i}`}
                      />
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
