import Head from 'next/head'

const Layout = () => {
    return (
        <>
            <Head>
                <title>GFSTee - Webdevelopment</title>
            </Head>
            <style global jsx>{`
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            a {
                color: inherit;
                text-decoration: none;
            }
            body {
                overflow-x: hidden;
            }
            `}</style>
        </>
    );
}

export default Layout;