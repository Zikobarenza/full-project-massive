import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";

const CaraBayar2 = () => {
  return (
    <main id="kelas">
      <section style={{backgroundColor: "#d5d5d5"}}>
        <div className="container pt-5 pb-5">
          <div className="container text-center ">
            <br />
            <h6 style={{color: "#CC2A2A"}}>Bayar sebelum 08 Desember 2023 21.06</h6>
          </div>
          <div style={{ borderRadius: "20px", border: "1px solid black", display: "flex", justifyContent: "space-between"}}>
  <div className="d-flex flex-column justify-content-center align-items-start" style={{ padding: "10px" }}>
    <p style={{ color: "#010101", margin: "0" }}>Virtual Account</p>
    <p style={{ color: "#010101", margin: "0" }}>081xxxxxxxxxxxxx</p>
    <p style={{ color: "#010101", margin: "0" }}>Nama Virtual Account</p>
    <p style={{ color: "#010101", margin: "0" }}>Nusa Tech Confidenly</p>
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
          <h6 style={{color:"#010101", margin:"8px"}}>ATM</h6>
          <Link to={'/carabayar2x'} className="btn"><h6 style={{color:"#010101"}}>M-Banking</h6></Link>
        </div>
          <p style={{color:"#010101", padding:"8px"}}>
            Langkah 1 Temukan ATM Terdekat <br/> 
            1. Masukkan Kartu, kemudian pilih bahasa dan masukkan PIN anda <br/>
            2. Pilih Transaksi Lain dan pilih Pembayaran <br/>
            3. Pilih menu Lainnya dan pilih BCAva <br/>
            LANGKAH 2: DETAIL PEMBAYARAN <br/>
            1. Masukkan Nomor Virtual Account 081xxxxxxxxxxxxx dan jumlah yang ingin anda bayarkan <br/>
            2. Periksa data transaksi dan tekan YA <br/>
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

export default CaraBayar2;