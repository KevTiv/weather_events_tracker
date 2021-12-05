import {Icon} from '@iconify/react';
import githubIcon from '@iconify/icons-mdi/github';
import linkedinIcon from '@iconify/icons-mdi/linkedin';
import nasaLogo from '../Utils/Img/nasa_logo.png';

type footerProps ={
    currentYear: number;
}
const Footer = ({currentYear}:footerProps) => {
    const linkedinHrefLink:string = "https://rw.linkedin.com/in/kevin-tivert";
    const githubHrefLink:string = "https://github.com/KevTiv/wildfire_tracker";
    const nasaEonetLink:string = "https://eonet.gsfc.nasa.gov/";
    return (
        <div className="footer-container">
            <div className=" footer-container-wrapper ">
                <div>
                    <div className="footer-img-container">
                        <h1>Powered by the<strong><a href={nasaEonetLink} target="_blank" rel="noreferrer"> NASA API</a></strong>.</h1>
                        <img className="img-footer-responsive" src={nasaLogo} alt="NASA logo"/>
                    </div>
                    <p>Copyright © {currentYear.toString()} Kevin Tivert</p>
                    <p>All rights reserved</p>
                    <div className="footer-socials-container">
                        <div className="social-link-container ">
                            <a href={githubHrefLink} target="_blank" rel="noreferrer">
                                <Icon icon={githubIcon} className="icon-marke"/>
                            </a>
                        </div>
                        <div className="social-link-container ">
                            <a href={linkedinHrefLink} target="_blank" rel="noreferrer">
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