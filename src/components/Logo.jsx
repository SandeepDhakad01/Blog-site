import React from 'react'

function Logo({classes = "w-[60px]"}) {
  return (
    <div className={`${classes} rounded-full overflow-hidden`} > <img src="..\public\images\your-blog logo.jpg" alt="logo" /></div>
  )
}

export default Logo