import mint from "../data/mint";
import Image from "next/image";
import TicketGif from "/public/images/crypto/tickets.gif";

const Mint = () => {
  return (
    <>
      <div className="" style={{ minHeight: "25vh" }}></div>
      <div className="container" style={{ paddingBottom: "5rem" }}>
        <div class="row" style={{ rowGap: "2rem", alignItems: "center" }}>
          <div class="col-sm-12 col-lg-6">
            <div
              style={{ borderLeft: "2px dotted white", rowGap: "2rem" }}
              class="row px-3"
            >
              {mint.map((data, index) => (
                <div key={index}>
                  <div style={{ position: "relative" }}>
                    <div
                      style={{
                        position: "absolute",
                        left: "-42px",
                        color: "white",
                        width: "28px",
                        height: "28px",
                        background: "#ffb200",
                        color: "#0f0232",
                        textAlign: "center",
                        borderRadius: "1rem",
                        padding: ".2rem",
                      }}
                    >
                      {index + 1}
                    </div>
                    <h3 className="title">{data.header}</h3>
                    <span className="subtitle">{data.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div class="col-sm-12 col-lg-6">
            <div
              class="px-4 rounded"
              style={{
                textAlign: "center",
                backgroundImage:
                  "radial-gradient(circle, #5a4bcc, #4538a2, #31277a, #1d1655, #0f0232);",
                boxShadow: `0px 0px 12px -4px ${"black"}`,
              }}
            >
              <h3 className="py-4">Mint your ticket to reveal your NFT</h3>
              <Image height={320} width={520} src={TicketGif} alt="ok" />

              <div className="row py-4">
                <div className="col-6" style={{ textAlign: "left" }}>
                  <h4>DCB World x BRITTO</h4>
                  <h4>Price</h4>
                </div>
                <div className="col-6" style={{ textAlign: "right" }}>
                  <h5 style={{ color: "#ffb200" }}>Edition #000001</h5>
                  <h5 style={{ color: "#ffb200" }}>eth0.2</h5>
                </div>
                <div
                  className="row"
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  {[0, 1, 2, 3, 4, 5].map((i, k) => (
                    <div
                      style={{
                        background: "white",
                        maxWidth: "32px",
                        maxHeight: "32px",
                        minHeight: "32px",
                        minWidth: "32px",
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "0 .4rem",
                        borderRadius: "5px",
                        fontSize: "xl",
                        fontWeight: "bold",
                      }}
                      className="col"
                      key={k}
                    >
                      <div>{i}</div>
                    </div>
                  ))}
                </div>
                <div className="p-4">
                  <h4 style={{ cursor: "pointer" }}>GENERATE RANDOM TICKET</h4>
                  <div
                    style={{
                      width: "80%",
                      margin: "1rem auto",
                      height: "3px",
                      borderRadius: "20px",
                      background: "gray",
                    }}
                  ></div>
                  <button className="cmn-btn">connect wallet</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-shape"></div>
    </>
  );
};

export default Mint;
