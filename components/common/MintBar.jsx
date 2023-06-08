import Link from "next/link";

import { colors } from "../../theme/color";
import { useRouter } from "next/router";

const ToggleButton = (props) => {
  const router = useRouter();
  const isActive = router.asPath == props.link;

  return (
    <Link href={props.link}>
      <div
        style={{
          background: isActive ? colors.baseColor : colors.baseColorTwo,
          boxShadow: `0px 0px 4px black`,
          padding: "1rem",
          color: "white",
          width: "180px",
          textAlign: "center",
          fontSize: "18px",
          fontWeight: "bolder",
          borderRadius: ".25rem",
        }}
        className="col-6"
      >
        {props.label}
      </div>
    </Link>
  );
};

const Mintbar = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        columnGap: "2rem",
        marginBottom: "4rem",
      }}
    >
      <ToggleButton label="Mint" link="/mint" />
      <ToggleButton label="My Collection" link="/collection" />
    </div>
  );
};

export default Mintbar;
