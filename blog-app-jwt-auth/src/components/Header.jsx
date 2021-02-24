import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <nav className="navbar custom navbar-expand-lg navbar-light bg-light justify-content-between">
                <NavLink to="/" className="navbar-brand">
                    Blog Post
                </NavLink>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        {/* <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> */}
                        <NavLink
                            to="/blog"
                            className="nav-link"
                        >
                            Blog List
                        </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink
                            to="/login"
                            className="nav-link"
                        >
                            Login
                        </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink
                            to="/register"
                            className="nav-link"
                        >
                            Register
                        </NavLink>
                    </li>
                </ul>
                {/* <form className="form-inline">
                    <input
                        onChange={onTypeSearchQuery}
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <button
                        className="btn btn-outline-success my-2 my-sm-0"
                        onClick={submitSearchResult}
                        type="submit"
                    >
                        Search
          </button>
                </form> */}
            </nav>
        </header>
    )
}

export default Header
