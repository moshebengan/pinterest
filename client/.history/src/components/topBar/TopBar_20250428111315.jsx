import UserButton from '../userButton/UserButton'
import './topBar.css'
import Image from '../image/image.jsx'

const TopBar = () => {
  return (
    <div className='topBar'>
      
      {/* Searchbar */}
      <div className="search">
        <Image path="/general/search.svg" alt="" />
        <input type="text" placeholder='Search' />
      </div>
      {/* User */}
      <UserButton/>
    </div>
  )
}

export default TopBar
