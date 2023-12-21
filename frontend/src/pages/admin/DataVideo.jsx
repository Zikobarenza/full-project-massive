import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button, Modal, Form } from "react-bootstrap";

export default function Video() {
  const [videoData, setVideoData] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [videoTitle, setVideoTitle] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8201/api/video")
      .then((response) => {
        setVideoData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching video data:", error);
      });
  }, []);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleTitleChange = (event) => {
    setVideoTitle(event.target.value);
  };

  const handleUpload = () => {
    if (!selectedFile || !videoTitle) {
      console.error("Please select a file and enter a title");
      return;
    }

    const formData = new FormData();
    formData.append("video", selectedFile);
    formData.append("judul", videoTitle);

    axios
      .post("http://localhost:8201/api/upload-video", formData)
      .then((response) => {
        // Handle successful upload, e.g., update the videoData state
        console.log("Video uploaded successfully");
        setShowModal(false); // Close the modal after upload
        setVideoTitle(""); // Clear the title after upload
        // You might want to refresh the videoData after upload, similar to what you did in useEffect
      })
      .catch((error) => {
        console.error("Error uploading video:", error);
      });
  };

  return (
    <main className="container pt-5 pb-5">
      <br />
      <br />
      <h1>Data Video</h1>
      <Button
        variant="success"
        className="btn btn-primary float-end"
        style={{ marginTop: "-30px" }}
        onClick={() => setShowModal(true)}
      >
        Tambah Video
      </Button>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formTitle" className="mb-3">
              <Form.Label>Video Title:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter video title"
                value={videoTitle}
                onChange={handleTitleChange}
              />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Select Video File:</Form.Label>
              <Form.Control type="file" onChange={handleFileChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpload}>
            Upload Video
          </Button>
        </Modal.Footer>
      </Modal>

      <Table
        striped
        bordered
        hover
        style={{
          backgroundColor: "black",
          marginTop: "30px",
          color: "white",
        }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Judul</th>
            <th>Video URL</th>
          </tr>
        </thead>
        <tbody>
          {videoData.map((video) => (
            <tr key={video.id}>
              <td>{video.id}</td>
              <td>{video.judul}</td>
              <td>{video.videourl}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </main>
  );
}