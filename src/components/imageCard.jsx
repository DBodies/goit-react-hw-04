const ImgCards = ({ item }) => {
    const { urls, alt_description } = item
    
    return (
        <div>
        <img src={urls.small} alt={alt_description} />
        </div>
    )
}
export default ImgCards