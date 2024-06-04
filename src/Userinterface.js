import React from 'react'

const Userinterface = () => {
  return (
    <div>
        
        <div className="container-fluid">
        <nav className="navbar navbar-expand-lg  shadow p-3 mb-5 bg-warning fixed-top rounded">
            <div className="container-fluid">
              <img src="https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg" alt="imgnotworking" width='90px' height='50px'/>
              <a className="navbar-brand text-danger"  href="#">  𝒱𝐼𝒟𝐻-ये-𝒟𝐻𝒜𝒩 </a>  
              
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active text-primary" aria-current="page" href="https://www.instagram.com/vidyadhan_non_profit_org/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">About-Us</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-secondary" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <b>What we do</b>
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><hr className="dropdown-divider"/></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Gallery</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Projects</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Contact Us</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-info" href="https://y4d.ngo/what_we_do">Link</a>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
    </div>
    <div className="space mt-5 pt-5">
    </div>

    <div className="container mt-5 pt-5">
        <div className="row">

            <div className="col-md-6 shadow bg-body-tertiary rounded">
              
                <div className="row justify-content-center login w-95">
                    
                    <div className="card bg-warning text-dark ">
                        <div className="card-body">
                          <h3 className="card-title text-center mb-4">Login Form</h3>
                          <form>
                            <div className="mb-3">
                              <i className="fa-solid fa-user"></i>
                              <label for="name" className="form-label">Name</label>
                              <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
                            </div>
                            <div className="mb-3">
                              <i className="fa-solid fa-phone"></i>
                              <label for="phone" className="form-label">Phone Number</label>
                              <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" required />
                            </div>
                            <div className="mb-3">
                              <i className="fa-solid fa-envelope"></i>
                              <label for="email" className="form-label">Email address</label>
                              <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter your email" required/>
                            </div>
                            <div className="mb-3">
                              <i className="fa-solid fa-check"></i>
                              <label for="dropdown" className="form-label">Dropdown</label>
                              <select className="form-select" id="dropdown" required>
                                <option value="">Select an option</option>
                                <option value="Job related">Job related</option>
                                <option value="Register">Register</option>
                                <option value="Not interested">Not interested</option>
                              </select>
                            </div>
                            <div className="mb-3">
                              <i className="fa-solid fa-pen-nib"></i>
                              <label for="description" className="form-label">Description</label>
                              <textarea className="form-control" id="description" rows="3" placeholder="Enter your description"></textarea>
                            </div>
                            <div className="mb-3 form-check">
                              <input type="checkbox" className="form-check-input" id="checkbox"/>
                              <label className="form-check-label" for="checkbox">Iam not a robot <img src="https://m.media-amazon.com/images/I/31MqR2pPE5L._SX300_SY300_QL70_FMwebp_.jpg" width="50px" height="50px"/></label>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                          </form>
                        </div>
                    </div>  
                  </div>
            </div>
        </div>
    </div>
</div>


        

            

  )
}

export default Userinterface
