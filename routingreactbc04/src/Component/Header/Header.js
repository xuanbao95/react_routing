import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <NavLink className="navbar-brand" to="#">Cybersoft</NavLink>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item "> {/*trong navLink có activeClassname và activeStyle dùng để css*/}
                        <NavLink activeClassName="text-danger" activeStyle={{ backgroundColor: "#ffff", color: "#000" }} className="nav-link" to="/home">Home <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="text-danger" activeStyle={{ backgroundColor: "#ffff", color: "#000" }} className="nav-link" to="/login">Login</NavLink>

                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="text-danger" activeStyle={{ backgroundColor: "#ffff", color: "#000" }} className="nav-link" to="/register">Register</NavLink>

                    </li>
                    <li className="nav-item"><NavLink activeClassName="text-danger" activeStyle={{ backgroundColor: "#ffff", color: "#000" }} className="nav-link" to="/about">About</NavLink></li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Hook</a>
                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                            <NavLink className="dropdown-item" to="/demoUseState">UseStateDemo</NavLink>
                            <NavLink className="dropdown-item" to="/demoUseEffect">UseEffectDemo</NavLink>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Bài Tập</a>
                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                            <NavLink className="dropdown-item" to="/chonXe">Chọn Xe</NavLink>

                        </div>
                    </li>

                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>

    )
}
