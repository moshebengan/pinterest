import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import GalleryItem from '../galleryItem/GalleryItem';
import './gallery.css'

const fetchPins = async () => {
  const res = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/pins`)
  return res.data
}





const Gallery = () => {

  const {isPending, error, data} = useQuery({ queryKey: ['pins'], queryFn: fetchPins })
  if (error) return `An error has occurred: ${error.message}`
  if (isPending) return "Loading..."


  return (
    <div className='gallery'>
      {data?.map(item => (
        <GalleryItem key={item._id} item={item} />
      ))}
    </div>
  )
}

export default Gallery
