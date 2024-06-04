import React from 'react'

const Error = ({ error }) => {
  return (
    <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <p style={{fontSize: '2rem'}}>Error: {error.message}</p>
    </div>
  )
}

export default Error