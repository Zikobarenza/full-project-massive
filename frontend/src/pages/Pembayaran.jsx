import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
const Pembayaran = () => {
  return (
    <main id="kelas">
      <section style={{ backgroundColor: "#d5d5d5"}}>
      <div className="container pt-5 pb-5">
        <div className="container text-center ">
          <br />
          <br />
          <h1>Pembayaran</h1>

          <br />
          <br />
        </div>
        <div
          className="card d-flex justify-content-center align-items-center"
          style={{ backgroundColor: "#e4e4e4" }}
        >
          <div style={{ display: "flex", alignItems: "center" ,marginBottom:"20px" }}>
            <FontAwesomeIcon
              icon={faBuildingColumns}
              style={{ fontSize: "80px" }}
            />
            <h1 style={{ marginLeft: "10px" }}>Transfer Bank</h1>
          </div>
          
          <Link to={'/carabayar'} style={{ width:"55%",backgroundColor: "#f8f2f2", marginBottom:"20px", borderRadius:"20px" }}>
          <img
            src="./public/assets/pembayaran/3.png"
            className="card-img-top pt-3 pb-3"
            style={{
              width: "30%",
              height: "auto",
              marginLeft:"10px"
            }}
            alt="Video Thumbnail"
          />
          </Link>
          
          <Link to={'/carabayar1'} style={{ width:"55%",backgroundColor: "#f8f2f2", marginBottom:"20px", borderRadius:"20px" }}>
          <img
            src="./public/assets/pembayaran/4.png"
            className="card-img-top pt-3 pb-3"
            style={{
              width: "30%",
              height: "auto",
              marginLeft:"10px"
            }}
            alt="Video Thumbnail"
          />
          </Link>

          <Link to={'/carabayar2'} style={{ width:"55%",backgroundColor: "#f8f2f2", marginBottom:"20px", borderRadius:"20px" }}>
          <img
            src="./public/assets/pembayaran/5.png"
            className="card-img-top pt-3 pb-3"
            style={{
              width: "30%",
              height: "auto",
              marginLeft:"10px"
            }}
            alt="Video Thumbnail"
          />
          </Link>

          <Link to={'/carabayar3'} style={{ width:"55%",backgroundColor: "#f8f2f2", marginBottom:"20px", borderRadius:"20px" }}>
          <img
            src="./public/assets/pembayaran/6.png"
            className="card-img-top pt-3 pb-3"
            style={{
              width: "30%",
              height: "auto",
              marginLeft:"10px"
            }}
            alt="Video Thumbnail"
          />
          </Link>
          <Link to={"/carabayar"} className="btn btn" style={{backgroundColor:"#000000", width:"40%",color:"white", margin:"20px auto"}}>
                  Pay Now
              </Link>
        </div>
      </div>
      </section>
    </main>
  );
};

export default Pembayaran;
