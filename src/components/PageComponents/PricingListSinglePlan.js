const PricingListSinglePlan = (props) => {
	return (
		<div className="col-lg-4 col-md-6 col-12">
          <div className={`pricing-style-fourteen ${props.active}`}>
            <div className="table-head">
              <h6 className="title">{props.title}</h6>
                <p>{props.desc}</p>
                <div className="price">
                  <h2 className="amount">
                    <span className="currency">$</span>{props.amount}<span className="duration">/mo </span>
                  </h2>
                </div>
            </div>

            <div className="light-rounded-buttons">
              <a href="#plans" className={`btn ${props.buttonClass}`}>
                {props.buttonText}
              </a>
            </div>

            <div className="table-content">
              <ul className="table-list">
                <li> <i className="lni lni-checkmark-circle"></i> Cras justo odio.</li>
                <li> <i className="lni lni-checkmark-circle"></i> Dapibus ac facilisis in.</li>
                <li> <i className="lni lni-cross-circle text-danger"></i> <s>Morbi leo risus.</s></li>
                <li> <i className="lni lni-cross-circle text-danger"></i> <s>Excepteur sint occaecat velit.</s></li>
              </ul>
            </div>
          </div>
        </div>
	);
}

export default PricingListSinglePlan;