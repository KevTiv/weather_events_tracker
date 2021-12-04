import {Icon} from '@iconify/react';
import githubIcon from '@iconify/icons-mdi/github';
import linkedinIcon from '@iconify/icons-mdi/linkedin';
import nasaLogo from '../Utils/Img/nasa_logo.png';

const Footer = () => {
    const linkedinHrefLink:string = "https://rw.linkedin.com/in/kevin-tivert";
    return (
        <div className="footer-container">
            <div className=" footer-container-wrapper ">
                <div>
                    <div className="footer-img-container">
                        <h1>Powered by <strong>the NASA API</strong>.</h1>
                        <img className="img-footer-responsive" src={nasaLogo} alt="NASA logo"/>
                    </div>
                    <p>Copyright © 2021 Kevin Tivert</p>
                    <p>All rights reserved</p>
                    <div className="footer-socials-container">
                        <div className="social-link-container ">
                            <a href="https://github.com/KevTiv/wildfire_tracker" target="_blank" rel="noreferrer">
                                <Icon icon={githubIcon} className="icon-marke"/>
                            </a>
                        </div>
                        <div className="social-link-container ">
                            <a href="https://rw.linkedin.com/in/kevin-tivert" target="_blank" rel="noreferrer">
                                <Icon icon={linkedinIcon} className="icon-marke"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;