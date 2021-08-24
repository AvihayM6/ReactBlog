import '../style/Navbar.css';

const Navbar = () => {
    return ( 
        <nav className="navbar">
        <h1>React blog fundamentals</h1>
            <div className="links">
                <a href="/">Home </a>
                <a href="/create">New Blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;