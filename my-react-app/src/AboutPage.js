import React from 'react';
import Button from './Button';

const AboutPage = () => {
    return (
        <div>
            <h1>About Page</h1>
            <Button text="Learn More" onClick={() => alert('Button clicked!')} />
        </div>
    );
};

export default AboutPage;
