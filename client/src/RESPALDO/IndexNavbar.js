import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/img/logo_natural.png';
import ReactWhatsapp from 'react-whatsapp';

// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,

} from "reactstrap";


function IndexNavbar(props) {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  
    React.useEffect(() => {
    if (!props.color) {
      const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
      window.addEventListener("scroll", updateNavbarColor);
      return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
      };
    } else {
      setNavbarColor("");
    }
      
    
  });

  return (
    <>
      
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container className="d-flex">
          <div className="navbar-translate">
          <Link to="/index"></Link>
            <img className="logo_natural" src={Logo} alt="Logo" />
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink>
                  <i className="bi bi-house-door"></i>
                  <Link to="/index"><p>Home</p></Link>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink>
                  <i className=""></i>
                  <Link to="/Catalogo"><p>Catálogo</p></Link>
                </NavLink>
              </NavItem>


              <NavItem>
                <NavLink>
                  <i className="bi bi-newspaper"></i>
                  <Link to="/RecetaPrincipal"><p>Recetas</p></Link>
                </NavLink>
              </NavItem> 

              <NavItem>
                <NavLink
                >
                  <i className="bi bi-newspaper"></i>
                  <Link to="/news"><p>Noticias</p></Link>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                >
                  <i className="bi bi-newspaper"></i>
                  <Link to="/encuentranos"><p>Encuéntranos</p></Link>
                </NavLink>
              </NavItem>
              
              <NavItem>
                <NavLink
                  href="https://wa.me/593959474311"
                  target="_blank"
                  id="twitter-tooltip"
                >
                  <i class="fab fa-whatsapp fa-3x"></i>
                  
                  <p className="d-lg-none d-xl-none">WhatsApp</p>
                </NavLink>
                <UncontrolledTooltip target="#twitter-tooltip">
                  Contáctanos en WhatsApp
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.facebook.com/mermeladabnatural"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-facebook-square fa-3x"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Síguenos en Facebook
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.instagram.com/bnatural_ec/"
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <i className="fab fa-instagram fa-3x"></i>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                Síguenos en Instagram
                </UncontrolledTooltip>
              </NavItem>

              <NavItem>
                <NavLink>
                  <i className="bi bi-newspaper"></i>
                  <Link to="/carrito"><i className="fas fa-shopping-cart fa-3x"></i></Link>
                </NavLink>
              </NavItem>

             
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;

{/* <NavItem>
<NavLink
  href="#"
  onClick={(e) => {
    e.preventDefault();
    document
      .getElementById("download-section")
      .scrollIntoView();
  }}
>
  <i className=""></i>
  <p>Recetas</p>
</NavLink>
</NavItem> */}