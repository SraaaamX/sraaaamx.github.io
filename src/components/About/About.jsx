import React from 'react';
import ScrollAnimation from '../Animation/ScrollAnimation';
import { AnimationSection } from '../Animation/AnimationSection';
import styles from './About.module.sass';
import MainButton from '../Buttons/Main/MainButton';
import profileImg from '../../../public/images/profile.webp';
import TopLeftParticles from '../WaveParticles/TopLeft/TopLeftParticles';

export default function About() {
    return (
        <AnimationSection sectionName="about">
            <section className={`${styles['about-container']} ${styles['container']}`}>
                <TopLeftParticles />
                <ScrollAnimation>
                    <div className={styles['about-first']}>
                        <h2 className={styles['about-title']}>Bonjour, je suis <strong className={styles.highlight}>Jules LARUE</strong></h2>
                        <div className={styles['about-text']}>
                            <p>
                                Passionné par le développement web, j'aime concevoir des sites modernes et responsives qui
                                transforment des idées en expériences accessibles. Chaque défi est une occasion d'apprendre,
                                d'innover et de mêler technique et créativité pour donner vie à des projets uniques.
                            </p>
                        </div>
                        <MainButton
                            href="https://drive.google.com/file/d/149pTvMYwe5ed0gFyd0FTB1VQKganaf1I/view?usp=sharing"
                            children="Mon CV"
                            target="_blank"
                        />
                    </div>
                </ScrollAnimation>
                <ScrollAnimation delay={0.3}>
                    <figure className={styles['about-img']} alt="Photo de profil">
                        <img src={profileImg} alt=" Photo de profil" draggable="false" />
                    </figure>
                </ScrollAnimation>
            </section>
        </AnimationSection>
    );
}