import Image from "next/image";
import Slider from "react-slick";
import { clients } from "../../data/affiliate";

import "slick-carousel/slick/slick.css";

const Marketing = () => {
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
    <section className="pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="client-wrapper">
              <h2 className="client-wrapper__title">
                OUR GLOBAL{" "}
                <span
                  style={{ padding: 0, margin: 0 }}
                  className="client-wrapper__title tag"
                >
                  MARKETING
                </span>{" "}
                PARTNERS
              </h2>
              <div className="client-slider">
                <Slider {...settings}>
                  {clients.map((singleItm, i) => (
                    <div key={i} className="client-single">
                      <Image src={singleItm} alt={`client ${i}`} />
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
