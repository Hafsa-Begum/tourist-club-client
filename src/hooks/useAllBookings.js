import { useEffect, useState } from 'react';

const useAllBookings = () => {
    const [allBookings, setAllBookings] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allBookings')
            .then(res => res.json())
            .then(data => setAllBookings(data))
    }, []);
    return [allBookings, setAllBookings];
};

export default useAllBookings;