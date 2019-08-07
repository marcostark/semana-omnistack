import React from 'react';
import './Main.css';

import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';

export default function Main({ match }) {
    return (
        <div className="main-container">
            <img src={logo} alt="TinDev" />
            <ul>
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/2254731?v=4" alt="" />
                    <footer>
                        <strong>
                            Marcos Stark
                        </strong>
                        <p>Programador</p>                        
                    </footer>
                    <div className="buttons">
                            <button type="button">
                                <img src={dislike}/>
                            </button>
                            <button>
                                <img src={like}/>
                            </button>
                        </div>
                </li>
            
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/2254731?v=4" alt="" />
                    <footer>
                        <strong>
                            Marcos Stark
                        </strong>
                        <p>Programador</p>                        
                    </footer>
                    <div className="buttons">
                            <button type="button">
                                <img src={dislike}/>
                            </button>
                            <button>
                                <img src={like}/>
                            </button>
                    </div>
                </li>
           
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/2254731?v=4" alt="" />
                    <footer>
                        <strong>
                            Marcos Stark
                        </strong>
                        <p>Programador</p>                        
                    </footer>
                    <div className="buttons">
                            <button type="button">
                                <img src={dislike}/>
                            </button>
                            <button>
                                <img src={like}/>
                            </button>
                        </div>
                </li>
            </ul>
        </div>
    );
}