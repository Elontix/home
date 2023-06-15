import Image from "next/image";
import { affiliate_partner } from "../../data/affiliate";
import { colors } from "../../theme/color";

import elon_1 from "/public/images/elon_1.webp";
import elon_2 from "/public/images/elon_3.webp";

const Board = (props) => {
  return (
    <div
      style={{
        background: colors.bgOne,
        minHeight: "80px",
        width: "80%",
        margin: "auto",
        color: colors.bgOne,
        boxShadow: `2px 2px 5px black, -2px -2px 5px ${colors.baseColor}`,
        borderRadius: "5rem",
      }}
    >
      x
    </div>
  );
};

const Partner = () => {
  return (
    <div
      style={{
        position: "relative",
        backgroundImage:
          "linear-gradient(to bottom, #0f0232, #1b0d41, #2b1350, #3c185f, #4f1d6d, #4f1d6d, #4f1d6d, #4f1d6d, #3c185f, #2b1350, #1b0d41, #0f0232)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            zIndex: 999,
            top: "0%",
            padding: "2rem",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgb(53, 40, 130)",
            borderRadius: "4rem",
            boxShadow: `2px 2px 3px ${colors.bgOne}, -2px -2px 3px #69227F`,
          }}
        >
          <h2>
            {`" `}
            <span>
              <h2 className="tag">Elontix </h2>
            </span>{" "}
            - Your ticket to meme-filled riches,{" "}
            <span>
              <h2 className="tag">Elon Musk</h2>{" "}
            </span>{" "}
            style
            {` "`}
          </h2>
        </div>
      </div>

      <section style={{ padding: "8rem 0 0 0" }} className="position-relative">
        <div className="container pt-120">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <h1 style={{ textAlign: "center" }}>
                What is{" "}
                <span>
                  <h1 className="tag">Elontix?</h1>
                </span>{" "}
              </h1>
            </div>
            <div className="pb-120">
              <div
                style={{ alignItems: "center" }}
                className="row p-4 gx-5 gy-5"
              >
                <div className="col-12 col-xl-6">
                  <p
                    className="partner_text"
                    style={{
                      color: "white",
                      textAlign: "left",
                    }}
                  >
                    Elontix is an innovative NFT-based blockchain lottery
                    platform that embodies the visionary spirit of Elon Musk.
                    Inspired by
                    {`Musk's`} desire to revolutionize industries through
                    technological advancements, Elontix aims to redefine the
                    traditional lottery experience using the power of blockchain
                    and non-fungible tokens. By leveraging the decentralized
                    nature of blockchain, Elontix ensures transparency,
                    security, and fairness in every lottery draw, providing
                    participants with a seamless and trustworthy gaming
                    experience.
                  </p>
                </div>
                <div className="col-12 col-xl-6">
                  <div className="elon_parent">
                    <Image className="elontix_img" src={elon_2} alt="elon" />
                  </div>
                  <Board />
                </div>
              </div>
              <div style={{ alignItems: "center" }} className="row p-4">
                <div className="col-12 col-xl-6">
                  <Image
                    style={{ transform: "scaleX(-1)" }}
                    className="elontix_img elontix_img_hidden_b"
                    src={elon_1}
                    alt="elon"
                  />
                  <div className="elontix_img_hidden_b">
                    <Board />
                  </div>
                </div>

                <div className="col-12 col-xl-6 gy=5">
                  <p
                    className="partner_text"
                    style={{
                      color: "white",
                      textAlign: "right",
                    }}
                  >
                    Just as Musk envisions a future of sustainable energy and
                    space exploration, Elontix envisions a future where
                    lotteries are conducted with utmost integrity and
                    accessibility, empowering individuals worldwide to dream big
                    and participate in life-changing opportunities. With
                    Elontix, the convergence of blockchain and lottery creates a
                    new paradigm, reflecting Elon {`Musk's`} commitment to
                    pushing boundaries and challenging conventional norms.
                  </p>
                </div>

                <div className="col-12 col-xl-0">
                  <Image
                    style={{ transform: "scaleX(-1)" }}
                    className="elontix_img elontix_img_hidden_t"
                    src={elon_1}
                    alt="elon"
                  />
                  <div className="elontix_img_hidden_t">
                    <Board />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partner;
