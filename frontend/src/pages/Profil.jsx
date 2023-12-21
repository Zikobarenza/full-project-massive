import React from 'react';

const Profil = () => {
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
              <div classname="card-footer d-flex justify-content-center align-items-center"  style={{ width:"10rem", height:"-2rem"}}>
              <img src="assets/Foto user/Profile user.jpg" className= "card-img-top"alt="" style={{borderRadius:"250px" , width:"10rem", height:"9.5rem"}}/>
            
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
          <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "column", border: "1px solid black",
                padding: "110px",
                width:"50rem",
                height:"35rem",
                marginTop:"-40px",
                
                borderRadius:"15px"}}>
                  <h1 style={{textAlign:"center", marginTop:"-30px"}}>Profile Data </h1>
            <div
    

            >
              <div className="kotak">
                <p>
                  Nama           : <input type="text" value="Jasmine Amelia" style={{marginLeft:"105px", marginTop:"-30px",borderRadius:"5px", width:"320px"}}/>
                </p>
                <br />
                <p>
                  Alamat         : <input type="text" value="Jln. Soekarno No.23 Bekasi" style={{marginLeft:"100px", marginTop:"-30px",borderRadius:"10px", width:"320px"}}/>
                </p>
                <br />
                <p style={{}}>
                  Jenis Kelamin  : <input type="text" value="Perempuan" style={{marginLeft:"55px", marginTop:"-30px",borderRadius:"10px", width:"320px", }}/>
                </p>
                <br />
                <p>
                  No. HP         : <input type="text" value="0812 8476 1829" style={{marginLeft:"100px", marginTop:"-30px",borderRadius:"10px", width:"320px"}}/>
                </p>
                <br />
                <p>
                  Alamat E-Mail  : <input type="email" value="jasmineamelia@gmail.com" style={{marginLeft:"50px", marginTop:"-30px",borderRadius:"10px", width:"320px"}}/>
                </p>
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

export default Profil;