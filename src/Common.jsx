import React from 'react';
import { NavLink } from 'react-router-dom';
// import img1 from "../src/images/img1.png"
import "./index.css";


const Common = (props) => {
    return (
        <>
            <div className="container">
                <section id="header" className=" ">
                    <div className="container-fluid nav_bg">
                        <div className="row">
                            <div className="col-10 mx-auto">
                                <div className="row">


                                    <div className=" heading col-md-6 pt-5 pt-lg-0 order-2 order-lg-1  ">
                                        <h1>
                                            {props.name}
                                            <strong>MATRIX</strong>
                                        </h1>
                                        <h2 className="my-3">
                                            we are the team of talented developer making Websites.
                                    </h2>
                                        <div className="btn">

                                            <NavLink to={props.visit} className="btn-get-started">{props.btname}</NavLink>
                                        </div>
                                    </div>


                                    <div className="image col-lg-6 order-1 order-lg-2 header-img">
                                        <img src={props.imgsrc} className="img-fluid " alt="Team" />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};
export default Common;
