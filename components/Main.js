import Link from 'next/link'
const Main = () => {
    return (
        <main>
            <div className="child" id="one">
                <Link href="/#two"><a>next</a></Link>
                <Link href="/#five"><a>back</a></Link>
            </div>
            <div className="child" id="two">
                <Link href="/#three"><a>next</a></Link>
                <Link href="/#one"><a>back</a></Link>
            </div>
            <div className="child" id="three">
                <Link href="/#four"><a>next</a></Link>
                <Link href="/#two"><a>back</a></Link>
            </div>
            <div className="child" id="four">
                <Link href="/#five"><a>next</a></Link>
                <Link href="/#three"><a>back</a></Link>
            </div>
            <div className="child" id="five">
                <Link href="/#one"><a>next</a></Link>
                <Link href="/#four"><a>back</a></Link>
            </div>
            <style jsx>{`
            
            main {
                display: flex;
                overflow-x: scroll;
                scroll-snap-type: x proximity;
                min-height: calc(100vh - 5px);
                align-items: center;
            }
            .child {
                width: 90vw;
                height: 80vh;
                scroll-snap-align: center;
                flex: none;
            }
            .child:first-of-type {
                margin-left: 5vw
            }
            .child:last-of-type {
                margin-right: 5vw;
            }
            .child:nth-of-type(odd) {background:red}
            .child:nth-of-type(even) {background:yellow}
        
            // Scrollbar
            main::-webkit-scrollbar-track {
                -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
                background-color: #F5F5F5;
            }

            main::-webkit-scrollbar {
                width: 6px;
                background-color: #F5F5F5;
            }

            main::-webkit-scrollbar-thumb {
                background-color: #000000;
            }
            `}</style>
        </main>
    );
}

export default Main;