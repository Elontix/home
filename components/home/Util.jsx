import Image from "next/image";
import { colors } from "../../theme/color";
import elon from "/public/images/utils/elon_2.webp";

const Util = () => {
  return (
    <div className="container p-5 pt-120 pb-120">
      <h2 style={{ textAlign: "center" }} className="section-title py-4">
        OUR{" "}
        <span>
          <h2 className="tag section-title">UTILITES</h2>
        </span>
      </h2>
      <GradCard />

      <div className="row">
        <Charity />
      </div>
    </div>
  );
};

export default Util;

const Charity = () => {
  return (
    <div className="container charity_parent">
      <div className="charity"></div>
    </div>
  );
};

const GradCard = () => {
  return (
    <div class="card main__card">
      <div>
        <span class="card__line card__line_left"></span>
        <span class="card__line card__line_right"></span>
        <span class="card__line card__line_top"></span>
        <span class="card__line card__line_bottom"></span>

        <div className="p-5 util_card_gradient row">
          <div className="col-12 col-lg-6">
            <div className="title">LIFETIME DRAW</div>
            <div className="subtitle">Every Friday 3PM</div>
            <div className="util_card_gradient_content col-12">
              <div className="main_module_ul">
                <div className="timer_tick">
                  <div className="tick">10</div>
                  <div className="timer">Days</div>
                </div>
                <div className="timer_tick">
                  <div className="tick">8</div>
                  <div className="timer">Hours</div>
                </div>
                <div className="timer_tick">
                  <div className="tick">2</div>
                  <div className="timer">Minutes</div>
                </div>
                <div className="timer_tick">
                  <div className="tick">22</div>
                  <div className="timer">Seconds</div>
                </div>
              </div>

              <div className="sub_module_ul">
                <div className="bnb_value">22.82</div>
                <div className="bnb">BNB</div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Image
                className="elon_shoutout"
                style={{
                  transform: "translateX(-10px)",
                  zIndex: 0,
                }}
                src={elon}
                alt="elon"
              />
              <div className="mint_now_util">
                <h4 className="tag  text-center">Mint now</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
