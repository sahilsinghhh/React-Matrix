import React from 'react';
import Common from './Common';
import team from "../src/images/team.png"

const About = () => {
    return (
        <>
       <Common 
       name = " About "
       imgsrc ={team}
       visit ="/contact"
       btname ="contact Now"
       />
       <div className="container">
       <p className = 'aboutPara'>MATRIX Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, quibusdam incidunt amet dicta fuga in, ullam eos sed atque labore quia aliquid. Sit atque temporibus sint iusto totam doloremque odit tempore, ducimus laboriosam, illo voluptates hic magnam facilis reiciendis soluta! Possimus ea corporis animi totam blanditiis, ab tempore laborum assumenda impedit atque aut recusandae beatae optio nisi vel fugiat nihil non, perferendis, voluptatum quam nostrum. Maxime, qui quo. Labore pariatur, saepe nesciunt rerum excepturi, odit id consequatur ad, molestiae optio ut doloribus. Labore ullam praesentium, similique atque saepe necessitatibus doloremque veritatis, maxime iusto nostrum laboriosam voluptates ipsa iste dicta facilis.</p>
       </div>
       
        </>
    );
};
export default About;