import ContactUsLeftBlocks from './PageComponents/ContactUsLeftBlocks'
import ContactUsForm from './PageComponents/ContactUsForm';

const ContactUs = (props) => {
	// console.log(props);
	const leftblockvisible = (props.leftblockvisible === false) ? false : true;
	const id = (props.id) ? props.id : 'contact';
	const blocks = (leftblockvisible) ? <ContactUsLeftBlocks /> : null; 
	const blockwidth = (leftblockvisible) ? "col-xl-4" : "";
	const formwidth = (leftblockvisible) ? "col-xl-8" : "col-xl-12";

	const classes = ' contact-section '+ props.className;
	const wraperClasses = ' contact-section-wrapper '+ props.classWrapper;

	return (
		<section id={id} className={classes}>
		    <div className="container">
		      <div className="row">
			    <div className={blockwidth}>
			      	{blocks}
			    </div>

		        <div className={formwidth}>
		          <div className={`contact-form-wrapper ${wraperClasses}`}>
		            <div className="row">
		              <div className={`col-xl-1 0 mx-auto ${formwidth}`}>
		                <div className="section-title text-center">
		                  <span> Get in Touch </span>
		                  <h2>
		                    Ready to Get Started
		                  </h2>
		                  <p>
		                    At vero eos et accusamus et iusto odio dignissimos ducimus
		                    quiblanditiis praesentium
		                  </p>
		                </div>
		              </div>
		            </div>

		            <ContactUsForm /> 
		          
		          </div>
		        </div>
		      </div>
		    </div>
		  </section>
	);
}

export default ContactUs;