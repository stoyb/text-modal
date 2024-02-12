import React from 'react';

export default function Modal({ isOpen, handleClose, children }) {
  
  const modalContainerBlock = {
    display: 'block',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    overflow: 'auto'
  };

  const modalContainerNone = {
    display: 'none'
  }

  const modalContent = {
    position: 'relative',
    backgroundColor: '#ffffff',
    margin: '300px auto',
    padding: '20px',
    width: '510px',
    borderRadius: '8px',
    boxShadow: '0 10px 20px 0 rgba(0, 0, 0, 0.3)',
    display: 'flex'
  }

  const modalText = {
    width: '146px'
  }

  const modalButton = {
    position:'relative',
    top: '-42px',
    left: '356px',
    fontSize: '32px',
    borderRadius:'50px',
    color:'#FFFFFF',
    backgroundColor:'#000000',
    padding:'8px 16px', 
    border: 'none'
} 
  
  return (
    <>
    <div style={isOpen ? modalContainerBlock : modalContainerNone}>
      <div style={modalContent}>
        <p style={modalText}>{children}</p>
        <button onClick={handleClose} style={modalButton}>X</button>
      </div>
    </div>
    </>
  );
};



