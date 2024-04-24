import Head from 'next/head';
import Navbar from './navbar'
import styles from './layout.module.css';

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/logo.png" />
            </Head>

            <Navbar></Navbar>
            <div className="page-container">{children}</div>
        </>
    );
}