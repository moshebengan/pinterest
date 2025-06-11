import './collections.css'
import Image from '../image/image'

const Collections = () => {
  return (
    <div className='collections'>
      {/* Collection */}
      <Image path="/pins/pin1.jpeg" alt=""/>
      <div className="collectionInfo">
        <h1>Minimalist Bedrooms</h1>
        <span>12 pins · 1w</span>
      </div>
    </div>
  )
}

export default Collections
