import './galleryItem.css'

const GalleryItem = ({item}) => {
  return (
    <div className='galleryItem' style={{gridRowEnd: `span ${Math.ceil(item.height / item.width)}`}}>
      <img src={item.media} alt="" />
    </div>
  )
}

export default GalleryItem
