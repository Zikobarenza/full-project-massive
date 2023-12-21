import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faPeopleGroup,
  faVideo,
  faBullhorn,
} from "@fortawesome/free-solid-svg-icons";
import "./css/HomePage.css";

export default function Beranda() {
  return (
    <main id="beranda">
      <section
        id="hero"
        style={{
          backgroundImage: "url('/assets/home/gambar bagian home.png')",
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <div className="container text-center " style={{ marginTop: "-80px", color: "white"}}>
          <br />
          <br />
          <br />
          <br />
          <h3>KELAS PUBLIC SPEAKING ONLINE</h3>
          <br />
          <h1>
            Bangun Kepercayaan Diri Dengan <br />
            Metode Online
          </h1>
          <br />
          <p>
            Atasi Rasa Takut Bicara Dengan Kelas Public Speaking Selama
            <br /> Sebulan dan dapatkan Garansi Mengulang Kelas, Dibimbing
            secara
            <br /> langsung oleh Mentor dan dapatkan Recording kelas saat
            belajar.
          </p>
          <Link to={"/login"} className="btn btn-primary">
            Gabung Sekarang
          </Link>
        </div>
      </section>

      <section>
        <div className="container">
          <br />
          <br />
          <br />
          <div className="row">
            <div
              className="col-lg-3 col-m-3 text-center "
              style={{ margin: "20px auto" }}
            >
              <div
                className="card text-center"
                style={{ borderRadius: "20px" }}
              >
                <div
                  className="card-body text-center "
                  style={{
                    backgroundColor: "#ABABAB",
                    borderRadius: "20px 20px 0 0",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faPeopleGroup}
                    style={{ fontSize: "84px" }}
                  />
                  <h5
                    className="card-text col-lg-8"
                    style={{ color: "#F8F2F2", margin: " auto 40px" }}
                  >
                    <br />
                    Kursus Public Speaking
                  </h5>
                </div>
                <div
                  className="card-footer"
                  style={{
                    backgroundColor: "#E4E4E4",
                  }}
                >
                  <div>
                    <p className="card-text ">
                      Menyediakan kursus untuk public speaking dengan
                      pembelajaran secara daring
                    </p>
                    <Link to={"/kursus"}>See More</Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-m-3 text-center "
              style={{ margin: "20px auto" }}
            >
              <div
                className="card text-center"
                style={{ borderRadius: "20px" }}
              >
                <div
                  className="card-body text-center "
                  style={{
                    backgroundColor: "#ABABAB",
                    borderRadius: "20px 20px 0 0",
                  }}
                >
                  <FontAwesomeIcon icon={faBook} style={{ fontSize: "84px" }} />
                  <h5
                    className="card-text col-lg-8"
                    style={{ color: "#F8F2F2", margin: " auto 40px" }}
                  >
                    <br />
                    Artikel Public Speaking
                  </h5>
                </div>
                <div
                  className="card-footer"
                  style={{
                    backgroundColor: "#E4E4E4",
                  }}
                >
                  <div>
                    <p className="card-text textAlign-left ">
                      Menyediakan artikel terkait cara public speaking dengan
                      baik dan benar
                    </p>
                    <Link to={"/artikel"} className="textAlign-left">
                      See More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-m-3 text-center "
              style={{ margin: "20px auto" }}
            >
              <div
                className="card text-center"
                style={{ borderRadius: "20px" }}
              >
                <div
                  className="card-body text-center "
                  style={{
                    backgroundColor: "#ababab",
                    borderRadius: "20px 20px 0 0",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faVideo}
                    style={{ fontSize: "84px" }}
                  />
                  <h5
                    className="card-text col-lg-8"
                    style={{ color: "#f8f2f2", margin: " auto 40px" }}
                  >
                    <br />
                    Video Pembelajaran
                  </h5>
                </div>
                <div
                  className="card-footer"
                  style={{
                    backgroundColor: "#e4e4e4",
                  }}
                >
                  <div>
                    <p className="card-text ">
                      Video Pembelajaran ini berfokus pada keterampilan
                      berbicara yang relevan.
                    </p>
                    <Link to={"/video"}>See More</Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-m-3 text-center "
              style={{ margin: "20px auto" }}
            >
              <div
                className="card text-center"
                style={{ borderRadius: "20px" }}
              >
                <div
                  className="card-body text-center "
                  style={{
                    backgroundColor: "#ababab",
                    borderRadius: "20px 20px 0 0",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faBullhorn}
                    style={{ fontSize: "84px" }}
                  />
                  <h5
                    className="card-text col-lg-8"
                    style={{ color: "#f8f2f2", margin: " auto 40px" }}
                  >
                    <br />
                    Kelas Public Speaking
                  </h5>
                </div>
                <div
                  className="card-footer"
                  style={{
                    backgroundColor: "#e4e4e4",
                  }}
                >
                  <div>
                    <p className="card-text ">
                      Menyediakan beberapa kelas untuk pembelajaran secara
                      daring
                    </p>
                    <Link to={"/kelas"} className="text-none">
                      See More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </section>

      <section style={{ backgroundColor: "#e4e4e4" }}>
        <div className="container text-center">
          <br />
          <h2>Portofolio</h2>

          <br />
          <p>
            Dokumentasi kegiatan pelatihan, seminar dan workshop yang dilakukan
            secara (online)
          </p>
          <div className="row">
            <div className="col-lg-4 col-m-5 " style={{ margin: "10px auto" }}>
              <div>
                <img
                  src="./public/assets/home/3.png"
                  className="card-img-top"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
            </div>
            <div className="col-lg-4 col-m-5  " style={{ margin: "10px auto" }}>
              <div>
                <img
                  src="./public/assets/home/4.png"
                  className="card-img-top"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
            </div>
            <div className="col-lg-4 col-m-5  " style={{ margin: "10px auto" }}>
              <div>
                <img
                  src="./public/assets/home/5.png"
                  className="card-img-top"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
            </div>
            <div className="col-lg-4 col-m-5  " style={{ margin: "10px auto" }}>
              <div>
                <img
                  src="./public/assets/home/6.png"
                  className="card-img-top"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
            </div>
            <div className="col-lg-4 col-m-5  " style={{ margin: "10px auto" }}>
              <div>
                <img
                  src="./public/assets/home/7.png"
                  className="card-img-top"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
            </div>
            <div className="col-lg-4 col-m-5  " style={{ margin: "10px auto" }}>
              <div>
                <img
                  src="./public/assets/home/8.png"
                  className="card-img-top"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
            </div>
            <div className="col-lg-4 col-m-5  " style={{ margin: "10px auto" }}>
              <div>
                <img
                  src="./public/assets/home/9.png"
                  className="card-img-top"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
            </div>
            <div className="col-lg-4 col-m-5  " style={{ margin: "10px auto" }}>
              <div>
                <img
                  src="./public/assets/home/11.png"
                  className="card-img-top"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
            </div>
            <div className="col-lg-4 col-m-5  " style={{ margin: "10px auto" }}>
              <div>
                <img
                  src="./public/assets/home/4.png"
                  className="card-img-top"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="hubungi" style={{ backgroundColor: "#e4e4e4" }}>
        <div className="container text-center">
          <br />
          <h2>Hubungi Kami</h2>
          <br />
          <p>Silahkan hubungi kontak dibawah ini untuk informasi kelas</p>
          <div className="d-flex flex-column align-items-center justify-content-center">
            <input
              type="text"
              className="text-center"
              placeholder="Nama"
              style={{ width:"70%",marginBottom: "10px",borderRadius:"5px" ,border:"green solid 1px" }}
            />
            <input
              type="text"
              className="text-center"
              placeholder="Email"
              style={{ width:"70%",marginBottom: "10px", borderRadius:"5px" ,border:"green solid 1px" }}
            />
            <input 
              type="text" 
              className="text-center"
              placeholder="Pesan"
              style={{ width:"70%", height:"12rem",marginBottom: "10px", borderRadius:"5px", border:"green solid 1px" }}
            />
            <Link className="btn btn-primary"
              style={{ width:"70%", marginBottom: "10px", borderRadius:"5px", backgroundColor:"black" , border:"green solid 1px" }}
            >Kirim</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
