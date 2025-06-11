import UserButton from '../userButton/UserButton'
import './topBar.css'

const TopBar = () => {
  return (
    <div className='topBar'>
      
      {/* Searchbar */}
      <div className="search">
        <img src="/general/search.svg" alt="" />
        <input type="text" placeholder='Search' />
      </div>
      {/* User */}
      <UserButton/>
    </div>
  )
}

export default TopBar
