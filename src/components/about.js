import React from 'react';
import Rainbow from '../higher-order-component/rainbow';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

library.add(faCheck)


const About = () =>{
    return(
        <div className="container center">
            <h4 className="about">About
        </h4>
        <div className="space"></div>
        <div className="skillSet">
            <p>Hello I'm Blaithin a web developer based in London. <br />I am currently working as a junior full stack developer.</p>
            <p>My skills include: </p>
            <ol>
                <li>HTML &nbsp;&nbsp;<FontAwesomeIcon icon="check" /></li>
                <li>CSS &nbsp;&nbsp;<FontAwesomeIcon icon="check" /></li>
                <li>SASS &nbsp;&nbsp;<FontAwesomeIcon icon="check" /></li>
                <li>JavaScript &nbsp;&nbsp;<FontAwesomeIcon icon="check" /></li>
                <li>React &nbsp;&nbsp;<FontAwesomeIcon icon="check" /></li>
                <li>Redux &nbsp;&nbsp;<FontAwesomeIcon icon="check" /></li>
                <li>Photoshop &nbsp;&nbsp;<FontAwesomeIcon icon="check" /></li>
            </ol>
            <p>Outside of work, I regularly attend tech meetups and stay up to date with the latest developments by listening to coding podcasts and webinars. </p>
            </div>
        </div>
    )
}

export default Rainbow(About)