import { useState, useEffect, useCallback } from "react";
import BreedsSelect from "./BreedsSelect";
import './App.css'

export const DogListContainer = () => {
  const [dogall, setDogAll] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('');
  const [breedImages, setBreedImages] = useState([]);

  const fecthDogAll = useCallback(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch dog breeds');
        }
        return response.json();
      })
      .then(data => {
        const datalist = Object.keys(data.message);
        setDogAll(datalist);
      })
      .catch(error => {
        console.error('Error fetching dog breeds:', error);
      });
  },[]);
  
  const selectfecthDog = useCallback(() => {
    if (selectedBreed) {
      fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/20`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Failed to fetch images for breed ${selectedBreed}`);
          }
          return response.json();
        })
        .then(data => {
          setBreedImages(data.message);
        })
        .catch(error => {
          console.error(`Error fetching images for breed ${selectedBreed}:`, error);
        });
    }
  }, [selectedBreed]);
  

  const handleClickChange = () => {
    selectfecthDog();
  };

  useEffect(() => {
    fecthDogAll();
  }, [fecthDogAll]);

  useEffect(() => {
    selectfecthDog();
  },[selectfecthDog]);

  return (
    <div>
      <BreedsSelect breeds={dogall} selectedBreed={selectedBreed} setSelectedBreed={setSelectedBreed}/>
      <button onClick={handleClickChange}>Show</button>
      <h2>{selectedBreed}</h2>
      <div>
        <ul className='ul'>
        {breedImages.map(imageUrl => (
          <li key={imageUrl} className="li">
            <img src={imageUrl} alt={selectedBreed} />
          </li>
        ))}
        </ul>
      </div>
    </div>
  );
}

export default DogListContainer;
