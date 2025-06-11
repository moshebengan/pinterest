import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import GalleryItem from '../galleryItem/GalleryItem';
import './gallery.css'

const fetchPins = async ({pageParam}) => {
  const res = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/pins?cursor=${pageParam}`)
  return res.data
}





const Gallery = () => {

  const {data, fetchNextPage, hasNextPage, status} = useInfiniteQuery({ queryKey: ['pins'], queryFn: fetchPins, initialPageParam:0, getNextPageParam: (lastPage, pages) => lastPage.nextCursor})
  
  if (status === "pending") return "Loading..."
  if (status === "error") return "Something went wrong..."


  console.log(data)
  return (
    <div className='gallery'>
      {/* {data?.map(item => (
        <GalleryItem key={item._id} item={item} />
      ))} */}
    </div>
  )
}

export default Gallery
