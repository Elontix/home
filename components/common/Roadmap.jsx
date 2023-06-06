import { useState } from "react";

import Link from "next/link";
import roadmapData from "../../data/roadmap";
import TicketCheckCard from "../cards/TicketCheckCard";
import RoadMapCard from "../cards/RoadmapCard";

const Roadmap = () => {
  const [roadmap, setRoadmap] = useState(roadmapData);

  return (
    <section className="latest-winner-section position-relative pt-120 pb-120">
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
                  <div className="col-lg-4 mb-30">
                    {/* ticket check card */}
                    <TicketCheckCard />
                  </div>
                  <div className="col-lg-8 mb-30">
                    {/* winner card */}

                    {roadmap.map((road, index) => (
                      <RoadMapCard key={index} roadmap={road} />
                    ))}

                    {/* <div className="btn-grp">
                      <Link href="winner" className="btn-border">
                        browse more
                      </Link>
                    </div> */}
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="bike"
                role="tabpanel"
                aria-labelledby="bike-tab"
              >
                <div className="row mb-none-30">
                  <div className="col-lg-4 mb-30">
                    {/* ticket check card */}
                    <TicketCheckCard />
                  </div>
                  <div className="col-lg-8 mb-30">
                    {/* winner card */}

                    {roadmap.map((road, index) => (
                      <RoadMapCard key={index} roadmap={road} />
                    ))}
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="watch"
                role="tabpanel"
                aria-labelledby="watch-tab"
              >
                <div className="row mb-none-30">
                  <div className="col-lg-4 mb-30">
                    {/* ticket check card */}
                    <TicketCheckCard />
                  </div>
                  <div className="col-lg-8 mb-30">
                    {/* winner card */}

                    {roadmap.map((road, index) => (
                      <RoadMapCard key={index} roadmap={road} />
                    ))}
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="laptop"
                role="tabpanel"
                aria-labelledby="laptop-tab"
              >
                <div className="row mb-none-30">
                  <div className="col-lg-4 mb-30">
                    {/* ticket check card */}
                    <TicketCheckCard />
                  </div>
                  <div className="col-lg-8 mb-30">
                    {/* winner card */}

                    {roadmap.map((road, index) => (
                      <RoadMapCard key={index} roadmap={road} />
                    ))}
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="money"
                role="tabpanel"
                aria-labelledby="money-tab"
              >
                <div className="row mb-none-30">
                  <div className="col-lg-4 mb-30">
                    {/* ticket check card */}
                    <TicketCheckCard />
                  </div>
                  <div className="col-lg-8 mb-30">
                    {/* winner card */}
                    {roadmap.map((road, index) => (
                      <RoadMapCard key={index} roadmap={road} />
                    ))}
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

export default Roadmap;
