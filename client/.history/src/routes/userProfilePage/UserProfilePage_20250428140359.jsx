import React from 'react'
import Image from '../../components/image/image'

const UserProfilePage = () => {
  return (
    <div className='profilePage'>
      <Image path="/general/noAvatar.png" alt="" />
      <h1>John Doe</h1>
      <span>@johnDoe</span>
      <div className="">10 followers · 10 following </div>
      <div className="">
        <Image path="/general/share.svg" alt="" />
        <button>Message</button>
        <button>Follow</button>
        <Image path="/general/more.svg" alt="" />
      </div>
    </div>
  )
}

export default UserProfilePage
