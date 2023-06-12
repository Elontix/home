import { colors } from "../../theme/color";

const ticketData = (n) => {
  try {
    let t = [];
    for (let i = 0; i < n.length; i++) {
      t.push(Number(n[i]));
    }
    return t;
  } catch (error) {
    console.log(error);
    return [];
  }
};
const WinnerCard = ({ date, no, ticket, isMinted }) => {
  const t = ticketData(String(ticket).toString());
  const p = new Date(date * 1000).toISOString();

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
            <h3 style={{ color: colors.baseColor }}>
              {" "}
              {isMinted ? "Ticket minted" : " Ticket not minted"}{" "}
            </h3>
            <div> Draw Number #{no} </div>
            <div> Draw Date: {p}</div>
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
              {t !== null
                ? t.map((n, i) => (
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
                  ))
                : null}{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinnerCard;
