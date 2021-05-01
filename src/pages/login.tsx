import useSwr from 'swr';

import React from 'react';
import Navbar from '../components/Navbar';

const Index = () => {
    const {data, error} = useSwr('api/test');
    console.log(data);

    return (
         <Navbar />
    );
}

export default Index;