// @ts-check
import { useState, useEffect } from "react"
import BreedsSelect from "./BreedsSelect";

export const DogListContainer = () => {
  // データ一覧を保持するstate
  const [dogall,dogSelectAll] = useState([]);
    // 選択された犬種を保持するstate
  const [selectedBreed, setSelectedBreed] = useState('');
    // 選択された犬種の画像URL一覧を保持するstate
  const [breedImages, setBreedImages] = useState([]);

  // データ一覧
  const fecthDogAll = async () => {
    try{
      // 犬の画像を全取得
      const response = await fetch('https://dog.ceo/api/breeds/list/all');
      // データをjson形式で取得
      const data = await response.json();
      // APIレスポンスから犬のリストの配列を生成して変数に格納
      const datalist = Object.keys(data.message);
      dogSelectAll(datalist);
    } catch (error) {
      console.error('Error fecthing dog breeds:', error);
    }
  };


  // データ単品取得
  const selectfecthDog = async () => {
    if (selectedBreed){
      try{
        const response = await fetch(`https://dog.ceo/api/breed/${selectedBreed}/images`);
        const data = await response.json();
        setBreedImages(data.message);
    } catch (error) {
      console.error('Error fecthing images for breed ${selectedBreed}:', error);
    }
    }
  };
  useEffect(()=>{
    fecthDogAll();
  },[]);

  useEffect(()=>{
    selectfecthDog();
  },[selectedBreed]);

  return (
  <div>
    {/* 犬種の選択 */}
    <BreedsSelect breeds={dogall} selectedBreed={selectedBreed} setSelectedBreed={setSelectedBreed}/>
    {/* 選択された犬種の画像をリスト表示 */}
    <h2>{selectedBreed}</h2>
    <div>
      {breedImages.map(imageUrl => (
        <img key={imageUrl} src={imageUrl} alt={selectedBreed} />
      ))}
    </div>

  </div>
  )
}

export default DogListContainer
