import { colors } from "../../theme/color";

const RoadmapCard = ({ roadmap, index }) => {
  const { title, works, status } = roadmap;
  function bgReturn(s) {
    if (s === "IN_PROGRESS") return "#C06ED8";
    if (s === "DONE") return "#C06ED8";
    if (s === "LATER") return "white";
  }
  return (
    <div
      style={{
        borderRadius: "1rem",
        background: colors.bgOne,
        boxShadow: `2px 2px 3px ${"black"}, -2px -2px 3px ${
          colors.baseColorTwo
        }`,
      }}
      className="winner-card mb-30"
    >
      <div className="winner-card__content">
        <div className="content-top">
          <h3>
            Phase {index + 1}
            {"\u00A0"}-{"\u00A0"}
            <span>
              <h3 className="tag">{title}</h3>
            </span>
          </h3>
        </div>
        <div className="content-bottom">
          {works.map((s, i) => (
            <div
              style={{
                display: "flex",
                rowGap: "1rem",
                columnGap: "1rem",
              }}
              key={i}
            >
              <div
                style={{
                  padding: ".5rem",
                  margin: ".2rem",
                  background: colors.baseColorTwo,
                  borderRadius: ".3rem",
                  color: "white",
                }}
              >
                {s}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoadmapCard;
