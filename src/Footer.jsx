import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="row">
                    <div className="col-lg-4 col-10">
                        <h2>MATRIX </h2>
                        <p>Plot No -7 phase - II Gurgaon, Haryana </p>
                    </div>

                    <div className="col-lg-4 col-10">
                        <h2>Quick Link</h2>
                        <div className="link">
                            <NavLink to=" /home" className="linkTag">Home</NavLink>
                            <NavLink to=" /service" className="linkTag" > Service</NavLink>
                            <NavLink to=" /about" className="linkTag">About</NavLink>
                            <NavLink to="#" className="linkTag">Career</NavLink>
                            <NavLink to="#" className="linkTag">Policy</NavLink>
                        </div>
                    </div>

                    <div className="col-lg-4 col-10">
                        <h2>About</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aspernatur tenetur tempore, incidunt aperiam quis.</p>
                    </div>
                    <p className ="text-center my-2">Copyright &copy; All Right Reserved MATRIX 2020 </p>
                </div>
            </div>
        </>
    )
}
export default Footer;