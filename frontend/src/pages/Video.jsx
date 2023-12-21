import { Link } from "react-router-dom";
import videoData from "../data/videoData.json";

export default function Video() {
  return (
    <main id="video" style={{ backgroundColor: "#d5d5d5" }}>
      <section className="container pt-5  " >
        <div ></div>
        <div className="justify-content-center d-flex align item-center" style={{marginBottom:"20px"}}>
          <div style={{ display: "flex",justifyContent: "space-between", marginTop:"30px"}}>
            <input type="text" style={{  width:"20rem", height:"35px", backgroundColor: "#d5d5d5" }} placeholder="Cari video"/>
            <div style={{   width:"20%", height:"35px", border:"black solid 2px" , backgroundColor:"black"}} >
            <h6 style={{  position:"relative",top:"6px", left:"10px" ,color:"#fdfdff"}} >Cari</h6>
            </div>
          </div>
        </div>
        <div className="row" style={{ margin: "20px" }}>
          {videoData.map((video) => (
            <div
              className="col-lg-5 col-m-5 "
              key={video.id}
              style={{ margin: "10px auto", width: "50%" }}
            >
              <div
                className="card "
                style={{
                  borderRadius: "none",
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                <div className="m-4">
                <video
                    style={{ width: "100%" }}
                    controls
                    src={video.videoUrl}
                    className="card-img-top"
                    alt={`Video ${video.id}`}
                  />
                  
                </div>
                <div className="card-footer">
                  <h6>{video.judul}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
