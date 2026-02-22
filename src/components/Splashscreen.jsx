import React from 'react';

const SplashScreen = ({ message = "" }) => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: '#000', // Black background to match your image
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999, // Ensure it's on top of everything
    }}>
      <img 
        src="/splash.jpg" 
        alt="Maya Logo" 
        style={{ width: '200px', height: 'auto' }} 
      />
      {message && <p style={{ color: '#00ffaa', marginTop: '20px', fontFamily: 'sans-serif' }}>{message}</p>}
    </div>
  );
};

export default SplashScreen;