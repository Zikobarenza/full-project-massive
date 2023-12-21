import { Link } from "react-router-dom";
import kursusData from "../data/kursusData.json";

const Kursus = () => {
  return (
    <main id="artikel">
      <section style={{ backgroundColor: "#d5d5d5"}}>
      <div className="container pt-5 pb-5">
        <br />
        <br />

        <div className="row ">
          {kursusData.map((kursus) => (
            <div className="col-lg-4 col-md-4 " key={kursus.id} style={{marginBottom:"20px"}}>
              <div className="card" style={{ backgroundColor: "#000000" }}>
                <div style={{margin:"20px"}}>
                <img
                  style={{ margin: "-1px 0px auto", width: "100%" }}
                  src={kursus.gambar}
                  className="card-img-top"
                  alt={`kursus ${kursus.id}`}
                />
                </div>
                <div
                  className="col-lg-9 col-md-4 "
                  style={{ margin: "20px auto" }}
                >
                  <h6 style={{ color: "#f8f2f2" }}>{kursus.judul}</h6>
                  <p className="card-text " style={{ color: "#f8f2f2" }}>
                    {kursus.tanggal}
                  </p>
                  <div
                    className="container footer-content"
                    style={{ height: "40px", margin:"auto 180px"}}
                  >
                    <div className="col-lg-2">
                      <div className="d-flex flex-row gap-2">
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>
    </main>
  );
};

export default Kursus;
