import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

export default function Header() {
    const { tenDangNhap } = useSelector(state => state.NguoiDungReducer)
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <NavLink className="navbar-brand" to="#">Cybersoft</NavLink>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item "> {/*trong navLink dùng activeClassname và activeStyle dùng để css*/}
                        <NavLink activeClassName="text-danger" activeStyle={{ backgroundColor: "#ffff", color: "#000" }} className="nav-link" to="/home">Home <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        {tenDangNhap.trim() !== '' ? <NavLink to="/" className="nav-link" to="/login">{tenDangNhap}</NavLink> : <NavLink activeClassName="text-danger" activeStyle={{ backgroundColor: "#ffff", color: "#000" }} className="nav-link" to="/login">Login</NavLink>}


                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="text-danger" activeStyle={{ backgroundColor: "#ffff", color: "#000" }} className="nav-link" to="/register">Register</NavLink>

                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="text-danger" activeStyle={{ backgroundColor: "#ffff", color: "#000" }} className="nav-link" to="/todoList_1">TodoList_1</NavLink>

                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="text-danger" activeStyle={{ backgroundColor: "#ffff", color: "#000" }} className="nav-link" to="/todoList_2">TodoList_2</NavLink>

                    </li>
                    <li className="nav-item"><NavLink activeClassName="text-danger" activeStyle={{ backgroundColor: "#ffff", color: "#000" }} className="nav-link" to="/about">About</NavLink></li>
                    <li className="nav-item"><NavLink activeClassName="text-danger" activeStyle={{ backgroundColor: "#ffff", color: "#000" }} className="nav-link" to="/detail">detail</NavLink></li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Hook</a>
                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                            <NavLink className="dropdown-item" to="/demoUseState">UseStateDemo</NavLink>
                            <NavLink className="dropdown-item" to="/demoUseEffect">UseEffectDemo</NavLink>
                            <NavLink className="dropdown-item" to="/apiClass">DemoApiClass</NavLink>
                            <NavLink className="dropdown-item" to="/apiFunction">DemoApiFunction</NavLink>
                            <NavLink className="dropdown-item" to="/reactSpring">React-spring</NavLink>
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
