import Image from "next/image";
import play_1 from "/public/images/bingo.png";
import play_2 from "/public/images/chip.png";
import play_3 from "/public/images/slot.png";
import play_4 from "/public/images/money.png";

import play_bg from "/public/images/bg/elon_bg.jpeg";
import { colors } from "../../theme/color";

const HowToPlay = () => {
  return (
    <section className="position-relative pt-120 z-index-two pb-120 overflow-hidden">
      <div className="play-elements">
        <Image src={play_bg} alt="image" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-sm-start text-center">
            <div className="section-header">
              <h2 className="section-title"></h2>
              <h1
                style={{
                  textAlign: "center",
                  textShadow: `0px 0px 4px ${colors.bgOne}`,
                  paddingBottom: "4rem",
                }}
              >
                How Elontix works?
              </h1>
            </div>
          </div>
        </div>
        <div className="row mb-none-30 justify-content-xl-start justify-content-center">
          <div className="col-xl-3 col-lg-4 col-sm-6 mb-30">
            <div className="play-card play-card--one bg_img">
              <div className="play-card__icon">
                <Image
                  style={{ padding: "1rem" }}
                  src={play_1}
                  alt="image-icon"
                />
                <span className="play-card__number">01</span>
              </div>
              <div className="play-card__content">
                <h3 className="play-card__title tag mb-1">Choose</h3>
                <h5 className="">Connect your wallet</h5>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6 mb-30">
            <div className="play-card play-card--two bg_img">
              <div className="play-card__icon">
                <Image
                  style={{ padding: "1rem" }}
                  src={play_2}
                  alt="image-icon"
                />
                <span className="play-card__number">02</span>
              </div>
              <div className="play-card__content">
                <h3 className="play-card__title tag mb-1">buy</h3>
                <h5 className="">Purchase ElonTix tickets</h5>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6 mb-30">
            <div className="play-card play-card--three bg_img">
              <div className="play-card__icon">
                <Image
                  style={{ padding: "1rem" }}
                  src={play_3}
                  alt="image-icon"
                />
                <span className="play-card__number">03</span>
              </div>
              <div className="play-card__content">
                <h3 className="play-card__title tag mb-1">Track</h3>
                <h5 className="">Track and Verify</h5>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6 mb-30">
            <div className="play-card play-card--three bg_img">
              <div className="play-card__icon">
                <Image
                  style={{ padding: "1rem" }}
                  src={play_4}
                  alt="image-icon"
                />
                <span className="play-card__number">04</span>
              </div>
              <div className="play-card__content">
                <h3 className="play-card__title tag mb-1">Win</h3>
                <h5 className="">Claim your winnings</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToPlay;
