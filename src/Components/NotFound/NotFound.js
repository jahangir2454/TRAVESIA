import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="notfound">
            <img src="https://cdn4.vectorstock.com/i/1000x1000/75/83/404-error-page-not-found-plug-graphic-vector-19997583.jpg" alt="" />
            <div className="notFound-btn">
                <Link exact to="/home">
                  <button className="all-btn">Back Home</button>
                </Link>
           </div>
        </div>
    );
};

export default NotFound;