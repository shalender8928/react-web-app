import DivBlock from '../UI/DivBlock';

const ContactUsLeftBlocks = () => {

	return (
		
          <div className="contact-item-wrapper">
            <div className="row">
            	<DivBlock 
					      outerClass="col-12 col-md-6 col-xl-12"
					      itemIdentity="contact-item"
					      itemIcon="contact-icon"
					      iconCode="lni lni-phone"
					      innerClass="contact-content"
					      title="Contact"
					      desc={['0984537278623','yourmail@gmail.com']}
					    />

					    <DivBlock 
					      outerClass="col-12 col-md-6 col-xl-12"
					      itemIdentity="contact-item"
					      itemIcon="contact-icon"
					      iconCode="lni lni-map-marker"
					      innerClass="contact-content"
					      title="Address"
					      desc={["175 5th Ave, New York, NY 10010","United States"]}
					    />

					    <DivBlock 
					      outerClass="col-12 col-md-6 col-xl-12"
					      itemIdentity="contact-item"
					      itemIcon="contact-icon"
					      iconCode="lni lni-alarm-clock"
					      innerClass="contact-content"
					      title="Schedule"
					      desc={["24 Hours / 7 Days Open","Office time: 10 AM - 5:30 PM"]}
					    />
            </div>
          </div>
	);
}

export default ContactUsLeftBlocks;