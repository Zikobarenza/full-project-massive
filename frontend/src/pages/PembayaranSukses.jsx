import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"


export default function PembayaranSukses() {
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
                  icon={faCircleCheck}
                  className="mb-4"
                  style={{
                      color: "#3B9B25",
                      borderRadius: "2rem",
                      height: "150px",
                      width: "150px",
                  }}></FontAwesomeIcon>
                  
              <h1 className="mb-4">Pembayaran Berhasil</h1>
              <p className="mb-5 w-75 mx-auto">
              transaksi berhasil, terimakasih telah membayar dan nikmati layanan yang <br /> sudah disediakan.
              </p>
              <Link href={"/profil"} className="btn btn-primary">
                  Mulai Belajar
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
