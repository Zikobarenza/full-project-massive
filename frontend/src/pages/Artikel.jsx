import { Link } from "react-router-dom";
import artikelData from "../data/artikelData.json";


const Artikel = () => {
  return (
    <main id="artikel">
      <section style={{ backgroundColor: "#d5d5d5"}}>
      <div className="container pb-5">
        <h2 className="mb-4">Artikel Terbaru</h2>
        <div className="row ">
          {artikelData.map((artikel) => (
            <div className="col-lg-5 col-md-4 m-4  " key={artikel.id}>
             
              <div className="card" style={{ backgroundColor: "#000000" }}>
                <div>
                <h6
                className="col-lg-9 col-md-4 text-center "
                style={{ marginLeft: "50px", color:"white" }}
              >
                {artikel.judul}
              </h6>
                  <div className="card-footer d-flex justify-content-center align-items-center">
                        <img style={{ margin:"-1px -5px auto", width:"102.%"  }}src={artikel.gambar} className="card-img-top" alt={`Artikel ${artikel.id}`} />
                  </div>
                  <div className="col-lg-9 col-md-4 m-5 ">
                    <p className="card-text " style={{ color :"#F8F2F2"}}>{artikel.deskripsi}</p>
                    <Link to={`/detail/${artikel.id}`}>Selengkapnya</Link>
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

export default Artikel;
