import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function FooterComponent() {
  return (
    <footer className="border-top" style={{ backgroundColor: "black" }}>
      <div className="container footer-content">
        <div className="d-flex flex-column align-items-center justify-content-center text-center " style={{ color:"white"}}>
          <div
            className="d-flex justify-content-between align-items-center"
            style={{ width: "30%" }}
          >
            <img
              src="./logo.png"
              style={{
                width: "40%",
                height: "auto",
                marginTop: "10px",
				marginLeft:"2rem"
              }}
              alt="Logo"
            />
			<h3 style={{ marginTop: "-15px",color:"white" }}>|</h3>
            <div className="d-flex" style={{ marginTop: "-15px",marginRight: "3rem" }}>
              <Link
                to="#"
                style={{ fontSize: "20px", marginLeft: "20px", color: "white" }}
              >
                <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
              </Link>
              <Link
                to="#"
                style={{ fontSize: "20px", marginLeft: "20px", color: "white" }}
              >
                <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
              </Link>
              <Link
                to="#"
                style={{ fontSize: "20px", marginLeft: "20px", color: "white" }}
              >
                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
              </Link>
              <Link
                to="#"
                style={{ fontSize: "20px", marginLeft: "20px", color: "white" }}
              >
                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
              </Link>
            </div>
          </div>
		  <div className="d-flex justify-content-between align-items-center" style={{ marginTop: "-30px",textDecoration:"none",color:"white" }}>
		  <Link to={'/'} style={{ marginLeft: "35px",marginTop:"-10px",textDecoration:"none",color:"white" }} >Beranda</Link>
		  <p style={{ marginLeft: "35px" }}>|</p>
		  <Link to={'/kelas'} style={{ marginLeft: "35px",marginTop:"-10px",textDecoration:"none",color:"white" }}>Kelas</Link>
		  <p style={{ marginLeft: "35px" }}>|</p>
		  <Link to={'/hubungi'} style={{ marginLeft: "35px",marginTop:"-10px",textDecoration:"none",color:"white" }}>Hubungi</Link>
		  <p style={{ marginLeft: "35px" }}>|</p>
		  <Link to={'/tentangkami'} style={{ marginLeft: "35px",marginTop:"-10px",textDecoration:"none",color:"white"  }}>Tentang</Link>
		  </div>
		  
			<p>"Membangun Kepercayaan Diri Dengan keterampilan Public Speaking Dalam Menghadapi Bonus Demografi 2030"</p>
          <p style={{ color: "white" }}>
            © 2023 NusaTech | Powered by NUSATECH
          </p>
        </div>
      </div>
    </footer>
  );
}
