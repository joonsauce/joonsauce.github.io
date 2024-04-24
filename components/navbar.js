import localFont from 'next/font/local'

const testFont = localFont({src: 'made_evolve_thin.woff2'})

export default function Navbar() {
    return (
        <>
            <nav className={`${testFont.className} navbar-container`}>
                <div className="navbar-logo-cont">
                    <a href="/"><img src="/logo.png" className="navbar-logo"></img></a>
                </div>
                <div className="navbar">
                    <a href="/" className="navbar-text"><h2>Home</h2></a>
                    <a href="/projects" className="navbar-text"><h2>Projects</h2></a>
                    <a href="/about" className="navbar-text"><h2>About</h2></a>
                    <a href="/about/#contact" className="navbar-text"><h2>Contact</h2></a>
                </div>
            </nav>
        </>
    );
}


