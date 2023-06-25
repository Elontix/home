import Link from "next/link";

import { colors } from "../../theme/color";
import { useRouter } from "next/router";

const ToggleButton = (props) => {
  const router = useRouter();
  const isActive = router.asPath == props.link;

  return (
    <Link href={props.isLinkDeactive ? "" : props.link}>
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
      style={{ display: "flex", justifyContent: "center" }}
      className="container"
    >
      <div
        className="row mb-5 g-4"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{ display: "flex", justifyContent: "center" }}
          className="col-12 col-md-4"
        >
          <ToggleButton label="Mint" link="/mint-multiple" />
        </div>
        <div
          style={{ display: "flex", justifyContent: "center" }}
          className="col-12 col-md-4"
        >
          <ToggleButton label="My Collection" link="/collection" />
        </div>
        <div
          style={{ display: "flex", justifyContent: "center" }}
          className="col-12 col-md-4"
        >
          <ToggleButton isLinkDeactive={true} label="Winners" link="/winner" />
        </div>
      </div>
    </div>
  );
};

export default Mintbar;
