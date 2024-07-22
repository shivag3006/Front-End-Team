import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="container-fluid ">
        <nav className="navbar navbar-expand-lg shadow bg-warning  rounded  fixed-top  ">
          <div className="container-fluid logo">
            <img
              src={"vidhyahan.png"}
              alt="logo is not working"
              width="90px"
              height="50px"
            />
            {/* <img src="https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg" 
              alt="imgnotworking" width='90px' height='50px'/> */}
            <Link
              className="navbar-brand text-primary shadow-lg p-3 mb-1 "
              to="#"
            >
              <b> 𝒱𝐼𝒟𝐻-ये-𝒟𝐻𝒜𝒩 </b>
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-lg-0">
                <li className="nav-item">
                  <Link
                    ClassName=" border-outline-success"
                    className="nav-link   "
                    aria-current="page"
                    to="home"
                    activeClassName="active"
                  >
                    <b>Home</b>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link  " aria-current="page" to="/">
                    <b>AboutUs</b>
                  </Link>
                </li>

                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="whatwedo"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <b>What we do</b>
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <Link
                        class="dropdown-item"
                        to="https://www.instagram.com/vidyadhan_non_profit_org/"
                      >
                        Vidhyadhan instagram
                      </Link>
                    </li>
                    <li>
                      <Link
                        class="dropdown-item"
                        to="https://www.flipkart.com/"
                      >
                        Flipkart Website
                      </Link>
                    </li>
                    <li>
                      <Link
                        class="dropdown-item"
                        to="https://y4d.ngo/what_we_do"
                      >
                        Something else here
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link   "
                    aria-current="page"
                    to="projects"
                  >
                    <b>Projects</b>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="gallery">
                    <b>Gallery</b>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="contactus">
                    <b>ContactUs</b>
                  </Link>
                </li>

                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="whatwedo"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <b>Media Corner</b>
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <Link
                        class="dropdown-item"
                        to="https://web.whatsapp.com/"
                      >
                        Vidhyadhan Whatsapp
                      </Link>
                    </li>

                    <li>
                      <Link class="dropdown-item" to="https://www.amazon.com/">
                        Flipkart Website
                      </Link>
                    </li>

                    <li>
                      <Link
                        class="dropdown-item"
                        to="https://y4d.ngo/what_we_do"
                      >
                        Something else here
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link text-danger"
                    aria-current="page"
                    to="donate"
                  >
                    <b>Donate</b>
                  </Link>
                </li>
              </ul>
              <button className="btn btn-outline-success" type="submit">
                <a href="login">
                  <b> Login </b>
                </a>
              </button>
              {/* <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Login
                </button>
              </form> */}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
