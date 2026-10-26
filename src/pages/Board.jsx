import ImageCard from '../components/ImageCard.jsx'


function Board({images, onShuffle}){
    return (
        <>
            <button onClick={onShuffle}>Shuffle</button>
            <div className='board'>

                {images.map((img) => (
                <ImageCard key={img.id} image={img}/>
                ))}
            </div>
        </>
    )
}

export default Board;