import UserButton from '../userButton/UserButton'
import './topBar.css'
import Image from '../image/image.jsx'
import { useNavigate } from 'react-router'

const TopBar = () => {

  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?search=${e.target[0].value}`)
  }

  return (
    <div className='topBar'>
      
      {/* Searchbar */}
      <form onSubmit={handleSubmit} className="search">
        <Image path="/general/search.svg" alt="" />
        <input type="text" placeholder='Search' />
      </form>
      {/* User */}
      <UserButton/>
    </div>
  )
}

export default TopBar
