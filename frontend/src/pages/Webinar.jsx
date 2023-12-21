import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

const Webinar = () => {
  return (
    <main id="kelas">
      <section style={{ backgroundColor: "#d5d5d5"}}>
      <div className="container pt-5 pb-5 " >
        <br />
        <br />
        <div className="card bg-black d-flex flex-row gap-2">
          <div className="container text-left">
            <div className="row">
              <div className="col-md-6">
                <div style={{ marginLeft: "30px" }}>
                  <h1 style={{ color: "#F8F2F2", marginTop: "60px" }}>
                    Seminar Public <br />
                    Speaking Membangun <br /> Kepercayaan Diri
                  </h1>
                  <br />
                  <div className="d-flex align-items-center">
                    <FontAwesomeIcon
                      icon={faCalendar}
                      style={{ color: "#F8F2F2" }}
                    />
                    <h5 style={{ marginLeft: "10px", color: "#F8F2F2" }}>
                      Minggu, Mar21 @ 4:00 PM
                    </h5>
                  </div>
                  <br />
                  <Link
                    href={"/profil"}
                    className="btn"
                    style={{ borderRadius: "20px", backgroundColor: "#3B9B25" }}
                  >
                    Daftar Sekarang
                  </Link>
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div className="container1 text-left" >
            <div className="text-left" style={{  marginLeft:"-500px" }}>
              <br />
              <br />
              <div style={{marginBottom:"-15px"}}>
                <h6 style={{ color: "#3B9B25",  marginBottom:"-24px"}}>MODERATOR</h6>
                <div className="d-flex flex-row gap-2">
                <img
                  src="./public/assets/webinar/1.png"
                  className="card-img-top pt-3 pb-3"
                  style={{
                    width: "26%",
                    height: "auto",
                  }}
                  alt="Video Thumbnail"
                /><div style={{marginTop:"30px", color:"#F8F2F2"}}>
                <h4>John Doe</h4>
                <p>Guru, Blogger dan Trainer</p>
                </div>
                </div>
              </div>
              <div style={{marginTop:"-15px"}}>
                <h6 style={{ color: "#3B9B25", marginBottom:"-24px"}}>PEMATERI</h6>
                <div className="d-flex flex-row gap-2">
                <img
                  src="./public/assets/webinar/2.png"
                  className="card-img-top pt-3 pb-3"
                  style={{
                    width: "26%",
                    height: "auto",
                  }}
                  alt="Video Thumbnail"
                /><div style={{marginTop:"30px",color:"#F8F2F2"}}>
                <h4>Jane Doe</h4>
                <p>Manager PT Mencari Cinta <br />Sejati</p>
                </div>
                <div>
                  
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </main>
  );
};

export default Webinar;
