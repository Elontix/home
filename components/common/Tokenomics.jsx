import Image from "next/image";
import { useState } from "react";
import winnerData from "../../data/winnerData";
import Logo from "/public/images/main.webp";
import { colors } from "../../theme/color";
import { BsStars } from "react-icons/bs";
import { FaBurn, FaCrown, FaHandPeace } from "react-icons/fa";
import { TokenChart } from "./TokenChart";

const TickColor = (props) => (
  <div
    style={{
      boxShadow: "0px 0px 0px 1px #27374D",
      borderRadius: "4px",
      background: props.bg,
      height: "24px",
      width: "24px",
    }}
  ></div>
);

const ChartText = (props) => {
  return (
    <div
      style={{
        width: "100%",
        background: colors.baseColorTwo,
        borderRadius: ".5rem",
        padding: ".5rem",
        color: "#ffffff",
        display: "flex",
        columnGap: ".5rem",
        alignItems: "center",
      }}
    >
      <TickColor bg={props.bg} /> <div>{props.text}</div>
    </div>
  );
};

const LatestWinner = () => {
  const tokenomics = [
    {
      label: "Name",
      value: "ELONTIX",
    },
    {
      label: "Ticker",
      value: "$ELONTIX",
    },
    {
      label: "Total Supply",
      value: "10,000,000,000,000 ",
    },
    {
      label: "Type",
      value: "BEP-20",
    },
    {
      label: "Contract Address",
      value: "0x212......",
    },
  ];
  const tax = [
    {
      tax: "3% Buy",
      text: "buyback & burn",
    },
    {
      tax: "3% Sell",
      text: "marketing & operations, staking rewards & tournament prize pools",
    },
  ];

  const utils = [
    {
      icon: BsStars,
      text: "Governance & Voting Rights",
    },
    {
      icon: FaBurn,
      text: "Decentralized Finance",
    },
    {
      icon: FaHandPeace,
      text: "Loyalty Programs",
    },
    {
      icon: FaCrown,
      text: "MultiChain Compatibility",
    },

    {
      icon: FaCrown,
      text: "Charity Integration",
    },
  ];

  return (
    <section className="px-1 latest-winner-section position-relative pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-header text-center"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="tab-content mt-50" id="winnerTabContent">
              <div
                className="tab-pane fade show active"
                id="dream"
                role="tabpanel"
                aria-labelledby="dream-tab"
              >
                <div className="row mb-none-30">
                  <div className="col-lg-6 mb-30">
                    <div
                      style={{ background: "none" }}
                      className="number-check-wrapper"
                    >
                      <Image
                        className="rotate-x"
                        src={Logo}
                        height={412}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 mb-30">
                    <div className="pb-120">
                      <h1>$ELONTIX Token</h1>
                      <h3 style={{ color: colors.baseColor }}>
                        Buy Now on pancakeswap
                      </h3>
                    </div>
                    {/* Tokenomics */}
                    <div className="pb-120">
                      <h2>Tokenomics</h2>
                      <div>
                        {tokenomics.map((t, i) => (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              margin: ".5rem 0",
                              padding: "1rem 0",
                              borderBottom: `1px groove ${colors.baseColorTwo}`,
                            }}
                            key={i}
                          >
                            <h4>{t.label}</h4>
                            <h5 style={{ color: colors.baseColor }}>
                              {t.value}
                            </h5>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Chart */}
                    <div className="pb-120">
                      <h2>Token Distribution</h2>
                      <div
                        style={{
                          margin: "1rem 0",
                          borderRadius: "5px",
                        }}
                      >
                        <TokenChart />
                        <div
                          style={{
                            padding: "1rem",
                            display: "grid",
                            rowGap: ".5rem",
                            columnGap: ".5rem",
                            gridTemplateColumns: "1fr 1fr",
                          }}
                        >
                          <ChartText
                            bg={"#01E272"}
                            text="Pinksale Presale - 57%"
                          />
                          <ChartText bg={"#544FC5"} text="DEX Listing - 28%" />
                          <ChartText bg={"#2CAFFE"} text="CEX Listing - 9%" />
                          <ChartText
                            bg={"#FE6A35"}
                            text="Eco System & Treasury - 6%"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Token Tax */}
                    <div className="pb-120">
                      <h2>Token Tax</h2>
                      <div>
                        {tax.map((t, i) => (
                          <div
                            style={{
                              display: "grid",
                              justifyContent: "space-between",
                              margin: ".5rem 0",
                              padding: "1rem 0",
                              borderBottom: `1px groove ${colors.baseColorTwo}`,
                            }}
                            key={i}
                          >
                            <h3 style={{ color: colors.baseColor }}>{t.tax}</h3>
                            <h5>{t.text}</h5>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Token Utility */}
                    <div className="pb-90">
                      <h2>Token Utility</h2>
                      <div>
                        {utils.map((t, i) => (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "flex-start",
                              columnGap: "1.25rem",
                              margin: ".5rem 0",
                              padding: "1rem 0",
                              borderBottom: `1px groove ${colors.baseColorTwo}`,
                            }}
                            key={i}
                          >
                            {<t.icon size={16} color={colors.baseColor} />}
                            <h5>{t.text}</h5>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestWinner;
