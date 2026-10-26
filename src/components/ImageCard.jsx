import {useState} from "react";
import './ImageCard.css';
import {Link} from 'react-router';

function ImageCard({image}){
    const [liked, setLiked] = useState(false);                
    //first is data to keep track of, the second is the update

    return(
        <>
            <div className="card">
                <Link to={`/image/${image.id}`}>
                    <img src={image.src} alt={image.title} />
                </Link>
                <p>{image.title}</p>
                <button onClick = {() => setLiked(!liked)}>
                    {liked ? "♥︎" : "♡" }
                </button>
                <button></button>
            </div>
        </>
    )
}

export default ImageCard