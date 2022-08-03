import { useEffect, useState } from "react";

export default function DogPics() {
  const [image, setImage] = useState();
  // API: https://dog.ceo/dog-api/

  const getNewImage = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((response) => setImage(response.message));
  };

  useEffect(() => {
    getNewImage();
  }, []);

  return (
    <div className="dog-pics">
      {image ? (
        <img src={image} alt="random dog pic" />
      ) : (
        <p>Loading image...</p>
      )}
      <button onClick={() => getNewImage()}>🐶</button>
    </div>
  );
}
