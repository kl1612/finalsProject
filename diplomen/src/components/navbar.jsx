import React from "react";
import {Link} from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
    return <div className="navbar">
        <div className="links">
            <Link className="link" to='/'>Начало</Link>
            <Link className="link" to='/shop'>Магазин</Link>
            <Link className="link" id="cart" to="/cart">Количка</Link>
            <Link className="link" to='/about'>За мен</Link>

        </div>
    </div>
}