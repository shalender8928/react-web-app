const ContactUsForm = () => {
	return (
		<form action="#" className="contact-form">
      <div className="row">
        <div className="col-md-6">
          <input type="text" name="name" id="name" placeholder="Name" required />
        </div>
        <div className="col-md-6">
          <input type="email" name="email" id="email" placeholder="Email" required />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <input type="text" name="phone" id="phone" placeholder="Phone" required />
        </div>
        <div className="col-md-6">
          <input type="text" name="subject" id="email" placeholder="Subject" required />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <textarea name="message" id="message" placeholder="Type Message" rows="5"></textarea>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="button text-center rounded-buttons">
            <button type="submit" className="btn primary-btn rounded-full">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </form>
	);
}

export default ContactUsForm;