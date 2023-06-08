import LatestWinner from "../components/common/LatestWinner";
import Banner from "../components/winner/Banner";
import WinningNumber from "../components/winner/WinningNumber";

const Winner = () => {
  return (
    <>
      {/* Banner section here*/}
      <Banner />

      {/* Winning Number section */}
      <WinningNumber />

      {/* Latest Winner section */}
      <LatestWinner />
    </>
  );
};

export default Winner;
