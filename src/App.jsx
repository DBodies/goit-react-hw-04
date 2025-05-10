import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import SearchBar from './components/searchBar'
import { fetchImages } from './key-api'
import ErrorMessage from './components/message'
import ImageGallery from './components/imageGallery'
import Loader from './components/loader'
import LoadMoreBtn from './components/loadMoreBtn'
import ImageModal from './components/imageModal'
import styles from './App.module.css'

function App() {
const [images, setImages] = useState([])
const [query, setQuery] = useState("")
const [page, setPage] = useState(1)
const [loading, setLoading] = useState(false)
const [error,setError] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(false)

  const openModal = (image) => {
    console.log("Opening modal with image:", image); // Проверьте, что выводится в консоль
    setSelectedImage(image);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };
  

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
  <div className={styles.mainStyle}>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message="Try again" />}
      {images.length > 0 && <ImageGallery items={images} onImageClick={openModal} />}
      {loading && <Loader />}
      {images.length > 0 && !loading && page < totalPages && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      <ImageModal
        isOpen={isModalOpen}
        image={selectedImage}
        onClose={closeModal}
      />
    </div>
  )
}

export default App
