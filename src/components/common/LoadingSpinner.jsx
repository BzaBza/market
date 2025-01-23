import React from 'react';

const LoadingSpinner = () => (
    <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-600"></div>
        <span className="ml-2 text-gray-600">Loading...</span>
    </div>
);

export default LoadingSpinner;