import './topBar.css'

const TopBar = () => {
  return (
    <div className='topBar'>
      
      {/* Searchbar */}
      <div className="search">
        <img src="/general/search.svg" alt="" />
        <input type="text" placeholder='Search...' />
      </div>
    </div>
  )
}

export default TopBar
