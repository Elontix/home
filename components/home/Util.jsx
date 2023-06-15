import Image from "next/image";
import Child from "/public/images/child.png";
import elon from "/public/images/elon_2.png";

const Util = () => {
  return (
    <div className="container p-4 pt-120 pb-120">
      <h2 style={{ textAlign: "center" }} className="section-title py-4">
        OUR{" "}
        <span>
          <h2 className="tag section-title">UTILITES</h2>
        </span>
      </h2>
      <div className="gx-5 gy-5 align-items-center row">
        <div className="col-12 col-xl-6">
          <GradCard />
        </div>
        <div style={{ cursor: "pointer" }} className="col-12 col-xl-6">
          <div
            style={{
              display: "flex",
              padding: "4rem 0 0 0",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image
              style={{
                maxWidth: "420px",
              }}
              src={elon}
              alt="elon"
            />
          </div>
          <div className="neu_grad">
            <h4 className="tag text-center">Mint now</h4>
          </div>
        </div>
      </div>

      <div className="row">
        <Charity />
      </div>

      {/* <div className="gx-5 gy-5 row">
        <div className="col-12 col-xl-6">
          <GradWinCard />
        </div>
        <div className="col-12 col-xl-6">
          <GradCard />
        </div>
      </div> */}
    </div>
  );
};

export default Util;

const Charity = () => {
  return (
    <div className="container " style={{ position: "relative" }}>
      <Image
        style={{
          backgroundSize: "contain",
          objectFit: "contain",
          objectPosition: "center bottom",
          margin: "auto",
          borderRadius: "1rem",
          maxHeight: "256px",
          minHeight: "256px",
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
          <div className="title">LIFETIME DRAW WINNING NUMBERS</div>
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
              columnGap: ".8rem",
            }}
          >
            {[1, 2, 4, 5, 6].map((s, i) => (
              <div key={i} className="tick_w">
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
    <div className="p-2 row util_card_gradient">
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
  );
};
