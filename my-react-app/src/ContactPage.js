import React from 'react';

const ContactPage = () => {
    return (
        <div>
            <h1>Contact Page</h1>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message"></textarea>
                </div>
                <div>
                    <button type="submit">Send</button>
                </div>
            </form>
        </div>
    );
};

export default ContactPage;
