
import '../styling/Portfolio.css';

function Portfolio() {
  const images = [
    '../assets/img/thumbnails/1.jpg',
    '../assets/img/thumbnails/2.jpg',
    '../assets/img/thumbnails/3.jpg',
    '../assets/img/thumbnails/4.jpg',
    '../assets/img/thumbnails/5.jpg',
    '../assets/img/thumbnails/6.jpg'
  ];

    return (
      <section id='portfolio' >
        <div className="row g-0">
          {images.map((img, index) => (
            <div key={index} className="col-lg-4 col-sm-6">
              <div>
                <img className="img-fluid" src={img} alt="failed to load" />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Portfolio;