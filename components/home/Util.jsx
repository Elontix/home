import Image from "next/image";
import { colors } from "../../theme/color";
import elon from "/public/images/utils/elon_2.webp";
import ticket from "/public/images/ticket.png";
import AppStore from "/public/images/download (1).png";
import PlayStore from "/public/images/download.png";
import Toast from "/public/images/toast.png";
import Bg from "/public/images/bg-util.png";

const Util = () => {
  return (
    <div className="">
      <div className="px-5 pt-5 container">
        <h2 style={{ textAlign: "center" }} className="section-title">
          OUR{" "}
          <span>
            <h2 className="tag section-title">UTILITES</h2>
          </span>
        </h2>
        <div className="row mb-5" style={{ rowGap: "2rem" }}>
          <div
            className="col-12 col-md-8"
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              className="ticket_blur"
              style={{
                position: "absolute",
                height: "100%",
                width: "180px",
                zIndex: 78,
                top: "-2%",
                background: colors.bgOne,
                right: 0,
                filter: "blur(25.3px)",
              }}
            ></div>
            <Image
              alt="ticket"
              src={ticket}
              width={1200}
              height={400}
              style={{ zIndex: 2 }}
            />
          </div>
          <div className="col-12 col-md-4">
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
      <div
        className="banner_util"
        style={{
          background: colors.baseColor,
          width: "100vw",
          height: "180px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          columnGap: "2rem",
        }}
      >
        <div
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "1.3rem",
          }}
        >
          <h4 style={{ color: "black" }}>
            Download ElonTix app and get your NFT.
          </h4>
          <h4 style={{ color: "black" }}>No crypto, no wallet needed</h4>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Image src={AppStore} />
          <Image src={PlayStore} />
        </div>
      </div>

      <div className="container">
        <GradCard />
        <div className="row">
          <Charity />
        </div>
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
    <div style={{ marginTop: "3rem" }} class="card main__card card_bg_img">
      <div>
        <span class="card__line card__line_left"></span>
        <span class="card__line card__line_right"></span>
        <span class="card__line card__line_top"></span>
        <span class="card__line card__line_bottom"></span>

        <div style={{ zIndex: 2 }} className="p-5 util_card_gradient row ">
          <div
            className="col-12 col-lg-6 util_bg"
            style={{
              padding: "2rem 0",
              borderRadius: "1rem",
              boxShadow: `0px 0px 5px ${colors.baseColor}`,
            }}
          >
            <div className="title">NEXT DRAW IN</div>
            <div className="subtitle"></div>
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
                <div className="bnb">WIN UPTO</div>
                <div className="bnb_value tag">300</div>
                <div className="bnb">BNB</div>
              </div>
            </div>
          </div>
          <div
            className="col-12 col-lg-6 util_bg"
            style={{
              padding: "2rem 0",
              borderRadius: "0rem",
              boxShadow: `0px 0px 5px ${colors.baseColor}`,
              border: `8px solid ${colors.baseColor}`,
              background: Bg,
            }}
          >
            <Image
              style={{
                position: "absolute",
                left: "30px",
                top: "-60px",
              }}
              src={Toast}
              alt="source"
              height={256}
              width={256}
            />
            <div className="subtitle"></div>
            <div className="util_card_gradient_content col-12 ">
              <div
                style={{
                  fontSize: "1rem",
                  display: "flex",
                  justifyContent: "flex-start",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  padding: "1rem 2rem",
                  paddingTop: "4rem",
                  lineHeight: "1",
                }}
              >
                <div className="bnb">GUARANTEED WIN</div>
                <div className="bnb_value tag">300 BNB</div>
                <h4 className="tag">100 BNB guaranteed for 3 winners</h4>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  padding: "0 2rem",
                }}
              >
                <button className="cmn-btn">Mint Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
