import React, { useState, useEffect } from 'react';
import { FaAngleUp } from 'react-icons/fa';
import '../index.css';

const ScrollToTopBtn = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
   const  showScroolBtn =  () => {
        if (window.scrollY > 400) {
            setShowTopBtn(true);
        } else {
            setShowTopBtn(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', showScroolBtn);
        return () => window.removeEventListener('scroll', showScroolBtn);
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div className="top-to-btm">
            {showTopBtn && (
                <FaAngleUp
                    className="icon-position icon-style"
                    onClick={goToTop}
                />
            )}
        </div>
    );
};
export default ScrollToTopBtn;