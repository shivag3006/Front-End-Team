import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const MediaCorner = () => {
  return (
    <div>
      <h1> This Is About MediaCorner in Our Website </h1>
      <ul className="whatwedo-menu hover">
          <li><Link className="whatwedo-item" to="https://web.whatsapp.com/">Vidhyadhan whatsapp</Link></li>
          <li><Link className="whatwedo-item" to="https://www.flipkart.com/">Another action</Link></li>
          <li><Link className="whatwedo-item" to="https://y4d.ngo/what_we_do">Something else here</Link></li>
      </ul>
    </div>
  )
}

export default MediaCorner;
