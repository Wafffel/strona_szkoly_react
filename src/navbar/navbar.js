import { Outlet, Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <nav class="navbar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link to="/" class="nav-link">
              Aktualności
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/o-szkole" class="nav-link">
              O Szkole
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/dokumenty" class="nav-link">
              Dokumenty
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/kontakt" class="nav-link">
              Kontakt
            </Link>
          </li>
          <li class="nav-item">
            <Link
              class="nav-link"
              target="_blank"
              to="https://uonetplus.vulcan.net.pl/warszawamokotow"
            >
              Dziennik
            </Link>
          </li>
          <li class="nav-item">
            <Link
              class="nav-link"
              target="_blank"
              to="https://planlekcji.staff.edu.pl"
            >
              Plan Lekcji
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;