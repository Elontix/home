import Image from "next/image";
import { colors } from "../../theme/color";
import play_el from "/public/images/elements/play-el.png";
import play_1 from "/public/images/icon/play/1.png";
import play_2 from "/public/images/icon/play/2.png";
import play_3 from "/public/images/icon/play/3.png";
import play_bg from "/public/images/bg/contest-bg.jpg";

const HowToPlay = () => {
  return (
    <section className="position-relative z-index-two pt-120 pb-120 overflow-hidden">
      <div className="play-elements">
        <Image src={play_bg} alt="image" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 text-sm-start text-center">
            <div className="section-header">
              <h2 className="section-title">How Elontix works?</h2>
              <p style={{ color: colors.baseColor }}>
                Follow these 4 easy steps!{" "}
              </p>
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
                <p>Connect your wallet</p>
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
                <p>Purchase ElonTix tickets</p>
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
                <p>Track and Verify</p>
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
                <p>Claim your winnings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToPlay;
