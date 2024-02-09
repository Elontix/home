import Image from "next/image";
import { colors } from "../../theme/color";
import elon from "/public/images/utils/elon_2.webp";
import ticket from "/public/images/ticket.png";
import AppStore from "/public/images/play.png";
import PlayStore from "/public/images/download.png";
import Link from "next/link";
import { useCountdown } from "./Timer";

const Util = () => {
  return (
    <div className="">
      <div className="pt-5 container">
        <h2
          style={{ textAlign: "center", zIndex: 999999, marginBottom: "1rem" }}
          className="section-title"
        >
          OUR{" "}
          <span>
            <h2 className="tag section-title">UTILITES</h2>
          </span>
        </h2>
        <div className="row gy-5 gx-5 mb-5" style={{ rowGap: "2rem" }}>
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
                transform: `scale(1.3)`,
                zIndex: 3,
                top: "0%",
                background: colors.bgOne,
                right: 0,
                filter: "blur(25.3px)",
              }}
            ></div>
            <Image
              alt="ticket"
              src={ticket}
              style={{
                transform: `scale(1.1)`,
                zIndex: 2,
              }}
              width={1800}
              height={800}
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
                className="elon_shoutout px-4"
                style={{
                  transform: "translateX(-10px)",
                  zIndex: 0,
                }}
                src={elon}
                alt="elon"
              />
              <div className="mint_now_util">
                <Link
                  style={{
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  href="/mint"
                >
                  <h4 className="tag  text-center">Mint now</h4>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="banner_util "
        style={{
          background: colors.baseColor,
          width: "100vw",
          height: "240px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          columnGap: "8rem",
        }}
      >
        <div
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "1.3rem",
          }}
          className="px-2 pb-0"
        >
          <h3 style={{ color: "black" }}>ElonTix will soon be available on</h3>
          <h3 style={{ color: "black" }}>
            <span>
              <h3 style={{ color: "white" }}>App Store</h3>
            </span>
            {"\u00A0"}&{"\u00A0"}
            <span>
              <h3 style={{ color: colors.bgTwo }}> Play Store</h3>
            </span>
          </h3>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "1rem",
          }}
          className="px-5"
        >
          <Image src={AppStore} alt="app" />
          <Image src={PlayStore} alt="play" />
        </div>
      </div>

      <GradCard />
      <div className="container">
        <div className="row my-5 my-md-0">
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
const timeC = new Date(2024, 1, 10, 17, 30, 0);

const GradCard = () => {
  const [days, hours, minutes, seconds] = useCountdown(timeC);
  console.log(days, hours, minutes, seconds);
  return (
    <div style={{}} class="card main__card card_bg_img">
      <div>
        <span class="card__line card__line_left"></span>
        <span class="card__line card__line_right"></span>
        <span class="card__line card__line_top"></span>
        <span class="card__line card__line_bottom"></span>

        <div
          style={{
            zIndex: 2,
          }}
          className="p-0 py-2 p-md-5 gy-5 gx-2 util_card_gradient row "
        >
          <div
            className="col-12 col-lg-6 util_bg_1"
            style={{
              padding: "2rem 0",
              boxShadow: `0px 0px 5px ${colors.bgOne}`,
              border: `8px solid ${colors.baseColor}`,
            }}
          >
            <h1
              className="px-2 tag text-align-center"
              style={{
                textShadow: `-2px -2px 5px ${colors.baseColor}, 2px 2px 5px ${colors.bgOne}`,
              }}
            >
              SPECIAL{" "}
              <span>
                <h1>DRAW</h1>
              </span>
            </h1>
            <div className="subtitle"></div>
            <div className="util_card_gradient_content col-12">
              <div className="main_module_ul">
                <div className="timer_tick">
                  <div className="tick">{days}</div>
                  <div className="timer">Days</div>
                </div>
                <div className="timer_tick">
                  <div className="tick">{hours}</div>
                  <div className="timer">Hours</div>
                </div>
                <div className="timer_tick">
                  <div className="tick">{minutes}</div>
                  <div className="timer">Minutes</div>
                </div>
                <div className="timer_tick">
                  <div className="tick">{seconds}</div>
                  <div className="timer">Seconds</div>
                </div>
              </div>

              <div className="sub_module_ul">
                <div className="bnb">WIN UPTO</div>
                <div className="bnb_value tag">1</div>
                <div className="bnb">ETH</div>
              </div>
            </div>
          </div>
          <div
            className="col-12 col-lg-6 util_bg_2"
            style={{
              padding: "2rem 0",
              borderRadius: "0rem",
              boxShadow: `-5px -5px 5px ${colors.bgOne}`,
              border: `8px solid ${colors.baseColor}`,
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <h1
              className="px-2 tag text-align-center"
              style={{
                textShadow: `-2px -2px 5px ${colors.baseColor}, 2px 2px 5px ${colors.bgOne}`,
              }}
            >
              LIFETIME{" "}
              <span>
                <h1>DRAW</h1>
              </span>
            </h1>
            <div className="subtitle"></div>
            <div className="util_card_gradient_content col-12">
              <div className="main_module_ul">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    flexDirection: "row",
                    columnGap: ".2rem",
                    border: `2px 2px 4px ${colors.baseColor}`,
                  }}
                >
                  <div className="timer_tick">
                    <div
                      style={{
                        color: colors.baseColor,
                        minWidth: "128px",
                        borderRadius: ".4rem",
                      }}
                      className="tick bg-dark"
                    >
                      200
                    </div>
                    <div style={{ fontSize: "1.2rem" }} className="timer">
                      MINTED
                    </div>
                  </div>
                  <div
                    style={{
                      color: colors.baseColor,
                      padding: "0 1rem",
                      borderRadius: ".4rem",
                      marginTop: "1rem",
                    }}
                  >
                    |
                  </div>
                  <div className="timer_tick">
                    <div
                      style={{
                        color: colors.baseColor,
                        minWidth: "128px",
                        borderRadius: ".4rem",
                      }}
                      className="tick bg-dark"
                    >
                      1000
                    </div>
                    <div style={{ fontSize: "1.2rem" }} className="timer">
                      NFTs
                    </div>
                  </div>
                </div>
              </div>

              <div className="sub_module_ul bg-dark">
                <div className="bnb">WIN UPTO</div>
                <div className="bnb_value tag">10</div>
                <div className="bnb">ETH</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
