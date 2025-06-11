import React from 'react'

const Workspace = ({previewImg}) => {
  return (
    <div className='workspace'>
     <div className="canvas">
        <img src={previewImg.url} alt="" />
     </div>
    </div>
  )
}

export default Workspace
