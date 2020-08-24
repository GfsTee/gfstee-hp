import React, { useState, useEffect } from 'react';
import Link from 'next/link'
const Navigation = () => {
    const [isShown, setIsShown] = useState(false)
    return (
        <nav>
            <div className={`${isShown ? "show" : "hide"} menu`} onClick={() => setIsShown(prev => !prev)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={`${isShown ? "show" : "hide"} hamburger`}>
                <ul>
                    <li><Link href=""><a>Home</a></Link></li>
                    <li><Link href=""><a>About</a></Link></li>
                    <li><Link href=""><a>Contact</a></Link></li>

                </ul>
            </div>
            <style jsx>{`
            nav {
                position: relative;
                
            }
            .menu.hide, .menu.show {
                background: #333;
                border-radius: 50%;
                height: 70px;
                width: 70px;
                position: fixed;
                top: 5vmin;
                right: 10vmin;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                z-index: 500001;
            }
            .menu span {
                height: 4px;
                width: 30px;
                background: #fff;
                display: inline-block;
                margin: 3px 0;
                border-radius: 3px;
                position: relative;
                transition: transform 1s linear, opacity 1s linear, transform-origin 1s linear, margin-left 1s linear;
                transition-delay: .2s;
                opacity: 1;
            }
            .menu.show span:nth-of-type(1) {
                transform: rotate(45deg) ;
                transform-origin: left top;
                margin-left: 10px;
                
            }
            .menu.show span:nth-of-type(2) {
                opacity: 0;
            }
            .menu.show span:nth-of-type(3) {
                transform: rotate(-45deg);
                transform-origin: left bottom;
                margin-left: 10px;
            }
            .hamburger {
                position: absolute;
                background: #000;
                width: 40%;
                height: 80vh;
                border-radius: 0 0 0 90%;
                transition: top 1s, right 2s;
            }
            .show {
                top: 0;
                right: 0;
                z-index: 50000;
            }
            .hide {
                top: -100vh;
                right: -100%;
            }
            ul {
                list-style: none;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }
            a {
                color: #fff;
                font-size: 3em;
            }
            `}</style>
        </nav >
    );
}

export default Navigation;