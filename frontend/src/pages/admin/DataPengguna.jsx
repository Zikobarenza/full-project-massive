import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button } from "react-bootstrap";

const DataPengguna = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Mengambil data pengguna dari server
    axios
      .get("http://localhost:8201/api/pengguna")
      .then((response) => {
        setUsers(response.data); // Mengasumsikan response.data adalah array objek pengguna
      })
      .catch((error) => {
        console.error("Error mengambil data pengguna:", error);
      });
  }, []);

  const handleDelete = (userId) => {
    axios
      .delete(`http://localhost:8201/api/pengguna/${userId}`)
      .then((response) => {
        if (response.data.message === "Pengguna berhasil dihapus") {
          const updatedUsers = users.filter((user) => user.id !== userId);
          setUsers(updatedUsers);
        } else {
          console.error("Gagal menghapus pengguna");
        }
      })
      .catch((error) => {
        console.error("Error menghapus pengguna:", error);
      });
  };

  return (
    <div className="pt-5 pb-5">
      <br />
      <h1>Data Pengguna</h1>
      <Table striped bordered hover style={{ backgroundColor: "blue", color: "white", padding: "15px" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Username</th>
            <th>Password</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>
                <Button variant="danger" onClick={() => handleDelete(user.id)}>
                  Hapus
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DataPengguna;
