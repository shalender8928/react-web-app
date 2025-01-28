import GLightbox from 'glightbox';

const HeaderArea = () => {
  const lightbox = GLightbox({
    'href': '//www.youtube.com/watch?v=r44RKWyfcFw',
    'type': 'video',
    'source': 'youtube', //vimeo, youtube or local
    'selector' : '.glightbox',
    'width': 900,
    // 'autoplayVideos': true,
    // 'openEffect' :'zoom'
  });
  
  lightbox.open(); 

  /*const myGallery = GLightbox({
      elements: [
          
          {
              'href': 'https://www.youtube.com/watch?v=Ga6RYejo6Hk',
              'type': 'video',
              'source': 'youtube', //vimeo, youtube or local
              'selector' : '.glightbox',
              'width': 900,
          }
      ],
      // autoplayVideos: true,
  });
  
  myGallery.open();*/

  return(
    <section id="hero-area" className="header-area header-eight">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-12">
            <div className="header-content">
              <h1>Corporate & Business Site Template by Ayro UI.</h1>
              <p>
                We are a digital agency that helps brands to achieve their
                business outcomes. We see technology as a tool to create amazing
                things.
              </p>
              <div className="button">
                <button className="btn primary-btn">Get Started</button>
                <a href="https://www.youtube.com/watch?v=r44RKWyfcFw" className="glightbox video-button">
                  <span className="btn icon-btn rounded-full">
                    <i className="lni lni-play"></i>
                  </span>
                  <span className="text">Watch Intro</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12">
            <div className="header-image">
              <img src="assets/images/header/hero-image.jpg" alt="#" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeaderArea;