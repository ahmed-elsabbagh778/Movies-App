import React from 'react';

function LoadingSpinner() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="spinner-grow" role="status">
        <span className="sr-only visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default LoadingSpinner;