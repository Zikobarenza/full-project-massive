import React from "react";

const TentangKami = () => {
  return (
    <main id="artikel">
      <section style={{ backgroundColor: "#d5d5d5" }}>
        <div className="container pt-5 pb-5">
          <br></br>
          <h1 style={{ textAlign: "center" }}>
            Tentang Kami
          </h1>
          <br></br>
          <img
            src="./public/assets/home/4.png"
            className="card-img-top"
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "40%",
              height: "auto",
            }}
          />
          <br></br>
          <p style={{ textAlign: "justify" }}>
            Keterampilan komunikasi menjadi salah satu kebutuhan penting di dalam dunia kerja saat ini. Kemampuan individu dalam menyampaikan ide dan gagasan, mengakomodasi kepentingan dan berkolaborasi dengan orang lain menjadi salah satu kunci kesuksesan karir. Meskipun demikian, masih banyak individu yang merasa bahwa komunikasi tidak lebih sebatas aktivitas “ngobrol” sehari-hari. Padahal keterampilan komunikasi perlu diasah sedini mungkin, supaya setiap orang menjadi lebih percaya diri untuk berkontribusi dan memimpin, baik di lingkungan sosial maupun profesional.
          </p> 
          <br /><br />
          <h1 style={{ textAlign: "left" }}>
            VISI
          </h1>
          <p style={{ textAlign: "justify" }}>
          Menciptakan komunitas yang ditenagai oleh keyakinan diri yang kuat, dimana setiap individu merasa mampu mencapai potensinya  tanpa hambatan.
          </p>
          <br /><br />
          <h1 style={{ textAlign: "left" }}>
            MISI
          </h1>
          <p style={{ textAlign: "justify" }}>
            1. Memberikan pelatihan yang bertujuan memperkuat keyakinan diri dan keterampilan personal setiap anggota komunitas.
            <br /><br />
            2. Mendorong pertukaran pengalaman dan inspirasi di antara anggota komunitas untuk membangun rasa percaya diri yang bersama-sama kuat.
            <br /><br />
            3. Menyediakan ruang yang aman dan mendukung bagi individu untuk mengatasi ketidakpastian dan mengembangkan kepercayaan diri.
</p>

        </div>
      </section>
    </main>
  );
};

export default TentangKami;