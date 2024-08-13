
import '../styling/Portfolio.css';

function Portfolio() {
  const images = [
    '/src/assets/img/portfolio/thumbnails/1.jpg',
    '/src/assets/img/portfolio/thumbnails/2.jpg',
    '/src/assets/img/portfolio/thumbnails/3.jpg',
    '/src/assets/img/portfolio/thumbnails/4.jpg',
    '/src/assets/img/portfolio/thumbnails/5.jpg',
    '/src/assets/img/portfolio/thumbnails/6.jpg'
  ];

    return (
      <section id='portfolio' >
        <div className="row g-0">
          {images.map((img, index) => (
            <div key={index} className="col-lg-4 col-sm-6">
              <div>
                <img className="img-fluid" src={img} alt="" />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Portfolio;