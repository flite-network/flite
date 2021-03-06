import React from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Input from '../components/Input';

const Index = () => {
    return (
        <>
            <Navbar />
            <div className="login-body">
                <Input placeholder="Email" />
                <br></br>
                <br></br>
                <Input placeholder="Password" />
                <br></br>
                <br></br>
                <Button name="Login/Signup" />
            </div>
        </>
    );
}

export default Index;