import React from 'react'
import Gallery from '../../components/gallery/Gallery'
import { useSearchParams } from 'react-router'

const SearchPage = () => {
  let [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  return (
    <Gallery search={search}/>
  )
}

export default SearchPage
