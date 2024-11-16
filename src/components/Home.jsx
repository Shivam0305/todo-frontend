// src/pages/Home.js

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Welcome to the To-Do App!</h1>
            <p><Link to="/tasks">Go to Tasks</Link></p>
        </div>
    );
};

export default Home;
