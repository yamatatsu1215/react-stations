// DO NOT DELETE
import { useState } from 'react'
import './App.css'

/**
 * @type {() => JSX.Element}
 */

const dogimage = 'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg';

export const App = () => {
  const [dogUrl,setDogUrl] = useState(dogimage); 
  return (
    <div>
      <header>
        <h1>DOGアプリ</h1>
      </header>
      <p>犬の画像を表示するサイトです。</p>
      <img src={dogUrl} alt="dog" />
    </div>
  )
}
