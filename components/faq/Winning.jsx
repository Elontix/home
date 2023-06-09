const Winning = () => {
  return (
    <div className="accordion cmn-accordion" id="faqAcc-three">
      <div className="card">
        <div className="card-header" id="h-4">
          <button
            className="btn btn-link btn-block text-left"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse4"
            aria-expanded="true"
            aria-controls="collapse4"
          >
            What happens if I win?
          </button>
        </div>
        <div
          id="collapse4"
          className="collapse show"
          aria-labelledby="h-4"
          data-bs-parent="#faqAcc-three"
        >
          <div className="card-body">
            <p>
              If you win, you will receive the prize associated with the
              contest/Lottery to your DEX wallet.
            </p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="headingThree">
          <button
            className="btn btn-link btn-block text-left collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            How are winners determined?
          </button>
        </div>
        <div
          id="collapseThree"
          className="collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#faqAcc-two"
        >
          <div className="card-body">
            <p>
              Winners are determined through a random drawing conducted on the
              blockchain using Chainlink VRF. The platform uses transparent and
              secure methods to generate random numbers or select the winning
              ticket/NFT, ensuring a fair outcome.
            </p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="h-7">
          <button
            className="btn btn-link btn-block text-left"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse7"
            aria-expanded="true"
            aria-controls="collapse7"
          >
            Can I sell or trade the NFTs I acquire through the lottery?
          </button>
        </div>
        <div
          id="collapse7"
          className="collapse show"
          aria-labelledby="h-7"
          data-bs-parent="#faqAcc-four"
        >
          <div className="card-body">
            <p>
              Yes, the NFTs bought on ElonTix platform can be sold, traded, or
              transferred to other individuals on compatible NFT marketplaces
              like OpenSea.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Winning;
