import React from "react";
import snimka from '../../assets/az.jpg';
import "./about.css";
export const About = () => {
    return(
        <div className="containerAbout">
            <img className="portrait" src={snimka}/>
            <div className="aboutText">
                <p>Аз съм Михаил Гигов, ученик от 12. К клас и възпитаник на Националната търговско-банкова гимназия. 
                Уеб технологиите са моя страст и се стремя към кариера в областта. Oбучението в гимназията
                ми помогна да поставя основите си в широк набор от знания и дисциплини и да изясня целите за бъдещето си,
                да бъда отговорен и старателен.
                </p>
            </div>
        </div>
    );
 }