import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script'
export default function FirstPost() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
                <Script
                    src="https://connect.facebook.net/en_US/sdk.js"
                    strategy="lazyOnload"
                    onLoad={() =>
                        console.log(`script loaded correctly, window.FB has been populated`)
                    }
                />
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
            <img src="/me.png" alt="me" width="64" height="64" />
        </>
    )
}
