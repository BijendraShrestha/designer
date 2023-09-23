import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer section__padding bg__dark">
            <div className="container">
                <div className="footer__content grid text__light text__center">
                    <div className="footer__content--item">
                        <a href = "#" className="footer__navlink">Graphic Design</a>
                        <p className="para__text">&copy; 2022 Kamaladi All rights reserved. Designed by Bijendra.</p>
                    </div>

                    <div className="footer__content--item">
                        <a href = "mailto:someone@gmail.com">Bijendra@gmail.com</a>
                        <br />
                        <span>9841007007</span>
                    </div>

                    <div className="footer__content--item">
                        <h3 className="footer__title">Projects</h3>
                        <ul className="footer__links">
                            <li><a href = "#">About</a></li>
                            <li><a href = "#">Services</a></li>
                            <li><a href = "#">Career</a></li>
                        </ul>
                    </div>

                    <div className="footer__content--item">
                        <h3 className="footer__title">News</h3>
                        <ul className="footer__links">
                            <li><a href = "#">Events</a></li>
                            <li><a href = "#">Contact</a></li>
                            <li><a href = "#">Legals</a></li>
                        </ul>
                    </div>

                    <div className="footer__content--item">
                        <h3 className="footer__title">Social LInks</h3>
                        <ul className="footer__links">
                            <li><a href = "#">Facebook</a></li>
                            <li><a href = "#">Twitter</a></li>
                            <li><a href = "#">Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;