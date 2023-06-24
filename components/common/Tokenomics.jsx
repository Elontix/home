import Image from "next/image";
import { colors } from "../../theme/color";
import { FaHandHoldingHeart } from "react-icons/fa";
import { TokenChart } from "./TokenChart";
import elon from "/public/images/token.webp";
import { BiCopy, BiSelectMultiple } from "react-icons/bi";
import { MdOutlineHowToVote, MdOutlineLoyalty } from "react-icons/md";
import { TbPigMoney } from "react-icons/tb";

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
      className="tokenomics_card_text"
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
      value: "1,000,000,000,000 ",
    },
    {
      label: "Type",
      value: "BEP-20",
    },
    {
      label: "Contract Address",
      value: "0x212...........24a1",
      copy: true,
    },
  ];
  const tax = [
    {
      tax: "0% buy & 0% sell",
      text: "Join us on the tax-free express to financial freedom! 🚀💸",
    },
  ];

  const utils = [
    {
      icon: MdOutlineHowToVote,
      text: "Governance & Voting Rights",
    },
    {
      icon: TbPigMoney,
      text: "Decentralized Finance",
    },
    {
      icon: MdOutlineLoyalty,
      text: "Loyalty Programs",
    },
    {
      icon: BiSelectMultiple,
      text: "MultiChain Compatibility",
    },

    {
      icon: FaHandHoldingHeart,
      text: "Charity Integration",
    },
  ];

  return (
    <section className="px-1 latest-winner-section position-relative pt-120 pb-120">
      <div className="container">
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
                  <div className="col-lg-4 mb-30">
                    <div
                      style={{ background: "none" }}
                      className="number-check-wrapper"
                    >
                      <Image className="neu_grad_img" src={elon} alt="elon" />
                      <div className="neu_grad">
                        <h2 className="tag">Our Token</h2>
                        <h6 style={{ lineHeight: "1.4" }}>
                          A well-designed economic system that fuels growth and
                          sustainability
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div style={{ visibility: "hidden" }} className="col-lg-2">
                    x
                  </div>
                  <div className="col-lg-6 mb-30">
                    {/* Tokenomics */}
                    <div className="" style={{ paddingBottom: "3rem" }}>
                      <h2 className="pb-2">
                        Token
                        {"\u00A0"}
                        <span>
                          <h2 className="tag">Details</h2>
                        </span>
                      </h2>
                      <div
                        style={{
                          borderRadius: "1rem",
                          background: colors.bgOne,
                          boxShadow: `2px 2px 5px ${colors.baseColorTwo}, -2px -2px 5px ${colors.baseColor}`,
                        }}
                      >
                        {tokenomics.map((t, i) => (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              margin: ".5rem 0",
                              padding: "1rem 2rem",
                              borderBottom:
                                i === tokenomics.length - 1
                                  ? ""
                                  : `2px solid ${colors.baseColorTwo}`,
                            }}
                            key={i}
                          >
                            <h5>{t.label}</h5>
                            <h6 style={{ color: colors.baseColor }}>
                              {t.copy ? (
                                <span
                                  style={{
                                    margin: "0 1rem",
                                    cursor: "pointer",
                                  }}
                                >
                                  <BiCopy size={32} />
                                </span>
                              ) : null}
                              {t.value}
                            </h6>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Chart */}
                    <div className="" style={{ paddingBottom: "3rem" }}>
                      <h2 className="pb-2">
                        Token
                        {"\u00A0"}
                        <span>
                          <h2 className="tag">Distribution</h2>
                        </span>
                      </h2>
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
                            bg={"#66B032"}
                            text="Pinksale Presale - 57%"
                          />
                          <ChartText bg={"#0C47FE"} text="DEX Listing - 28%" />
                          <ChartText bg={"#FB9902 "} text="CEX Listing - 9%" />
                          <ChartText
                            bg={"#FE2712"}
                            text="Eco System & Treasury - 6%"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Token Tax */}
                    <div className="" style={{ paddingBottom: "3rem" }}>
                      <h2 className="pb-2">
                        Token
                        {"\u00A0"}
                        <span>
                          <h2 className="tag">Tax</h2>
                        </span>
                      </h2>
                      <div
                        style={{
                          borderRadius: "1rem",
                          background: colors.bgOne,
                          boxShadow: `2px 2px 5px ${colors.baseColorTwo}, -2px -2px 5px ${colors.baseColor}`,
                        }}
                      >
                        {tax.map((t, i) => (
                          <div
                            style={{
                              display: "grid",
                              justifyContent: "space-between",
                              margin: ".5rem 0",
                              padding: "1rem 2rem",
                              borderBottom:
                                i === tax.length - 1
                                  ? ""
                                  : `2px solid ${colors.baseColorTwo}`,
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
                      <h2 className="pb-2">
                        Token
                        {"\u00A0"}
                        <span>
                          <h2 className="tag">Utility</h2>
                        </span>
                      </h2>

                      <div
                        style={{
                          borderRadius: "1rem",
                          background: colors.bgOne,
                          boxShadow: `2px 2px 5px ${colors.baseColorTwo}, -2px -2px 5px ${colors.baseColor}`,
                        }}
                      >
                        {utils.map((t, i) => (
                          <div
                            style={{
                              columnGap: "1rem",
                              display: "flex",
                              justifyContent: "flex-start",
                              margin: ".5rem 0",
                              padding: "1rem 1rem",
                              borderBottom:
                                i === utils.length - 1
                                  ? ""
                                  : `2px solid ${colors.baseColorTwo}`,
                            }}
                            key={i}
                          >
                            {<t.icon size={24} color={colors.baseColor} />}
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
