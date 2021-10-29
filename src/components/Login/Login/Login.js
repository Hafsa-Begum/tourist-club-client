import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { setUser, signInUsingGoogle, setIsLoading } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleSignIn = () => {
        setIsLoading(true);
        signInUsingGoogle()
            .then(result => {
                console.log(result.user)
                setUser(result.user)
                history.push(redirect_uri);
            })
            .finally(() => setIsLoading(false));
    }
    return (
        <div>
            <button className='my-5 btn btn-warning' onClick={handleGoogleSignIn}>Google Sign In</button>
        </div>
    );
};

export default Login;