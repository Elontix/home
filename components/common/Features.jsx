import Image from "next/image";
import feature_1 from "/public/images/clock.png";
import feature_2 from "/public/images/time.png";
import feature_3 from "/public/images/calendar.png";
import feature_4 from "/public/images/hourglass.png";

import hero_4_obj from "/public/images/elements/hero-4-obj.png";
import { colors } from "../../theme/color";
import Link from "next/link";
import { DEX } from "../../data/dex";

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
            width: "60%",
            left: "20%",
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
                        <Image
                          style={{ maxWidth: "100px" }}
                          src={feature_1}
                          alt="image"
                        />
                      </div>
                      <div className="feature-card__content">
                        <h3
                          style={{ color: colors.baseColor }}
                          className="feature-title"
                        >
                          Daily Draws
                        </h3>
                        <p>
                          These draws occur once every day, offering
                          participants the chance to win prizes on a daily
                          basis.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6 mb-30">
                    <div className="feature-card hover--effect-1">
                      <div className="feature-card__icon">
                        <Image
                          style={{ maxWidth: "100px" }}
                          src={feature_3}
                          alt="image"
                        />
                      </div>
                      <div className="feature-card__content">
                        <h3
                          style={{ color: colors.baseColor }}
                          className="feature-title"
                        >
                          Weekly Draws
                        </h3>
                        <p>
                          Weekly draws on ElonTix are conducted once every week,
                          typically on a specific day or time.
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
                        <Image
                          style={{ maxWidth: "100px" }}
                          src={feature_2}
                          alt="image"
                        />
                      </div>
                      <div className="feature-card__content">
                        <h3
                          style={{ color: colors.baseColor }}
                          className="feature-title"
                        >
                          Special Draws
                        </h3>
                        <p>
                          ElonTix also hosts special draws, which are notable
                          events that occur at predetermined intervals.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6 mb-30">
                    <div className="feature-card hover--effect-1">
                      <div className="feature-card__icon">
                        <Image
                          style={{ maxWidth: "100px" }}
                          src={feature_4}
                          alt="image"
                        />
                      </div>
                      <div className="feature-card__content">
                        <h3
                          style={{ color: colors.baseColor }}
                          className="feature-title"
                        >
                          Lifetime Draws
                        </h3>
                        <p>
                          In addition to the daily, weekly, and special draws,
                          ElonTix may feature progressive jackpot draws.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-lg-2 order-1 text-lg-start text-center">
            <div className="section-header p-0 m-4">
              <span
                className="section-sub-title p-0 m-0"
                style={{ color: "white" }}
              >
                An{" "}
                <span className="section-sub-title tag p-0 m-0">
                  Exhaustive
                </span>{" "}
                list of
              </span>
              <h2 className="section-title p-0 m-0">
                Our{" "}
                <span className="section-title tag p-0 m-0">Lotteries.</span>
              </h2>
              <p className="p-0 m-0">
                ElonTix Lottery Draws bring an electrifying blend of excitement
                and exclusivity. With each draw, participants get a chance to
                win incredible prizes and unforgettable experiences, all tied to
                the visionary world of Elon Musk.
              </p>
            </div>
            <div className="mx-5 mb-30 mb-md-0">
              <Link href={DEX}>
                <button style={{ transform: `scale(1.2)` }} className="cmn-btn">
                  MINT TICKETS
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
