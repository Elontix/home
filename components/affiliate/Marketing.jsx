import Image from "next/image";
import Slider from "react-slick";
import { markets } from "../../data/affiliate";

import "slick-carousel/slick/slick.css";
import { colors } from "../../theme/color";

const Marketing = () => {
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: false,
    speed: 700,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
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
    <section className="">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="client-wrapper">
              <h2 className="client-wrapper__title">
                OUR GLOBAL{" "}
                <span
                  style={{ padding: 0, margin: 0, color: colors.baseColor }}
                  className="client-wrapper__title tag"
                >
                  MARKETING PARTNERS
                </span>{" "}
              </h2>
              <div className="client-slider">
                <Slider {...settings}>
                  {markets.map((singleItm, i) => (
                    <div key={i} className="client-single">
                      <Image
                        src={singleItm}
                        style={{
                          padding: "2rem",
                          borderRadius: "100%",
                          maxWidth: "216px",
                        }}
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

export default Marketing;
