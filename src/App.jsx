import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { useState } from 'react'
import ImageCard from './components/ImageCard.jsx'
import { Shuffle } from "./utils/Shuffle.js";

function App() {
  
  // function handleClicked(){
  //   console.log("clicked");
  // }

  // const imageData = {id:1, src:"images/blue-mountains.png", title:"Photo 1"}

  const startingImages = [
  { id: 1, src: "images/blue-mountains.png", title: "Yesterday" },
  { id: 2, src: "images/yellow-circle.png", title: "Today" },
  { id: 3, src: "images/two-fish.png", title: "Tomorrow" },
];

  const [images, setImages] = useState(startingImages);

  return (
    <>
    <button onClick={() => setImages(Shuffle(images))}>Shuffle</button>
    <div className='board'>
        {/* <button onClick={handleClicked}>Click Me</button> */}
        {/* <ImageCard image={imageData}/> */}

        {images.map((img) => (
          <ImageCard key={img.id} image={img}/>
        ))}
      </div>
    </>
  )
}

export default App
