import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <img style={{
                height: "100vh",
                width: '100%'
            }} src="https://i.ibb.co/WVf8zFH/2142355-ai.png" alt="" />
            <Link to='/home'><button className="btn btn-primary mb-4">Go Home</button></Link>
        </div>
    );
};

export default ErrorPage;