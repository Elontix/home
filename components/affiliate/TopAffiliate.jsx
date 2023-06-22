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
          {top_affiliate.map(({ id, name, earn, img, title, desg }, i) => (
            <div key={id} className="col-12 col-md-6 col-lg-4 mb-30">
              <div style={{ padding: 0 }} className="top-affiliate-card">
                {earn === null ? null : (
                  <div aria-expanded="false" className="accordion ">
                    <div
                      class="accordion-item"
                      aria-expanded="false"
                      style={{
                        backgroundImage: `radial-gradient(circle, #5a4bcc, #4538a2, #31277a, #1d1655, #0f0232)`,
                        outline: "none",
                        border: "none",
                        borderBottomRadius: "1rem",
                        boxShadow: `0px 0px 4px ${colors.baseColor}`,
                      }}
                    >
                      <h2
                        style={{
                          outline: "none",
                          border: "none",
                          borderRadius: 0,
                        }}
                        class="accordion-header"
                        id="headingOne"
                      >
                        <button
                          class="accordion-button"
                          type="button"
                          aria-expanded={true}
                          data-bs-toggle={"collapse"}
                          data-bs-target={"#collapseOne" + id.toString()}
                          aria-controls={"collapseOne" + id.toString()}
                          style={{
                            backgroundImage: `radial-gradient(circle, #5a4bcc, #4538a2, #31277a, #1d1655, #0f0232)`,
                            color: colors.baseColor,
                            textAlign: "center",
                            fontWeight: "bold",
                            outline: "none",
                            border: "none",
                            borderBottomRadius: "1rem",
                            boxShadow: `0px 0px 4px ${colors.baseColor}`,
                          }}
                        >
                          Know more about our {desg}
                        </button>
                      </h2>
                      <div
                        id={"collapseOne" + id.toString()}
                        class="accordion-collapse collapse"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body close">
                          <span
                            style={{
                              fontSize: "1rem",
                              color: colors.paraColor,
                              textAlign: "left",
                            }}
                            className="amount"
                          >
                            {earn}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div
                  style={{
                    background: colors.baseColorTwo,
                    paddingTop: "3rem",
                    margin: "auto",
                    borderTopRightRadius: i > 2 ? "100%" : "0",
                    borderTopLeftRadius: i > 2 ? "100%" : "0",
                    backgroundImage: `radial-gradient(circle, #5a4bcc, #4538a2, #31277a, #1d1655, #0f0232)`,
                    zIndex: 1,
                  }}
                >
                  <Image
                    style={{
                      zIndex: -1,
                      maxWidth: "256px",
                    }}
                    src={img}
                    alt={name}
                  />
                </div>
                <div
                  style={{
                    borderTop: `4px solid ${colors.baseColor}`,
                  }}
                  className="px-2 py-3"
                >
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopAffiliate;
