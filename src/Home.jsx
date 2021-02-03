import React from 'react';
import img1 from "../src/images/img1.png"
import "./index.css";
import Common from "./Common"

const Home = () => {
    return (
        <>
<Common 
       name = " Grow your business with"
       imgsrc ={img1}
       visit ="/service"
       btname ="Get Started"
       />

        </>
    );
};
export default Home;
