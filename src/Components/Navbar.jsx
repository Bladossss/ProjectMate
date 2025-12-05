import { Link } from "react-router-dom"
export function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/Pages/Page1" className="activeLink"> Все проекты</Link>
                    <Link to="/Pages/Page3" className="inactiveLink">Избранное</Link>
                    <Link to="/Pages/Page2" className="inactiveLink">О нас</Link>
                </div>
                <form action="" className="form">
                    <input type="search" className="search" /><img src="search.svg" alt="" className="search-img" />
                </form>
                <div className="add">
                    <img src="add.svg" alt="" />
                </div>
            </div>
        </>
    );
}