import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nusatech"
});


app.post('/login', (req, res) => {
    const sql = "SELECT * FROM pengguna WHERE email = ? AND password = ?";

    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) return res.json("Gagal Masuk");
        if (data.length > 0) {
            return res.json("Anda Berhasil Masuk");
        } else {
            return res.json("Maaf Email atau Password yang anda masukkan salah");
        }
    });
});
// Route untuk mengambil data pengguna
app.get("/api/pengguna", (req, res) => {
    const sql = "SELECT id, email, username, password FROM pengguna";
  
    db.query(sql, (err, data) => {
      if (err) {
        return res.status(500).json({ error: "Gagal mengambil data pengguna" });
      } else {
        return res.json(data);
      }
    });
  });

// Endpoint untuk menghapus pengguna berdasarkan ID
app.delete('/api/pengguna/:id', (req, res) => {
    const userId = req.params.id;
    const sql = "DELETE FROM pengguna WHERE id = ?";

    db.query(sql, userId, (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Gagal menghapus pengguna" });
        } else {
            return res.json({ message: "Pengguna berhasil dihapus" });
        }
    });
});

app.get("/api/video", (req, res) => {
    const sql = "SELECT id, judul, videourl FROM video";
  
    db.query(sql, (err, data) => {
      if (err) {
        return res.status(500).json({ error: "Gagal mengambil data pengguna" });
      } else {
        return res.json(data);
      }
    });
  });
  
// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  });
  
  const upload = multer({ storage: storage });
  
  // API endpoint for video upload
  app.post("/api/upload-video", upload.single("video"), (req, res) => {
    try {
      const { judul } = req.body;
      const videourl = req.file.filename;
  
      // Save video data to the MySQL database
      const query = "INSERT INTO video (judul, videourl) VALUES (?, ?)";
      db.query(query, [judul, videourl], (err, result) => {
        if (err) {
          console.error("Error inserting video data:", err);
          res.status(500).json({ error: "Internal Server Error" });
        } else {
          console.log("Video data inserted successfully");
          res.status(201).json({ message: "Video uploaded successfully" });
        }
      });
    } catch (error) {
      console.error("Error uploading video:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  // API endpoint to get video data
  app.get("/api/video", (req, res) => {
    // Retrieve video data from the MySQL database
    const query = "SELECT * FROM video";
    db.query(query, (err, results) => {
      if (err) {
        console.error("Error fetching video data:", err);
        res.status(500).json({ error: "Internal Server Error" });
      } else {
        res.status(200).json(results);
      }
    });
  });

app.post('/api/daftar', (req, res) => {
    const {  email, username, password } = req.body;
    const sql = "INSERT INTO pengguna (  email, username, password) VALUES ( ?, ?, ?)";

    db.query(sql, [  email, username, password], (err, data) => {
        if (err) {
            return res.json("Gagal mendaftar");
        } else {
            return res.json("Berhasil mendaftar");
        }
    });
});




app.get("/", (req, res) => {
    res.json("hello this is the backend");
});

app.listen(8201, () => console.log("Server is listening on port 8201"));
