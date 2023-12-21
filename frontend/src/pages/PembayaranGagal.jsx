import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons"


export default function PembayaranGagal() {
    return (
      <main id="pembayaran">
      <div className="container align-items-center d-flex justify-content-center">
          <div className="container-lg text-center" >
              <br />
              <br />
              <br />
              <br />
              <br />
              <FontAwesomeIcon 
                  icon={faTimesCircle}
                  className="mb-4"
                  style={{
                      color: "#C92F2D",
                      borderRadius: "2rem",
                      height: "150px",
                      width: "150px",
                  }}></FontAwesomeIcon>
                  
              <h1 className="mb-4">Pembayaran Gagal</h1>
              <p className="mb-5 w-75 mx-auto">
              transaksi gagal, mohon maaf coba cek lagi apa ada salah dalam proses <br /> pembayaran
              </p>
              <Link href={"/profil"} className="btn btn-primary">
                  Ok
              </Link>
              <br />
              <br />
              <br />
              <br />
          </div>
      </div>
  </main>
    )
  }
