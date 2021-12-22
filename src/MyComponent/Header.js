import React from 'react'
import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand titleFont space" to="/">WEB<span className="text-danger space">LIO</span></NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarChange" aria-controls="navbarChange" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarChange">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li className="nav-item px-2">
                                    <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item px-2">
                                    <NavLink className="nav-link" to="/login">Login</NavLink>
                                </li>
                                <li className="nav-item px-2">
                                    <NavLink className="nav-link" to="/signup">Signup</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
    )
}
