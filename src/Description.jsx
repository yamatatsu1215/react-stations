// @ts-check
import React from "react"
import DogImage from "./DogImage"
import { useState } from "react";

export const Description = () => {
  const dogimage = 'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg';
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
  <p>犬の画像を表示するサイトです。</p>
  <DogImage imageUrl={dogUrl}></DogImage>
  <button onClick={butttonNewImage}>更新する</button>
  </div>
)
}

export default Description
