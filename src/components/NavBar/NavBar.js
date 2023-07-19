import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../CartWidget/CartWidget.js";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Link className="navbar-brand" to={"/"}>
            ARH
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to={"/category/remeras"}
                >
                  Remeras
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/category/pantalones"}>
                  Pantalones
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/category/calzado"}>
                  Calzado
                </NavLink>
              </li>
            </ul>
          </div>
          <CartWidget />
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
