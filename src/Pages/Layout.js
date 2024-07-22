import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";



const Layout = () => {
    return (
        <div>
            <Navbar/>

            {/* <Link to="/">AboutUs</Link> |
            <Link to="/home">Home</Link> |
            <Link to="/contactus">ContactUs</Link> |
            <Link to="contact"> Gallery </Link> |
            <Link to="/whatwedo">WhatWeDo</Link> */}
            <Outlet/>
        </div>
    )
}
export default Layout;