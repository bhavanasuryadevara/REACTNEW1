import React, { useState } from 'react';
import './Lightcss.css'; // Import your CSS file where you define styles

function Light() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={isDarkMode ? 'app dark-mode' : 'app light-mode'}>
            <header>
                <h1>Light/Dark Mode Toggle</h1>
                <button onClick={toggleMode}>
                    {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                </button>
            </header>
            <main>
                <p>This is a sample content area.</p>
            </main>
        </div>
    );
}

export default Light;
