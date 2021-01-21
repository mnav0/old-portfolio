import React, { useState, useEffect } from "react";
import { ImagesContainer, InstagramImg } from './styled'
import NavBar from "../../components/NavBar";
import imgService from "../Arts/service";
import InstagramEmbed from 'react-instagram-embed';

const Arts = () => {
  const [images, setImages] = useState("");
  const [imageLoading, setImageLoading] = useState("true");

  const clientToken = '658bb9e6cdd1f3af5459c6e7758ac706';
  const appId = '412624290046729';

  useEffect(() => {
    imgService
      .getImgData()
      .then(response => setImages(response))
      .finally(() => setImageLoading(false));
  }, []);

  console.log(images)
  return (
    <>
      <NavBar />
      {!imageLoading && <ImagesContainer>
      {images.data.map((post, index) => (
          
             <InstagramImg src={post.media_url} />
         
      ))}
      </ImagesContainer>}
    </>
  );
};

export default Arts;
