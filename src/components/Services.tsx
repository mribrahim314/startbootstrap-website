

function Services() {
  return (
    <section id="services" className="py-5" style={{minHeight:'400px', alignContent:'center'}}>
      <div className="container">
        <h2 className="text-center mb-5">At Your Service</h2>
        <div className="row">
          <div className="col-lg-3 col-md-6 text-center mb-4">
            <div>
              <h4 className="mb-2">Sturdy Themes</h4>
              <p className="text-muted mb-0">Our themes are updated regularly to keep them bug free!</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center mb-4">
            <div>
              
              <h4 className="mb-2">Up to Date</h4>
              <p className="text-muted mb-0">All dependencies are kept current to keep things fresh.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center mb-4">
            <div>
              
              <h4 className="mb-2">Ready to Publish</h4>
              <p className="text-muted mb-0">You can use this design as is, or you can make changes!</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center mb-4">
            <div>
              
              <h4 className="mb-2">Made with Love</h4>
              <p className="text-muted mb-0">Is it really open source if it's not made with love?</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;