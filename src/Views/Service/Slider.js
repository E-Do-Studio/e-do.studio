

function Slider() {
    return (
        <>
            <div className="slider">
                {images.map((image) => (
                    <div key={image.id} className="imageBox">
                        <img src={image.src} alt={image.alt} />
                        <p>{image.title}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Slider