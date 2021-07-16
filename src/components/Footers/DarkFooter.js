/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>
            <a
                href="https://wa.me/593993289816"
                target="_blank"
              >
            <i class='fab fa-whatsapp fa-3x'></i><br/>
            <p className="d-lg-none d-xl-none">WhatsApp</p>
            </a>
            </li>
            <li>
            <a
                href="https://www.facebook.com/mermeladabnatural"
                target="_blank"
              >
            <i class='fab fa-facebook-square fa-3x'></i><br/>
            <p className="d-lg-none d-xl-none">Facebook</p>
            </a>
            </li>
            <li>
            <a
                href="https://www.instagram.com/bnatural_ec/"
                target="_blank"
              >
            <i class='fab fa-instagram fa-3x'></i><br/>
            <p className="d-lg-none d-xl-none">Instagram</p>
            </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Designed by{" "}
          <a
            href="https://www.invisionapp.com?ref=nukr-dark-footer"
            target="_blank"
          >
            Invision
          </a>
          . Coded by{" "}
          <a
            href="https://www.creative-tim.com?ref=nukr-dark-footer"
            target="_blank"
          >
            Creative Tim
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
