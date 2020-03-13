import React, { useState } from 'react';
import './App.css';

export default function Article(props) {
  const { title, description, url, urlToImage } = props;
  const [imageLoaded, setImageLoaded] = useState(false);

  const onImageLoaded = () => {
    setImageLoaded(true);
  }

  return <div className="item">
    <div className={`ui small image ${imageLoaded ? '' : 'display-none'}`}>
      <img src={urlToImage} alt={title} onLoad={onImageLoaded} />
    </div>

    <div className={`content ${imageLoaded ? '' : 'padding-left-0'}`}>
      <a className="header" href={url} target="_blank" rel="noopener noreferrer">{ title }</a>
      <div className="description">
        { description }
      </div>
    </div>
  </div>;
}
