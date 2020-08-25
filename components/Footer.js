import Link from 'next/link'

const Footer = () => {
    return (
        <footer>
            <Link href=""><a>Impressum</a></Link>
            <Link href=""><a>DSGvO</a></Link>
            <style jsx>{`
            footer {
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                display: flex;
                justify-content: space-around;
                padding: 10px 0;
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
                transition: transform 250ms ease-in-out;
            }
            a:hover:after {
                transform: scaleX(1);
            }
            `}</style>
        </footer>
    );
}

export default Footer;