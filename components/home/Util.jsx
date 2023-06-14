import Image from "next/image";
import { colors } from "../../theme/color";
import Child from "/public/images/child.jpg";

const Util = () => {
  return (
    <div className="container pt-120 pb-120">
      <h2 style={{ textAlign: "center" }} className="section-title py-4">
        OUR{" "}
        <span>
          <h2 className="tag section-title">UTILITES</h2>
        </span>
      </h2>
      <div className="gx-5 row">
        <div className="col-6">
          <GradCard />
        </div>
        <div className="col-6">
          <GradCard />
        </div>
      </div>
      <div
        style={{ display: "flex", padding: "4rem 0", justifyContent: "center" }}
      >
        <button className="cmn-btn">Discover more</button>
      </div>
      <div className="pb-120 row">
        <Charity />
      </div>

      <div className="gx-5 row">
        <div className="col-6">
          <GradWinCard />
        </div>
        <div className="col-6">
          <GradCard />
        </div>
      </div>
    </div>
  );
};

export default Util;

const Charity = () => {
  return (
    <div className="container" style={{ position: "relative" }}>
      <div
        className="p-4"
        style={{
          position: "absolute",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                color: colors.baseColor,
              }}
            >
              OUR CHARITY PARTNER
            </div>
            <div
              style={{ fontWeight: "bold", fontSize: "1.2rem", color: "white" }}
            >
              Part of our minting fees will be donated to children impacted
            </div>
            <div
              style={{ fontWeight: "bold", fontSize: "1.2rem", color: "white" }}
            >
              by conflict through our partner charity INARA
            </div>
          </div>
          <div
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              color: colors.baseColor,
            }}
          >
            Logo
          </div>
        </div>
      </div>
      <Image
        style={{
          height: "20vh",
          backgroundSize: "cover",
          objectFit: "cover",
          margin: "auto",
        }}
        alt="child"
        src={Child}
      ></Image>
    </div>
  );
};

const GradWinCard = () => {
  return (
    <div className="p-4 row util_card_gradient">
      <div
        className="row"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          rowGap: "1rem",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "1.6rem",
              fontWeight: "bold",
              color: colors.baseColor,
            }}
          >
            LIFETIME DRAW WINNING NUMBERS
          </div>
          <p>Sat Jun 10 2023</p>
        </div>
        <div
          style={{
            lineHeight: "1",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              justifyContent: "center",
              columnGap: "1rem",
            }}
          >
            {[1, 2, 4, 5, 6].map((s, i) => (
              <div
                style={{
                  background: colors.bgOne,
                  borderRadius: "4rem",
                  color: colors.baseColor,
                  fontSize: "42px",
                  minHeight: "64px",
                  maxHeight: "64px",
                  minWidth: "64px",
                  maxWidth: "64px",
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                key={i}
                className="tick_w"
              >
                {s}
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "start" }}>
          <button className="cmn-btn">Previous Result</button>
        </div>
      </div>
    </div>
  );
};

const GradCard = () => {
  return (
    <div className="p-4 row util_card_gradient">
      <div className="row col-6">
        <div style={{ fontSize: "1.4rem", color: colors.baseColor }}>
          LIFETIME DRAW
        </div>
        <div
          style={{
            lineHeight: "1",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <div style={{ fontSize: "4rem", color: colors.baseColor }}>22.82</div>
          <div style={{ fontSize: "2rem", color: colors.baseColor }}>ETH</div>
        </div>
      </div>

      <div
        style={{
          rowGap: "1rem",
          display: "flex",
          flexDirection: "column",
        }}
        className="col-6"
      >
        <div style={{ fontSize: "1.4rem", color: "white" }}>
          Every Friday 3PM ET
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            justifyContent: "center",
            columnGap: "1rem",
          }}
        >
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
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button className="cmn-btn">Mint now</button>
        </div>
      </div>
    </div>
  );
};
