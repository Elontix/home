import { useState } from "react";

import roadmapData from "../../data/roadmap";
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
          <div
            className="tab-pane fade"
            id="money"
            role="tabpanel"
            aria-labelledby="money-tab"
          >
            <div className="row mb-none-30">
              <div className="col-lg-4 mb-30">
                <div
                  style={{ background: "none" }}
                  className="number-check-wrapper"
                >
                  <h2 className="section-title">Our roadmap</h2>
                  <span className="section-sub-title">
                    Clear goals, great planning, flawless execution.
                  </span>
                </div>
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
    </section>
  );
};

export default Roadmap;
