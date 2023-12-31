import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Cookies } from "react-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const route = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const cookies = new Cookies();

  useEffect(() => {
    const isLoggedInUser = cookies.get("auth-login");
    if (isLoggedInUser) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{ height: "55px", backgroundColor: "black" }}
    >
      <img
        src="./logo.png"
        style={{
          width: "10%",
          height: "auto",
          marginTop: "10px",
          position: "relative",
          top: "10px",
        }}
      />
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse gap-4" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center gap-2">
            <li className="nav-item">
              <Link
                className={`nav-link ${route.pathname === "/" ? "active" : ""}`}
                aria-current="page"
                to="/"
                style={{ color: "white" }}
              >
                Beranda
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  route.pathname === "/program" ? "active" : ""
                }`}
                to="/Kelas"
                style={{ color: "white" }}
              >
                Program Pelatihan
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  route.pathname === "/webinar" ? "active" : ""
                }`}
                to="/Webinar"
                style={{ color: "white" }}
              >
                Webinar
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  route.pathname === "/promo" ? "active" : ""
                }`}
                to="/tentangkami"
                style={{ color: "white" }}
              >
                Hubungi Kami
              </Link>
            </li>
          </ul>
          {isLoggedIn ? (
            <ul className="navbar-nav gap-2 mt-2 mt-lg-0 align-items-center">
              <li className="nav-item w-100">
                <Link to="/profil">
                  <FontAwesomeIcon
                    icon={faUser}
                    className={`btn d-flex mx-auto ${
                      route.pathname === "/profil"
                        ? "btn-dark"
                        : "btn-outline-dark"
                    }`}
                  />
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav gap-2 mt-2 mt-lg-0 align-items-center">
              <li className="nav-item w-100">
                <Link
                  className="btn btn-outline-light w-100"
                  to="/login"
                  style={{ color: "white" }}
                >
                  Masuk
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}
