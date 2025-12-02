import React from 'react';
import { twMerge } from 'tailwind-merge';

const Card = ({ children, className, ...props }) => {
    return (
        <div
            className={twMerge(
                'bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden',
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};

export default Card;
