import useSwr, { useSWRInfinite } from 'swr';

import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
    const {data, error} = useSwr('api/test');
    console.log(data);

    return(
        <Navbar />
    );
}

export default Home;