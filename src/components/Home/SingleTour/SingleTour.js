import React from 'react';
import { useParams } from 'react-router-dom';

const SingleTour = () => {
    const { id } = useParams()
    return (
        <div>
            <h1>single tour {id}</h1>
        </div>
    );
};

export default SingleTour;