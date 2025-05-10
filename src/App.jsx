import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import SearchBar from './components/searchBar'
import { fetchImages } from './key-api'
import ErrorMessage from './components/message'
import ImageGallery from './components/imageGallery'
import Loader from './components/loader'
import LoadMore from './components/loadmore'


function App() {
const [images, setImages] = useState([])
const [query, setQuery] = useState("")
const [page, setPage] = useState(1)
const [loading, setLoading] = useState(false)
const [error,setError] = useState(false)
const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    if(!query) return
  async function fetchData() {
    try {
      setLoading(true)
      const data = await fetchImages(query, page)
      console.log(data)
      setImages((prev) => (page === 1 ? data.results : [...prev, ...data.results]))
      setTotalPages(data.total_pages)
      setError(false)
    } catch (error) {
      console.log("Something went wrong", error);
      setError(true)
      toast.error("Something went wrong");
    } finally {
      setLoading(false)
  }
  }
fetchData()
  }, [query, page])

const handleSearch = (newQuery) => {
  if (newQuery.trim() === "") {
    toast.error("Please enter a search term.");
    return;
  }
  if (newQuery === query) {
    toast("You're already viewing this search.");
    return;
  }
  setQuery(newQuery);
  setPage(1);
  setImages([]);
};

  
  const handleLoadMore = () => setPage((prev) => prev + 1);

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message="Try again" />}
      {images.length > 0 && <ImageGallery items={images} />}
      {loading && <Loader />}
      {images.length > 0 && !loading && page < totalPages && (
        <LoadMore onClick={handleLoadMore} />
      )}
    </div>
  )
}

export default App
