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
                    <li><Link href=""><a className="from-left">About</a></Link></li>
                    <li><Link href=""><a className="from-right">Contact</a></Link></li>

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
                transform: rotate(45deg);
                transform-origin: left top;
                margin-left: 12px;
            }
            .menu.show span:nth-of-type(2) {
                opacity: 0;
            }
            .menu.show span:nth-of-type(3) {
                transform: rotate(-45deg);
                transform-origin: left bottom;
                margin-left: 12px;
            }
            .menu.show:hover span {
                animation: pulsation-span 1s ease-in-out infinite;
            }
            @keyframes pulsation-span {
                0%,100% {box-shadow: 0px 0px 0px #fff, 0px 0px 0px #fff}
                50% {box-shadow: 5px 0px 0px #fff, -5px 0px 0px #fff}
            }
            
            @keyframes move-span-up {
                0%, 100% {transform: translateY(0)}
                50% {transform: translateY(-4px)}
            }
            @keyframes move-span-down {
                0%, 100% {transform: translateY(0)}
                50% {transform: translateY(4px)}
            }
            .menu.hide:hover span:nth-of-type(1) {
                animation: move-span-up 1s linear infinite;
            }
            .menu.hide:hover span:nth-of-type(3) {
                animation: move-span-down 1s linear infinite;
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
            a {
                display: block;
                padding-bottom: 2px;
            }
            a:after {
                display:block;
                content: '';
                border-bottom: solid 3px #019fb6;  
                transform: scaleX(0);  
                transition: transform 500ms ease-in-out;
            }
            a:hover:after {
                transform: scaleX(1);
            }
            .from-left:hover:after {
                transform-origin: left;
                transform: scaleX(1);
            }
            .from-right:hover:after {
                transform-origin: right;
                transform: scaleX(1);
            }
            `}</style>
        </nav >
    );
}

export default Navigation;