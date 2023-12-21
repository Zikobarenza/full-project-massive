import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import NavbarComponent from "./components/NavbarComponent";
import Navbarprofil from "./components/Navbarprofil";
import FooterComponent from "./components/FooterComponent";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import Daftar from "./pages/Daftar";
import Video from "./pages/Video";
import HomePage from "./pages/HomePage";
import TentangKami from "./pages/TentangKami";
import KelasPage from "./pages/KelasPage";
import Artikel from "./pages/Artikel";
import DetailArtikel from "./pages/DetailArtikel";
import Webinar from "./pages/Webinar";
import Kursus from "./pages/Kursus";
import PembayaranSukses from "./pages/PembayaranSukses";
import PembayaranGagal from "./pages/PembayaranGagal";
import Pembayaran from "./pages/Pembayaran";
import Profil from "./pages/Profil";
import EditProfil from "./pages/EditProfil";
import CaraBayar from "./pages/CaraBayar";
import CaraBayarx from "./pages/CaraBayarx";
import CaraBayar1 from "./pages/CaraBayar1";
import CobaBayar1x from "./pages/CobaBayar1x";
import CaraBayar2 from "./pages/CaraBayar2";
import CaraBayar2x from "./pages/CaraBayar2x";
import CaraBayar3 from "./pages/CaraBayar3";
import CaraBayar3x from "./pages/CaraBayar3x";
import HubungiKami from "./pages/HubungiKami";
import AdminDashboard from "./pages/admin/AdminDashboard";
import DataPengguna from "./pages/admin/DataPengguna";
import DataVideo from "./pages/admin/DataVideo";
import Navbar from "./components/Navbar";  // Remove one of the Navbar imports

const MainLayout = ({ children }) => (
  <>
    <NavbarComponent />
    {children}
    <FooterComponent />
  </>
);

const TestLayout = ({ children }) => (
  <>
    <Navbarprofil />
    {children}
    <FooterComponent />
  </>
);

const AdminLayout = ({ children }) => (
  <>
    <Navbar />
    <div className="d-flex">
      <Sidebar />
      <div className="content " style={{marginLeft:"10%  ", width:"70%"}} >{children}</div>
    </div>
    <FooterComponent />
  </>
);

const App = () => {
  return (
    <BrowserRouter>
      <Helmet>
        <title>Nusatech</title>
      </Helmet>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <HomePage />
            </MainLayout>
          }
        />
        <Route
          path="/admin"
          element={
            <AdminLayout>
              <AdminDashboard />
            </AdminLayout>
          }
        />
        <Route
          path="/home"
          element={
            <TestLayout>
              <HomePage />
            </TestLayout>
          }
        />
        <Route
          path="/datapengguna"
          element={
            <AdminLayout>
              <DataPengguna />
            </AdminLayout>
          }
        />
        <Route
          path="/datavideo"
          element={
            <AdminLayout>
              <DataVideo />
            </AdminLayout>
          }
        />
        <Route
          path="/artikel"
          element={
            <MainLayout>
              <Artikel />
            </MainLayout>
          }
        />
        <Route
          path="/edit"
          element={
            <MainLayout>
              <EditProfil />
            </MainLayout>
          }
        />
        <Route
          path="/detail/:id"
          element={
            <MainLayout>
              <DetailArtikel />
            </MainLayout>
          }
        />
        <Route
          path="/video"
          element={
            <MainLayout>
              <Video />
            </MainLayout>
          }
        />
        <Route
          path="/tentangkami"
          element={
            <MainLayout>
              <TentangKami />
            </MainLayout>
          }
        />
        <Route
          path="/kelas"
          element={
            <MainLayout>
              <KelasPage />
            </MainLayout>
          }
        />
        <Route
          path="/webinar"
          element={
            <MainLayout>
              <Webinar />
            </MainLayout>
          }
        />
        <Route
          path="/kursus"
          element={
            <MainLayout>
              <Kursus />
            </MainLayout>
          }
        />
        <Route
          path="/pembayaran"
          element={
            <MainLayout>
              <Pembayaran />
            </MainLayout>
          }
        />
        <Route
          path="/profil"
          element={
            <MainLayout>
              <Profil />
            </MainLayout>
          }
        />
        <Route
          path="/carabayar"
          element={
            <MainLayout>
              <CaraBayar />
            </MainLayout>
          }
        />
        <Route
          path="/carabayarx"
          element={
            <MainLayout>
              <CaraBayarx />
            </MainLayout>
          }
        />
        <Route
          path="/carabayar1"
          element={
            <MainLayout>
              <CaraBayar1 />
            </MainLayout>
          }
        />
        <Route
          path="/carabayar1x"
          element={
            <MainLayout>
              <CobaBayar1x />
            </MainLayout>
          }
        />
        <Route
          path="/carabayar2"
          element={
            <MainLayout>
              <CaraBayar2 />
            </MainLayout>
          }
        />
        <Route
          path="/carabayar2x"
          element={
            <MainLayout>
              <CaraBayar2x />
            </MainLayout>
          }
        />
        <Route
          path="/carabayar3"
          element={
            <MainLayout>
              <CaraBayar3 />
            </MainLayout>
          }
        />
        <Route
          path="/carabayar3x"
          element={
            <MainLayout>
              <CaraBayar3x />
            </MainLayout>
          }
        />
        <Route
          path="/hubungi"
          element={
            <MainLayout>
              <HubungiKami />
            </MainLayout>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/daftar" element={<Daftar />} />
        <Route path="/sukses" element={<PembayaranSukses />} />
        <Route path="/gagal" element={<PembayaranGagal />} />
        <Route path="/hubungi" element={<HubungiKami/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
