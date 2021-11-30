import myImg from "../../assets/me.jpeg"
import github from "../../assets/github.png"
import linkedin from "../../assets/linkedin.png"
import facebook from "../../assets/facebook.png"
import email from "../../assets/email.png"

import "./About.css"

const AboutScreen = () => {

    return (
        <>
            <div className="aboutContainer">
                <div className="aboutHeadCont">
                    <img alt="myImage" src={myImg} className="aboutHeadImg" />
                    <div className="aboutMeCont">
                        <h2 className="aboutMeText">ABOUT ME</h2>
                        <p className="aboutMe">
                            I am David Sanosyan, a first-year student at YSU. I have been involved in IT. sector for 2 years already. The main language that I use for my projects is JS. I have graduated from TUMO, where I also volunteered  as an assistant for  programming classes. My current specification of software development is mobile and web applications.                        </p>
                    </div>
                </div>
                <div className="miniCont">
                    <div className="miniBox">
                        {/* <h2 align="center" className="miniBoxTitle">Skills</h2> */}
                        <div className="miniBoxCont">
                            {/* <p className="miniBoxText" >HTML, CSS, bootstrap, javascript, react, redux, react-native, expo, node.js, RESTful API, mongoDB, firebase, git</p> */}
                            <div style={{ marginTop: 25 }}>
                                <h2 align="center" className="miniBoxTitle">Education</h2>
                                <p className="miniBoxText" >* ASHOCK SECONDARY SCHOOL </p>
                                <p className="miniBoxText" >* TUMO - CENTER FOR CREATIVE TECHNOLOGIES </p>
                                <p className="miniBoxText" >* ARMATH ENGINEERING LABARATORY </p>
                                <p className="miniBoxText" >* EREVAN STATE UNIVERSITY FACULTY OF RADIOPHYSICS </p>
                            </div>
                        </div>
                    </div>
                    <div className="miniBox">
                        <div className="miniBoxCont">
                            {/* <p className="miniBoxText" >HTML, CSS, bootstrap, javascript, react, redux, react-native, expo, node.js, RESTful API, mongoDB, firebase, git</p> */}
                            <div style={{ marginTop: 25 }}>
                                <h2 align="center" className="miniBoxTitle">Skills</h2>
                                <h4 className="aa"><i>web technologies</i></h4>
                                <p className="miniBoxText" >HTML/CSS, PHP/Laravel js/Node, react/redux, react-native, expo</p>
                                <h4 className="aa"><i>robotics and cyber security</i></h4>
                                {/* robotics / drons */}
                                <p className="miniBoxText" >
                                    robotics / drons,
                                    electronics,
                                    3d modeling / 3d printing,
                                    photoshop,
                                    Basics of cyber security,
                                    etical hacking,
                                    Social Engineering </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutScreen;

{/* <h2 align="center" className="miniBoxTitle">Skills</h2>
<div className="miniBoxCont">
    <p className="miniBoxText" >HTML, CSS, bootstrap, javascript, react, redux, react-native, expo, node.js, RESTful API, mongoDB, firebase, git</p>
    </div> */}
{/* <h2 style={{ marginBottom: 10 }} align="center" className="miniBoxTitle">Contact</h2> */ }
{/* <div className="miniBoxCont">
    <a href="mailto:dav.sanosyan.dev@gmail.com"><img alt="email" className="miniBoxImg" src={email} /></a>
    <a href="https://www.linkedin.com/in/david-sanosyan-a2ab7b221/" target="_blank" rel="noreferrer"><img alt="linkedin" className="miniBoxImg" src={linkedin} /></a>
    <a href="https://github.com/DavSanosyan0145" target="_blank" rel="noreferrer"><img className="miniBoxImg" alt="github" src={github} /></a>
    <a href="https://www.facebook.com/davit.sanosyan" target="_blank" rel="noreferrer"> <img className="miniBoxImg" alt="facebook" src={facebook} /></a>
</div> */}