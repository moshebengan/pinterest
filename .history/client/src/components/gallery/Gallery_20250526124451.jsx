import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import GalleryItem from "../galleryItem/GalleryItem";
import InfiniteScroll from "react-infinite-scroll-component";
import "./gallery.css";

const fetchPins = async ({ pageParam, search, userId, boardId }) => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_ENDPOINT}/pins?cursor=${pageParam}&search=${
      search || ""
    }&userId=${userId || ""}&boardId=${boardId || ""}`
  );
  return res.data;
};

const Gallery = ({ search, userId, boardId }) => {
  const { data, fetchNextPage, hasNextPage, status } = useInfiniteQuery({
    queryKey: ["pins", search, userId],
    queryFn: ({ pageParam = 0 }) => fetchPins({ pageParam, search, userId }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
  });

  if (status === "pending") return "Loading...";
  if (status === "error") return "Something went wrong...";

  console.log(data);

  const allPins = data?.pages.flatMap((page) => page.pins) || [];
  return (
    <InfiniteScroll
      dataLength={allPins.length}
      next={fetchNextPage}
      hasMore={hasNextPage}
      loader={<h4>Loading...</h4>}
      endMessage={<p>Yay! You have seen it all</p>}
    >
      <div className="gallery">
        {allPins?.map((item) => (
          <GalleryItem key={item._id} item={item} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default Gallery;
