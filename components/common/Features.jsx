import Image from "next/image";
import feature_1 from "/public/images/icon/feature/1.png";
import feature_2 from "/public/images/icon/feature/2.png";
import feature_3 from "/public/images/icon/feature/3.png";
import feature_4 from "/public/images/icon/feature/4.png";

import hero_4_obj from "/public/images/elements/hero-4-obj.png";

const Features = () => {
  return (
    <section className="pt-120 pb-120">
      <div
        style={{ objectFit: "contain", backgroundSize: "contain" }}
        className="hero__obj"
      >
        <Image
          style={{
            opacity: 0.33,
            position: "absolute",
            zIndex: -1,
            objectFit: "cover",
            backgroundSize: "cover",
          }}
          src={hero_4_obj}
          alt="image"
        />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-1 order-2">
            <div className="row mb-none-30">
              <div className="col-lg-6 mb-30">
                <div className="row mb-none-30">
                  <div className="col-lg-12 col-md-6 mb-30">
                    <div className="feature-card hover--effect-1">
                      <div className="feature-card__icon">
                        <Image src={feature_1} alt="image" />
                      </div>
                      <div className="feature-card__content">
                        <h3 className="feature-title">Daily Draws</h3>
                        <p>
                          Nulla ultricies in nulla ac efficitur. In vel neque
                          arcu. Donec quis
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6 mb-30">
                    <div className="feature-card hover--effect-1">
                      <div className="feature-card__icon">
                        <Image src={feature_3} alt="image" />
                      </div>
                      <div className="feature-card__content">
                        <h3 className="feature-title">Weekly Draws</h3>
                        <p>
                          Nulla ultricies in nulla ac efficitur. In vel neque
                          arcu. Donec quis
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-30 mt-lg-5">
                <div className="row mb-none-30">
                  <div className="col-lg-12 col-md-6 mb-30">
                    <div className="feature-card hover--effect-1">
                      <div className="feature-card__icon">
                        <Image src={feature_2} alt="image" />
                      </div>
                      <div className="feature-card__content">
                        <h3 className="feature-title">Special Draws</h3>
                        <p>
                          Nulla ultricies in nulla ac efficitur. In vel neque
                          arcu. Donec quis
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6 mb-30">
                    <div className="feature-card hover--effect-1">
                      <div className="feature-card__icon">
                        <Image src={feature_4} alt="image" />
                      </div>
                      <div className="feature-card__content">
                        <h3 className="feature-title">Lifetime Draws</h3>
                        <p>
                          Nulla ultricies in nulla ac efficitur. In vel neque
                          arcu. Donec quis
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-lg-2 order-1 text-lg-start text-center">
            <div className="section-header">
              <span className="section-sub-title">An Exhaustive list of</span>
              <h2 className="section-title">Our Lotteries.</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                pretium, elit quis vehicula interdum, sem metus iaculis sapien,
                sed bibendum lectus augue eu metus.
              </p>
              <a
                href="#0"
                className="d-flex align-items-center mt-3 justify-content-lg-start justify-content-center"
              >
                Show all lotteries
                <i className="las la-angle-double-right text-danger"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
