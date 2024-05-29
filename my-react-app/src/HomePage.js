import React from 'react';
import Button from './Button';

const HomePage = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <Button text="Click Me" onClick={() => alert('Button clicked!')} />
        </div>
    );
};

export default HomePage;
