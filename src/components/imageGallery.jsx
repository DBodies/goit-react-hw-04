import ImgCards from "./imageCard"

const ImageGallery = ({ items }) => {
    return (
        <div>
    <ul>
        {items.map((item) => {
            <li key={item.id}>
                <ImgCards item={item} />
    </li>
})}
            </ul>
            </div>
        )
}
export default ImageGallery
