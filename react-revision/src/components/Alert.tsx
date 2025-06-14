import React from 'react'

interface AlertProps {
    children: React.ReactNode;
}

const Alert = ({ children }: AlertProps) => {
  return (
    <div className="alert alert-success" role="alert">{children}</div>
  )
}

export default Alert