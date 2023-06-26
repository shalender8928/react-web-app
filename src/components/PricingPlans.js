import PricingListSinglePlan from './PageComponents/PricingListSinglePlan';

const PricingPlans = () => {
	return (
		<section id="pricing" className="pricing-area pricing-fourteen">
		    <div className="section-title-five">
		      <div className="container">
		        <div className="row">
		          <div className="col-12">
		            <div className="content">
		              <h6>Pricing</h6>
		              <h2 className="fw-bold">Pricing & Plans</h2>
		              <p>
		                There are many variations of passages of Lorem Ipsum available,
		                but the majority have suffered alteration in some form.
		              </p>
		            </div>
		          </div>
		        </div>
		      </div>
		    </div>

		    <div className="container">
		      <div className="row">
		        
		      	<PricingListSinglePlan 
					active=""
					title="Starter"
					desc="Lorem Ipsum is simply dummy text of the printing and industry."
					amount="0"
					buttonclass="primary-btn-outline"
					buttonText="Start free trial"
		      	/>

		      	<PricingListSinglePlan 
					active="middle"
					title="Exclusive"
					desc="Lorem Ipsum is simply dummy text of the printing and industry."
					amount="99"
					buttonclass="primary-btn"
					buttonText="Start free trial"
		      	/>

		      	<PricingListSinglePlan 
					active=""
					title="Premium"
					desc="Lorem Ipsum is simply dummy text of the printing and industry."
					amount="150"
					buttonclass="primary-btn-outline"
					buttonText="Start free trial"
		      	/>

		        
		      </div>
		    </div>
		</section>
	);
}

const CtaArea = () => {
	return (
	  <section id="call-action" className="call-action">
	    <div className="container">
	      <div className="row justify-content-center">
	        <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-9">
	          <div className="inner-content">
	            <h2>We love to make perfect <br />solutions for your business</h2>
	            <p>
	              Why I say old chap that is, spiffing off his nut cor blimey
	              guvnords geeza<br />
	              bloke knees up bobby, sloshed arse William cack Richard. Bloke
	              fanny around chesed of bum bag old lost the pilot say there
	              spiffing off his nut.
	            </p>
	            <div className="light-rounded-buttons">
	              <a href="#enquiry-form" className="btn primary-btn-outline">Get Started</a>
	            </div>
	          </div>
	        </div>
	      </div>
	    </div>
	  </section>
	);
}

export {PricingPlans, CtaArea};