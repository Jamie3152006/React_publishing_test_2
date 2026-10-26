import { Routes, Route, Link } from 'react-router';
import './App.css'
import { useState } from 'react'
import ImageCard from './components/ImageCard.jsx'
import { Shuffle } from "./utils/Shuffle.js";
import Board from './pages/Board.jsx'
import About from './pages/About.jsx'
import ImageDetail from './pages/ImageDetail.jsx';

function App() {
  
  // function handleClicked(){
  //   console.log("clicked");
  // }
  // const imageData = {id:1, src:"images/blue-mountains.png", title:"Photo 1"}

  const startingImages = [
  { id: 1, src: "/images/blue-mountains.png", title: "Yesterday" },
  { id: 2, src: "/images/yellow-circle.png", title: "Today" },
  { id: 3, src: "/images/two-fish.png", title: "Tomorrow" },
];

  const [images, setImages] = useState(startingImages);

  return (
    <>
      <nav>
        <Link to = "/">Home</Link>
        <Link to="/About">About</Link>
      </nav>


       <Routes>
        <Route
          path="/"
          element={
            <Board
              images={images}
              onShuffle={() => setImages(Shuffle(images))}
            />
          }
        />
        <Route path="/About" element={<About />} />
        <Route 
          path="/image/:id"
          element ={
            <ImageDetail images={images} />
          }
        />

      </Routes>
    </>
  )
  
}

export default App
