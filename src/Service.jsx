import React from 'react';
import Card from "./Card"
// import { NavLink } from "react-router-dom"
import Sdata from "./Sdata"

const Service = () => {
    return (
        <>
            <div className="container">
                <div className="my-3">
                    <h1 className="text-center" >Our Services</h1>
                </div>

                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                {Sdata.map((val, ind) => {
                                    return <Card key={ind} imgsrc={val.imgsrc} title={val.title} />

                                })}



                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};
export default Service;