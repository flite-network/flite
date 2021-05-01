import useSwr from 'swr';

import React from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';

const Index = () => {
    const {data, error} = useSwr('api/test');
    console.log(data);

    return (
        <>
            <Navbar />
            <div className="login-body">
                <Button name="Login" />
            </div>
        </>
    );
}

export default Index;