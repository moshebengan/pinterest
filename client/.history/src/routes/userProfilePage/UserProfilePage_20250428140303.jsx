import React from 'react'
import Image from '../../components/image/image'

const UserProfilePage = () => {
  return (
    <div className='profilePage'>
      <Image path="/general/noAvatar.png" alt="" />
      <h1>John Doe</h1>
      <span>@johnDoe</span>
      <div className="">10 followers · 10 following </div>
    </div>
  )
}

export default UserProfilePage
