import { useState } from "react";

import roadmapData from "../../data/roadmap";
import { colors } from "../../theme/color";
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
          <div className="row mb-none-30">
            <div className="col-lg-4 mb-30">
              <div className="number-check-wrapper">
                <h4
                  style={{
                    color: colors.baseColor,
                    fontSize: "4rem",
                    lineHeight: ".8",
                    marginBottom: "1rem",
                  }}
                >
                  Our roadmap
                </h4>
                <p style={{ lineHeight: "1" }}>
                  Clear goals, great planning, flawless execution.
                </p>
              </div>
            </div>
            <div className="col-lg-8 mb-30">
              {roadmap.map((road, index) => (
                <RoadMapCard key={index} roadmap={road} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
