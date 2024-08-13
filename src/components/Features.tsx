
import '../styling/Features.css';

function Features() {
  return (
    <section id='about' className="features py-5">
      <div className="container text-center">
        <h2 className="mb-5">We've got what you need!</h2>
        <p className="mb-5">Start Bootstrap has everything you need to get your new website up and running in no time! Choose one of our open source, free to download, and easy to use themes! No strings attached!</p>
        <button className="btn btn-light btn-lg px-5 py-3" style={{borderRadius:'30px'}}>GET STARTED!</button>
      </div>
    </section>
  );
}

export default Features;