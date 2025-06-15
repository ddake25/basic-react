import React from 'react'

interface AlertProps {
    children: React.ReactNode;
    closeButton?: () => void;
}

const Alert = ({ children, closeButton }: AlertProps) => {
  return (
    <>
        <div className="alert alert-success alert-dismissible" role="alert">{children}</div>
        {/* <button type='reset' onClick={closeButton}>close</button> */}
        <button 
            type="button" 
            className="btn-close" 
            data-bs-dismiss="alert" 
            aria-label="Close"
            onClick={closeButton}></button>
    </>
  )
}

export default Alert