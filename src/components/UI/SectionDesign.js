const SectionDesign = (props) => {

	const classes = ' services-area services-eight border-top bg-light '+props.className;
	const Id = (props.id) ? props.id : 'new_section';

	return (
		<section id={Id} className={classes}>
		    <div className="section-title-five">
		      <div className="container">
		        <div className="row">
		          <div className="col-12">
		            <div className="content">
		      			{props.heading && <h6>{props.heading}</h6>}
	            		<h2 className="fw-bold">{props.title}</h2>
		      		</div>
		      	  </div>
		      	</div>
		      </div>
		    </div>

		    <div className="container">
		      <div className="row">
		      	{props.children}
		      </div>
		    </div>
		</section>
	);
}

export default SectionDesign;