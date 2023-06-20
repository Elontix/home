import Image from "next/image";
import play_1 from "/public/images/icon/play/1.png";
import play_2 from "/public/images/icon/play/2.png";
import play_3 from "/public/images/icon/play/3.png";
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
              <h1 style={{ textAlign: "center" }}>How Elontix works?</h1>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <p
                  className="pb-0 pb-lg-120 tag"
                  style={{
                    textAlign: "center",
                    fontWeight: "bolder",
                    fontSize: "1.2rem",
                    padding: ".2rem 1rem 1rem 1rem",
                    borderRadius: "1rem",
                    background: colors.bgOne,
                    color: colors.baseColor,
                  }}
                >
                  Follow these 4 easy steps!{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-none-30 justify-content-xl-start justify-content-center">
          <div className="col-xl-3 col-lg-4 col-sm-6 mb-30">
            <div className="play-card play-card--one bg_img">
              <div className="play-card__icon">
                <Image src={play_1} alt="image-icon" />
                <span className="play-card__number">01</span>
              </div>
              <div className="play-card__content">
                <h3 className="play-card__title">Choose</h3>
                <h5 className="tag">Connect your wallet</h5>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6 mb-30">
            <div className="play-card play-card--two bg_img">
              <div className="play-card__icon">
                <Image src={play_2} alt="image-icon" />
                <span className="play-card__number">02</span>
              </div>
              <div className="play-card__content">
                <h3 className="play-card__title">buy</h3>
                <h5 className="tag">Purchase ElonTix tickets</h5>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6 mb-30">
            <div className="play-card play-card--three bg_img">
              <div className="play-card__icon">
                <Image src={play_3} alt="image-icon" />
                <span className="play-card__number">03</span>
              </div>
              <div className="play-card__content">
                <h3 className="play-card__title">Track</h3>
                <h5 className="tag">Track and Verify</h5>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6 mb-30">
            <div className="play-card play-card--three bg_img">
              <div className="play-card__icon">
                <Image src={play_3} alt="image-icon" />
                <span className="play-card__number">04</span>
              </div>
              <div className="play-card__content">
                <h3 className="play-card__title">Win</h3>
                <h5 className="tag">Claim your winnings</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToPlay;
