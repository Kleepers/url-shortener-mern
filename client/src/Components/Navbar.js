import React, {useContext} from 'react';
import {Link, useHistory, useNavigate} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";

const Navbar = () => {
    const auth = useContext(AuthContext)
    const history = useNavigate()

    const logoutHandler = event => {
        event.preventDefault();
        auth.logout()
        history.push('/')
    }

    return (
        <nav>
            <Link to="/create">Create</Link>
            <Link to="/links">Links</Link>
            <a htef="/" onClick={logoutHandler}>Logout</a>
        </nav>
    );
};

export default Navbar;
