import React, { useState, useEffect } from 'react';

const LoadingBar = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress < 100) {
                    return prevProgress + 1;
                } else {
                    clearInterval(interval);
                    return prevProgress;
                }
            });
        }, 30);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container">
            <div className="loading-bar" style={{ width: `${progress}%` }}></div>
            <div className="percentage">{progress}%</div>
        </div>
    );
};

export default LoadingBar;
