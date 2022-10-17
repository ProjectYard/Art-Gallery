import React from "react";
import "./Footer.css";
// import logo from "../assets/logo.png";
// import { IonIcon } from "@ionic/react";
// import { logoInstagram } from "ionicons/icons";
// import { logoLinkedin } from "ionicons/icons";
// import { logoFacebook } from "ionicons/icons";
// import { logoYoutube } from "ionicons/icons";
// import { logoTwitter } from "ionicons/icons";

function Footer() {
    return (
        <>
            <div class="footer-section">
                <div className="left-foot">
                    {/* <img className="logo" src={logo} alt="logo" srcset="" /> */}
                    <p>
                        We are a web hosting company with a mission to help everyone who
                        goes online succeed. We accomplish this by continuously developing
                        server technology, giving expert assistance, and ensuring a flawless
                        online website hosting experience.
                    </p>
                    <div className="pay-logo">
                        <img
                            className="pay"
                            src="https://assets.hostinger.com/images/payments/homepage-2020-payments/visa-5d68dadf24.png"
                            alt="logo"
                            srcset=""
                        />
                        <img
                            className="pay"
                            src="https://assets.hostinger.com/images/payments/homepage-2020-payments/mastercard-ca75c7f8d3.png"
                            alt="logo"
                            srcset=""
                        />
                        <img
                            className="pay"
                            src="https://assets.hostinger.com/images/payments/homepage-2020-payments/discover-1e5edf3f39.png"
                            alt="logo"
                            srcset=""
                        />
                        <img
                            className="pay"
                            src="https://assets.hostinger.com/images/payments/homepage-2020-payments/dinersclub-3f02e2deec.png"
                            alt="logo"
                            srcset=""
                        />
                        <img
                            className="pay"
                            src="https://assets.hostinger.com/images/payments/homepage-2020-payments/rupay-2bad18f6df.png"
                            alt="logo"
                            srcset=""
                        />
                    </div>
                    <div className="social-media">
                        {/* <IonIcon icon={logoFacebook} className="social-icon fb"></IonIcon>
                        <IonIcon icon={logoInstagram} className="social-icon ig"></IonIcon>
                        <IonIcon icon={logoLinkedin} className="social-icon ld"></IonIcon>
                        <IonIcon icon={logoTwitter} className="social-icon tt"></IonIcon>
                        <IonIcon icon={logoYoutube} className="social-icon yt"></IonIcon> */}
                    </div>
                </div>
                <hr></hr>
                <div className="right-foot">
                    <div className="ul-contt">
                        <div className="ul-list">
                            <h3>HOSTING</h3>
                            <ul>
                                <li>
                                    <a href="#">Web Hosting</a>
                                </li>
                                <li>
                                    <a href="#">VPS Hosting</a>
                                </li>
                                <li>
                                    <a href="#">Minecraft Server Hosting</a>
                                </li>
                                <li>
                                    <a href="#">CyberPanel Hosting</a>
                                </li>

                                <li>
                                    <a href="#">CMS Hosting</a>
                                </li>
                                <li>
                                    <a href="#">Ecommerce Hosting</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="ul-contt">
                        <div className="ul-list">
                            <h3>DOMAIN</h3>
                            <ul>
                                <li>
                                    <a href="#">Domain Name Search</a>
                                </li>
                                <li>
                                    <a href="#">Domain Transfer</a>
                                </li>
                                <li>
                                    <a href="#">Free Domain Name</a>
                                </li>
                                <li>
                                    <a href="#">XYZ Domain</a>
                                </li>
                                <li>
                                    <a href="#">Cheap Domains</a>
                                </li>
                                <li>
                                    <a href="#">Domain Extensions</a>
                                </li>
                                <li>
                                    <a href="#">WHOIS Lookup</a>
                                </li>
                                <li>
                                    <a href="#">Free SSL Certificate</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="ul-contt">
                        <div className="ul-list">
                            <h3>INFORMATION</h3>
                            <ul>
                                <li>
                                    <a href="#">Migrate to Hostinger</a>
                                </li>
                                <li>
                                    <a href="#">System Status</a>
                                </li>
                                <li>
                                    <a href="#">Affiliate Program</a>
                                </li>
                                <li>
                                    <a href="#">Payment Methods</a>
                                </li>
                                <li>
                                    <a href="#">Rewards</a>
                                </li>
                                <li>
                                    <a href="#">Reviews</a>
                                </li>
                                <li>
                                    <a href="#">Pricing</a>
                                </li>
                                <li>
                                    <a href="#">Sitemap</a>
                                </li>
                            </ul>
                            <h3>LEGAL</h3>
                            <ul>
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#">Terms of Service</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="ul-contt">
                        <div className="ul-list">
                            <h3>COMPANY</h3>
                            <ul>
                                <li>
                                    <a href="#">About Hostinger</a>
                                </li>
                                <li>
                                    <a href="#">Our Technology</a>
                                </li>
                                <li>
                                    <a href="#">Roadmap</a>
                                </li>
                                <li>
                                    <a href="#">Customer Care</a>
                                </li>
                                <li>
                                    <a href="#">Blog</a>
                                </li>
                            </ul>
                            <h3>HELP</h3>
                            <ul>
                                <li>
                                    <a href="#">Tutorials</a>
                                </li>
                                <li>
                                    <a href="#">Knowledge Base</a>
                                </li>
                                <li>
                                    <a href="#">Report Online Abuse</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pich-black">
                <p>
                    © 2004-2022 hostinger.in - India’s #1 Web Hosting & Domains provider.
                </p>
                <p>Prices are listed without VAT</p>
            </div>
        </>
    );
}

export default Footer;