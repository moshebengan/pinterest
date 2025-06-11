import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import GalleryItem from '../galleryItem/GalleryItem';
import InfiniteScroll from 'react-infinite-scroll-component';
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

  const allPins = data?.pages.flatMap(page => page.pins) || []
  return (
    <InfiniteScroll dataLength={allPins.length} next={fetchNextPage} hasMore={hasNextPage} loader={<h4>Loading...</h4>}>
    <div className='gallery'>
      {allPins?.map(item => (
        <GalleryItem key={item._id} item={item} />
      ))}
    </div>
    </InfiniteScroll>
  )
}

export default Gallery
