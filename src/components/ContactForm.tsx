
import '../styling/ContactForm.css';

function ContactForm() {
  return (
    <section id='contact' className="contact-form" style={{paddingTop:150}}>
      <div className="container">
        <h2 className="text-center mb-5">Let's Get In Touch!</h2>
        
        <div className="row justify-content-center">
        
          <div className="col-lg-8 col-xl-6">
          <h5 className='text-muted text-center mb-5'>
          Ready to start your next project with us? Send us a message and we will get back to you as soon as possible!
        </h5>
            <form>
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="name" placeholder="Full name" />
                <label htmlFor="name">Full name</label>
              </div>
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="email" placeholder="Email address" />
                <label htmlFor="email">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input type="tel" className="form-control" id="phone" placeholder="Phone number" />
                <label htmlFor="phone">Phone number</label>
              </div>
              <div className="form-floating mb-3">
                <textarea className="form-control" id="message" placeholder="Message" style={{height: "10rem"}}></textarea>
                <label htmlFor="message">Message</label>
              </div>
              <div className="d-grid">
                <button className="btn btn-primary btn-xl" type="submit" style={{borderRadius:'30px'}}>Submit</button>
              </div>
            </form>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>+1 (555) 123-4567</p>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;