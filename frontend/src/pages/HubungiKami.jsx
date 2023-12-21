import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const HubungiKami = () => {
  return (
    <main id="HubungiKami" style={{ height:"100vh",backgroundColor: "#e4e4e4" }}>
    <div  className="container text-center">
      <div  style={{paddingTop:"4rem"}}>
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
    </div>

    </main>
  );
};

export default HubungiKami;