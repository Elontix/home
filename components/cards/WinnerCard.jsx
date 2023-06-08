import { colors } from "../../theme/color";

const WinnerCard = ({ winner }) => {
  const { title, works } = winner;
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
      <div
        style={{
          background: colors.baseColorTwo,
          borderTopLeftRadius: "1rem",
          borderBottomRightRadius: "1rem",
          padding: ".33rem .66rem",
          color: colors.baseColor,
        }}
      >
        LIFETIME DRAW
      </div>
      <div className="winner-card__content">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "1rem 5rem",
            color: "white",
          }}
        >
          <div>
            <h3 style={{ color: colors.baseColor }}> Ticket not minted</h3>
            <div> Draw Number #68 </div>
            <div> Draw Date: Sat May 27 2023</div>
          </div>

          <div>
            <h3 style={{ color: colors.baseColor }}> Winning Ticket</h3>
            <div
              style={{
                padding: "0 0 1rem 0",
                display: "flex",
                columnGap: "1rem",
              }}
            >
              {[4, 2, 3, 1, 5, 6].map((n, i) => (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: colors.baseColorTwo,
                    width: "36px",
                    height: "36px",
                    padding: ".2rem",
                    borderRadius: "2rem",
                  }}
                  key={i}
                >
                  {n}
                </div>
              ))}{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinnerCard;
