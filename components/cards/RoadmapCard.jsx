import { colors } from "../../theme/color";

const RoadmapCard = ({ roadmap }) => {
  const { title, works } = roadmap;
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
          <h3>{title}</h3>
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
                  color: colors.paraColor,
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
