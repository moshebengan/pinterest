import './galleryItem.css'

const GalleryItem = ({item}) => {
  return (
    <div className='galleryItem'>
      <img src={item.media} alt="" />
    </div>
  )
}

export default GalleryItem
