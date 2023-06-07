const ResultsAndAlerts = () => {
  return (
    <div className="accordion cmn-accordion" id="faqAcc-four">
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
      <div className="card">
        <div className="card-header" id="h-8">
          <button
            className="btn btn-link btn-block text-left collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse8"
            aria-expanded="false"
            aria-controls="collapse8"
          >
            Is the platform secure and trustworthy?
          </button>
        </div>
        <div
          id="collapse8"
          className="collapse"
          aria-labelledby="h-8"
          data-bs-parent="#faqAcc-four"
        >
          <div className="card-body">
            <p>
              {`ElonTix leverages the security and immutability of the blockchain,
              making them inherently secure and transparent. However, it's
              essential to conduct your own research and due diligence before
              participating.`}
            </p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="h-9">
          <button
            className="btn btn-link btn-block text-left collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse9"
            aria-expanded="false"
            aria-controls="collapse9"
          >
            Who is behind ElonTix Team?
          </button>
        </div>
        <div
          id="collapse9"
          className="collapse"
          aria-labelledby="h-9"
          data-bs-parent="#faqAcc-four"
        >
          <div className="card-body">
            <p>
              Our team is headlined by serial entrepreneurs, game developers,
              graphic designers and NFT Advisors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsAndAlerts;
