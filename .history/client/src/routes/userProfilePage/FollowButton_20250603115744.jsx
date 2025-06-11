import React from 'react'

const FollowButton = ({isFollowing, username}) => {
  return (
    
      <button>{isFollowing ? "Unfollow" : "Follow"}</button>
    
  )
}

export default FollowButton
