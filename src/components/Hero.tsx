
import Header from './Header';
import '../styling/Hero.css';

function Hero() {
  return (
    <section className="hero d-flex align-items-center">
      <Header />
      <div className="container text-center">
        <h1 className="display-4 fw-bold mb-4">Your Favorite Place for Free Bootstrap Themes</h1>
        <p className="lead mb-5">Start Bootstrap can help you build better websites using the Bootstrap framework! Just download a theme and start customizing, no strings attached!</p>
        <button className="btn btn-primary btn-lg px-5 py-3 " style={{borderRadius:'30px'}} >FIND OUT MORE</button>
      </div>
    </section>
  );
}

export default Hero;