import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";

const CobaBayar2x = () => {
  return (
    <main id="kelas">
      <section style={{ backgroundColor: "#d5d5d5"}}>
        <div className="container pt-5 pb-5">
          <div className="container text-center ">
            <br />
            <h6 style={{color: "#CC2A2A"}}>Bayar sebelum 08 Desember 2023 21.06</h6>
          </div>
          <div style={{ borderRadius: "20px", border: "1px solid black", display: "flex", justifyContent: "space-between" }}>
  <div className="d-flex flex-column justify-content-center align-items-start" style={{ padding: "10px" }}>
    <p style={{ color: "#010101", margin: "0" }}>Virtual Account</p>
    <p style={{ color: "#010101", margin: "0" }}>081xxxxxxxxxxxxx</p>
    <p style={{ color: "#010101", margin: "0" }}>Nama Virtual Account</p>
    <p style={{ color: "#010101", margin: "0" }}>Nominal Pembayaran</p>
    <p style={{ color: "#010101", margin: "0" }}>Rp 100.000</p>
  </div>
  <div style={{ width: "55%", backgroundColor: "#f8f2f2", marginBottom: "20px", borderRadius: "20px", display: "flex", alignItems: "center" }}>
    <img
      src="./public/assets/pembayaran/5.png"
      className="card-img-top pt-3 pb-3"
      style={{
        width: "30%",
        height: "auto",
        marginLeft: "10px",
        position: "left",
      }}
      alt="Payment Method"
    />
  </div>
</div>

        <div style={{display:"flex", position:"relative" }}>
        <Link to={'/carabayar2'} className="btn"><h6 style={{color:"#010101", margin:"3px"}}>ATM</h6></Link>
        <h6 style={{color:"#010101", margin:"8px"}}>M-Banking</h6>
        </div>
          <p style={{color:"#010101", margin:"10px"}}>
            Langkah 1 Masuk Ke Akun Anda <br/> 
            1. Buka Aplikasi BRI Mobile Banking, masuk dengan Username dan Password Anda<br/>
            2. Pilih pembayaran dan pilih BCAvava <br/>
            LANGKAH 2: DETAIL PEMBAYARAN <br/>
            1. Masukkan Nomor Virtual Account 081xxxxxxxxxxxxx dan jumlah yang ingin anda bayarkan <br/>
            2. Masukkan PIN Mobile Banking Mandiri <br/>
            LANGKAH 3: TRANSAKSI BERHASIL <br/>
            1. Setelah transaksi anda selesai,
            invoice ini akan diupdate secara otomatis.
            Proses ini mungkin memakan waktu hingga 5 menit
          </p>
          <Link to={'/pembayaran'} className="btn btn-primary w-70">
            Kembali
          </Link>
        </div>
        <div></div>
      </section>
    </main>
  );
}

export default CobaBayar2x;