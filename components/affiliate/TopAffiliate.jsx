import Image from "next/image";
import { top_affiliate, top_affiliates } from "../../data/affiliate";
import { colors } from "../../theme/color";

const TopAffiliate = () => {
  return (
    <section className="pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-header text-center">
              <h2 className="section-title style--two">
                Our{" "}
                <span className="section-title style--two tag">All-Star</span>{" "}
                Team
              </h2>
              <span className="section-sub-title">
                Innovators united, forging the future of blockchain lotteries
              </span>
            </div>
          </div>
        </div>

        <div className="row mb-none-30 justify-content-center">
          {top_affiliate.map(({ id, name, earn, img, title }) => (
            <div key={id} className="col-12 col-md-6 col-lg-4 mb-30">
              <div
                style={{
                  background: colors.baseColorTwo,
                  paddingTop: "2rem",
                  margin: "auto",
                  rowGap: "2rem",
                  borderTopRightRadius: "100%",
                  borderTopLeftRadius: "100%",
                  borderBottomLeftRadius: "5%",
                  borderBottomRightRadius: "5%",
                  borderTop: `24px solid ${colors.baseColorTwo}`,
                  borderBottom: `24px solid ${colors.bgOne}`,
                  borderLeft: `8px solid ${colors.bgOne}`,
                  borderRight: `8px solid ${colors.bgOne}`,
                  backgroundImage: `radial-gradient(circle, #5a4bcc, #4538a2, #31277a, #1d1655, #0f0232)`,
                  zIndex: 1,
                }}
                className="top-affiliate-card"
              >
                <div
                  style={{
                    borderBottom: `4px solid ${colors.baseColor}`,
                  }}
                >
                  <Image
                    style={{
                      zIndex: -1,
                      maxWidth: "256px",
                      margin: "0erem 0 1rem 0",
                    }}
                    src={img}
                    alt={name}
                  />
                </div>
                <div className="p-2">
                  <h3 className="name">{name}</h3>
                  <span
                    style={{
                      fontSize: ".9rem",
                      color: colors.baseColor,
                      fontWeight: "bolder",
                    }}
                  >
                    {title}
                  </span>
                </div>

                <div
                  style={{
                    borderBottom: `4px solid ${colors.baseColor}`,
                  }}
                ></div>
                <div className="px-4 py-2">
                  <span
                    style={{
                      fontSize: "1rem",
                      color: colors.paraColor,
                      textAlign: "center",
                    }}
                    className="amount"
                  >
                    {earn}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopAffiliate;
