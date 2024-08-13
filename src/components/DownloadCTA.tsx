
import '../styling/DownloadCTA.css';

function DownloadCTA() {
  return (
    <section className="download-cta py-5" style={{minHeight:'300px', alignContent:'center'}}>
      <div className="container text-center">
        <h2 className="mb-4">Free Download at Start Bootstrap!</h2>
        <a href="#download" className="btn btn-light btn-lg" style={{borderRadius:'30px'}}>DOWNLOAD NOW!</a>
      </div>
    </section>
  );
}

export default DownloadCTA;