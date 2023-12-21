import { Link } from "react-router-dom";
import KelasData from "../data/kelasData.json";

const KelasPage = () => {
  return (
    <main id="kelas">
      <section style={{ backgroundColor: "#d5d5d5" }}>
        <div className="container pt-5 pb-5">
          <div
            className="card "
            style={{
              backgroundColor: "black",
              margin: "20px",
              color: "#ffffff",
            }}
          >
            <div style={{ margin: "40px" }}>
              <div className="container text-center ">
                <h1>Pilihan Kelas</h1>
                <p>
                  Kelas komunikasi yang membantu anda untuk menjadi pribadi yang
                  bukan hanya mahir dalam public speaking,
                  <br /> namun juga memiliki value sebagai pembicara yang
                  bertanggung jawab dan membawa
                  <br /> dampak positif dengan kurikulum implementatif dan
                  metode experential learning.
                </p>
                <br />
              </div>
              <div className="row">
                {KelasData.map((kelas) => (
                  <div
                    className="col-lg-4 col-m-3 text-center"
                    key={kelas.id}
                    style={{ margin: "20px auto" }}
                  >
                    <h5>{kelas.judul}</h5>
                    <div
                      className="card text-center"
                      style={{ borderRadius: "none" }}
                    >
                      <img
                        style={{ width: "100%" }}
                        src={kelas.gambar}
                        className="card-img-top"
                        alt={`Artikel ${kelas.id}`}
                      />
                      <div
                        className="card-body text-center "
                        style={{ backgroundColor: "#fdfdff" }}
                      >
                        <p
                          className="card-text "
                          style={{ color: "#0000000", justifyContent: "left" }}
                        >
                          <br />
                          {kelas.deskripsi}
                        </p>
                      </div>
                      <div className="card-footer">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <h6 style={{ marginRight: "3px" }}>
                            Durasi : {kelas.durasi} menit
                          </h6>
                          <h6>Rp. {kelas.harga}</h6>
                        </div>
                        <h6 style={{ justifyContent: " d-flex flex-start" }}>
                          Lokasi : {kelas.Lokasi}
                        </h6>
                        <Link
                          to={`/pembayaran`}
                          className="btn w-70"
                          style={{ backgroundColor: "black", color: "#fdfdff" }}
                        >
                          Daftar
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default KelasPage;
