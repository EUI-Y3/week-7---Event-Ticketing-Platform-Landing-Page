import React, { useEffect, useState } from 'react';
import './preloader.css';

const Preloader = () => {
    const [visible, setVisible] = useState(true);
    const [fading, setFading] = useState(false);

    useEffect(() => {
        const fadeTimer = setTimeout(() => setFading(true), 2500);
        const hideTimer = setTimeout(() => setVisible(false), 3100);
        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(hideTimer);
        };
    }, []);

    if (!visible) return null;

    return (
        <div className={`preloader ${fading ? 'preloader--fade' : ''}`}>
            <div className="preloader__inner">
                <div className="preloader__logo">EVENTIX</div>
                <div className="preloader__ring">
                    <svg viewBox="0 0 80 80" width="80" height="80">
                        <defs>
                            <linearGradient id="preloader-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#522A70" />
                                <stop offset="100%" stopColor="#FBD050" />
                            </linearGradient>
                        </defs>
                        <circle className="preloader__ring-track" cx="40" cy="40" r="34" />
                        <circle className="preloader__ring-arc" cx="40" cy="40" r="34" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Preloader;