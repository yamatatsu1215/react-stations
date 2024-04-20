// DO NOT DELETE
import { useState } from 'react'
import './App.css'

/**
 * @type {() => JSX.Element}
 */

const dogimage = 'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg';

export const App = () => {
  const [dogUrl,setDogUrl] = useState(dogimage);

  const butttonNewImage = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        if (data && data.message) { // データとメッセージが正しく取得できているか確認
          setDogUrl(data.message);
        } else {
          console.error('Error fetching dog image:', data); // エラーの場合はデータをログに出力して確認
        }
      })
      .catch(error => {
        console.error('Error fetching dog image:', error);
      });
  };
  return (
    <div>
      <header className='header'>
        <h1>DOGアプリ</h1>
      </header>
      <p>犬の画像を表示するサイトです。</p>
      <img src={dogUrl} alt="dog" />
      <button onClick={butttonNewImage}>画像を変更</button>
    </div>
  )
}
