import React from 'react';

const EditProfil = () => {
  const handleCancel = () => {
    console.log('Cancel button clicked');
  };
  
  const handleConfirm = () => {
    console.log('Confirm button clicked');
  };

  return (
    <section>
      <br />
      <br />
      <br />
      <div className="profill" id="profil">
        <div className="borderp">
        <div className="container pt-5 pb-5">
          <div style={{ display: "flex", justifyContent: "space-between"}}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                border: "1px solid black",
                padding: "30px",
                marginBottom:"15px",
                borderRadius:"15px"
                
              }}
            >
          <div className="profil" style={{margin:"10px"}}>
            <div className="container text-center">
              <div classname=" d-flex justfy-content-around">
              <br />
              <br />
              <img src="assets/Foto user/Profile user.jpg" className= "card-img-top"alt="" style={{borderRadius:"250px"}}/>
            
              <h1>Jasmine Amelia</h1>
              <p>
                Fresh Graduate IT Engineer
                <br />
                <br />
                Jakarta, Indonesia<br />
                Level: 1
              </p>
            
              <button className="btn btn-primary" style={{marginBottom:"5px"}}>
                Ubah Foto Profile
                <i className='bx bxs-pencil' style={{ color: '#fffdfd', textAlign:"justify"}}></i>
              </button><br />
              <button className="btn btn-primary">
                Ubah
                <i className='bx bxs-pencil' style={{ color: '#fffdfd'}}></i>
              </button>
            </div>
            </div>
            </div>
            </div>
            <div className="container text-left" style={{ marginBottom: "10px", textAlign: "left" }}>
            <div className="container pt-5 pb-5">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                border: "1px solid black",
                padding: "70px",
                width:"100%",
                borderRadius:"15px"
              }}
            >
              <h1 style={{textAlign:"center"}}>Profile Data </h1>
              <br />
              <div className="kotak">
                <p>
                  Nama            : <input type="text" placeholder="Jasmine Amelia" style={{borderRadius:"5px", width:"420px"}}/>
                </p>
                <br />
                <p>
                  Alamat          : <input type="text" placeholder="Jln. Soekarno No.23 Bekasi" style={{borderRadius:"10px", width:"420px"}}/>
                </p>
                <br />
                <p>Jenis Kelamin   : <select style={{ marginLeft:"105px", marginTop:"-60px", borderRadius: "10px", width: "420px" }}>
                                        <option value="male">Laki-laki</option>
                                        <option value="female">Perempuan</option>
                                    </select>
                </p>
                <br />
                <p>
                  No. HP          : <input type="text" placeholder="0812 8476 1829" style={{borderRadius:"10px", width:"420px"}}/>
                </p>
                <br />
                <p>
                  Alamat E-Mail   : <input type="email" placeholder="jasmineamelia@gmail.com" style={{borderRadius:"10px", width:"320px"}}/>
                </p>
                <br />
                <button onClick={handleCancel} className="btn btn-primary" style={{margin:"10px"}}>
                  Batal
                </button>
                <button onClick={handleConfirm} className="btn btn-primary">
                  Konfirmasi
                </button>
                <br />
              </div>
            </div> 
          </div>
        </div>
        </div>
        </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default EditProfil;