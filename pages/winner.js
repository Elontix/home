import LatestWinner from "../components/common/LatestWinner";
import Mintbar from "../components/common/MintBar";
import Banner from "../components/winner/Banner";
import WinningNumber from "../components/winner/WinningNumber";

const Winner = () => {
  return (
    <>
      {/* Banner section here*/}
      <Banner />

      {/* Latest Winner section */}
      <LatestWinner />
    </>
  );
};

export default Winner;
