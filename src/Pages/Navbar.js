// import { Link, NavLink } from "react-router-dom";

// const Navbar = () => {
//     return (
//         <div>
//             <nav className="navbar navbar-expand-lg shadow bg-warning rounded fixed-top">
//                 <div className="container-fluid">
//                     <img
//                         src={"vidhyahan.png"}
//                         alt="logo is not working"
//                         width="90px"
//                         height="50px"
//                     />
//                     <Link className="navbar-brand p-3 mb-1" to="#">
//                         <b>𝐕𝐢𝐝𝐡-ये-𝐃𝐡𝐚𝐧-𝐅𝐮𝐧𝐝𝐚𝐭𝐢𝐨𝐧</b>
//                     </Link>
//                     <button
//                         className="navbar-toggler"
//                         type="button"
//                         data-bs-toggle="offcanvas"
//                         data-bs-target="#offcanvasNavbar"
//                         aria-controls="offcanvasNavbar"
//                     >
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div
//                         className="offcanvas offcanvas-end"
//                         tabIndex="-1"
//                         id="offcanvasNavbar"
//                         aria-labelledby="offcanvasNavbarLabel"
//                     >
//                         <div className="offcanvas-header">
//                             <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
//                             <button
//                                 type="button"
//                                 className="btn-close text-reset"
//                                 data-bs-dismiss="offcanvas"
//                                 aria-label="Close"
//                             ></button>
//                         </div>
//                         <div className="offcanvas-body">
//                             <ul className="navbar-nav ms-auto mb-lg-0">
//                                 <li className="nav-item">
//                                     <NavLink className="nav-link" aria-current="page" to="/home">
//                                         <b>Home</b>
//                                     </NavLink>
//                                 </li>
//                                 <li className="nav-item">
//                                     <NavLink className="nav-link" aria-current="page" to="/">
//                                         <b>AboutUs</b>
//                                     </NavLink>
//                                 </li>
//                                 <li className="nav-item dropdown">
//                                     <a
//                                         className="nav-link dropdown-toggle"
//                                         href="whatwedo"
//                                         role="button"
//                                         data-bs-toggle="dropdown"
//                                         aria-expanded="false"
//                                     >
//                                         <b>What we do</b>
//                                     </a>
//                                     <ul className="dropdown-menu">
//                                         <li>
//                                             <a
//                                                 className="dropdown-item"
//                                                 href="https://www.instagram.com/vidyadhan_non_profit_org/"
//                                             >
//                                                 Vidhyadhan Instagram
//                                             </a>
//                                         </li>
//                                         <li>
//                                             <a className="dropdown-item" href="https://www.flipkart.com/">
//                                                 Flipkart Website
//                                             </a>
//                                         </li>
//                                         <li>
//                                             <a
//                                                 className="dropdown-item"
//                                                 href="https://y4d.ngo/what_we_do"
//                                             >
//                                                 Something else here
//                                             </a>
//                                         </li>
//                                     </ul>
//                                 </li>
//                                 <li className="nav-item">
//                                     <NavLink className="nav-link" aria-current="page" to="/projects">
//                                         <b>Projects</b>
//                                     </NavLink>
//                                 </li>
//                                 <li className="nav-item">
//                                     <NavLink className="nav-link" aria-current="page" to="/gallery">
//                                         <b>Gallery</b>
//                                     </NavLink>
//                                 </li>
//                                 <li className="nav-item">
//                                     <NavLink className="nav-link" aria-current="page" to="/contactus">
//                                         <b>ContactUs</b>
//                                     </NavLink>
//                                 </li>
//                                 <li className="nav-item dropdown">
//                                     <a
//                                         className="nav-link dropdown-toggle"
//                                         href="whatwedo"
//                                         role="button"
//                                         data-bs-toggle="dropdown"
//                                         aria-expanded="false"
//                                     >
//                                         <b>Media Corner</b>
//                                     </a>
//                                     <ul className="dropdown-menu">
//                                         <li>
//                                             <a className="dropdown-item" href="https://web.whatsapp.com/">
//                                                 Vidhyadhan Whatsapp
//                                             </a>
//                                         </li>
//                                         <li>
//                                             <a className="dropdown-item" href="https://www.amazon.com/">
//                                                 Flipkart Website
//                                             </a>
//                                         </li>
//                                         <li>
//                                             <a
//                                                 className="dropdown-item"
//                                                 href="https://y4d.ngo/what_we_do"
//                                             >
//                                                 Something else here
//                                             </a>
//                                         </li>
//                                     </ul>
//                                 </li>
//                                 <li className="nav-item">
//                                     <NavLink className="nav-link text-danger" aria-current="page" to="/donate">
//                                         <b>Donate</b>
//                                     </NavLink>
//                                 </li>
//                             </ul>
//                             <button className="btn btn-outline-success" type="submit">
//                                 <a href="login">
//                                     <b>Login</b>
//                                 </a>
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </nav>
//         </div>
//     );
// };

// export default Navbar;






import React, { useRef } from 'react';
import { Link, NavLink } from "react-router-dom";
import { Offcanvas } from 'bootstrap';
import "../navbar.css"

const Navbar = () => {
  const offcanvasRef = useRef(null);

  const handleLinkClick = () => {
    const offcanvasElement = offcanvasRef.current;
    if (offcanvasElement) {
      const bsOffcanvas = Offcanvas.getInstance(offcanvasElement);
      if (bsOffcanvas) {
        bsOffcanvas.hide();
      }
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow bg-warning rounded fixed-top">
        <div className="container-fluid">
          <img
            src={"vidhyahan.png"}
            alt="logo is not working"
            width="90px"
            height="50px"
          />
          <Link className="navbar-brand p-3 mb-1" to="#">
            <b>𝐕𝐢𝐝𝐡-ये-𝐃𝐡𝐚𝐧-𝐅𝐮𝐧𝐝𝐚𝐭𝐢𝐨𝐧</b>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            ref={offcanvasRef}
            style={{ backgroundColor: 'white' }} // Ensure the background color is white
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav ms-auto mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/home" onClick={handleLinkClick}>
                    <b>Home</b>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/" onClick={handleLinkClick}>
                    <b>AboutUs</b>
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <b>What we do</b>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://www.instagram.com/vidyadhan_non_profit_org/"
                        onClick={handleLinkClick}
                      >
                        Vidhyadhan Instagram
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="https://www.flipkart.com/" onClick={handleLinkClick}>
                        Flipkart Website
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://y4d.ngo/what_we_do"
                        onClick={handleLinkClick}
                      >
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/projects" onClick={handleLinkClick}>
                    <b>Projects</b>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/gallery" onClick={handleLinkClick}>
                    <b>Gallery</b>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/contactus" onClick={handleLinkClick}>
                    <b>ContactUs</b>
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <b>Media Corner</b>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="https://web.whatsapp.com/" onClick={handleLinkClick}>
                        Vidhyadhan Whatsapp
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="https://www.amazon.com/" onClick={handleLinkClick}>
                        Flipkart Website
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://y4d.ngo/what_we_do"
                        onClick={handleLinkClick}
                      >
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-danger" aria-current="page" to="/donate" onClick={handleLinkClick}>
                    <b>Donate</b>
                  </NavLink>
                </li>
              </ul>
              <button className="btn btn-outline-success" type="submit">
                <a href="login">
                  <b>Login</b>
                </a>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;


