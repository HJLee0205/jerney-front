import React from "react";
import { useLocation } from "react-router-dom";

const About = (props) => {
    const location = useLocation()
    console.log(location)
    return (
      <div>
          <p>About.js</p>
          <p>라우터 테스트</p>
      </div>
    );
}

// function About() {
//     return (
//         <div>
//             <p>About.js</p>
//             <p>라우터 테스트</p>
//         </div>
//     );
// }

export default About;
