import logo from "../../../public/svg/logo.svg";
import React from 'react';
import styles from './Footer.module.sass';
import { Icon } from "@iconify/react";
import { Link } from 'react-scroll';
import TopLeftParticles from "../WaveParticles/TopLeft/TopLeftParticles";

export default function Footer() {
    const copyright = <p className={styles['current-year']}>&copy; {new Date().getFullYear()} - <strong>Jules LARUE</strong></p>;

    return (
        <footer className={styles.footer} id="footer">
            <TopLeftParticles />
            <div className={styles['footer-text']}>
                {copyright}
                <a href="mailto:jlarue1105@gmail.com">jlarue1105@gmail.com</a>
            </div>
            <figure className={styles.logo}>
                <Link className='anchor' to="banner" spy={true} smooth={true} duration={1000} offset={-80} easing="easeInOutQuart">
                    <img src={logo} alt="Logo" className={styles.logoIcon} />
                </Link>
            </figure>
            <div className={styles.socials}>
                <a href="https://www.linkedin.com/in/jules-lae/" target="_blank" rel="noreferrer">
                    <Icon icon="mdi:linkedin" className={styles["socials-icons"]} />
                </a>
                <a href="https://github.com/SraaaamX" target="_blank" rel="noreferrer">
                    <Icon icon="mdi:github" className={styles["socials-icons"]} />
                </a>
            </div>
        </footer>
    );
}