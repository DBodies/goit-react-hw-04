import toast, {Toaster} from "react-hot-toast"

const SearchBar = ({ onSubmit }) => {
    const handleSubmit = (evt) => {
        evt.preventDefault()
        const form = evt.target
        const topic = form.elements.topic.value.trim()
        if (!topic) {
            toast.error("Please enter search term!")
            return
        }
        onSubmit(topic)
        form.reset()
    }

    return (
        <>
            <Toaster/>
        <header>
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      autoComplete="off"
      autoFocus
                        placeholder="Search images and photos"
                        name="topic"
    />
    <button type="submit">Search</button>
  </form>
</header>
        </>
    )
}
export default SearchBar