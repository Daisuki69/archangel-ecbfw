import React from 'react';

const SplashScreen = ({ message = "" }) => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: '#000', 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999, 
      willChange: 'transform',
      backfaceVisibility: 'hidden',
    }}>
      <img 
        src="/mayasplashscreen.jpg" 
        alt="Maya Logo" 
        decoding="async" loading="eager"
        style={{ width: '100vw', height: '100vh', objectFit: 'cover' }} 
      />
      {message && <p style={{ color: '#00ffaa', marginTop: '20px', fontFamily: 'sans-serif' }}>{message}</p>}
    </div>
  );
};

export default SplashScreen;